const WIDTH = $(window).outerWidth();
const numOfElements = 119;
const DATARESP = ["name","appearance","relativeAtomicMass","boil","category2","color","density","discovered_by","melt","molar_heat","named_by","number","period","phase","source","spectral_img","summary","symbol","xpos","ypos","shells","electron_configuration","electron_affinity","electronegativity_pauling","ionization_energies","neutrons","category"];
function after_data_loaded(ELEMENTS,CLASSES) {
  function uscolorer() {
    for (var i = 1; i < numOfElements; i++) {
      var color = CLASSES['c'+ELEMENTS['e'+i][DATARESP.indexOf("category")]][1];
      $('#e'+i).css({
        borderColor: '#'+color
      });
    }
  }
  uscolorer();
  for (var i = 1; i < numOfElements; i++) {
    var eelem=$('#e'+i);
    // var color = "fff";
    eelem.on("mouseover",function() {
      var atomicNumber = $(this).attr("id");
      var name = ELEMENTS[atomicNumber][DATARESP.indexOf("name")]
      var sym = ELEMENTS[atomicNumber][DATARESP.indexOf("symbol")]
      var neuts = ELEMENTS[atomicNumber][DATARESP.indexOf("neutrons")]
      var color = CLASSES['c'+ELEMENTS[atomicNumber][DATARESP.indexOf("category")]][1];
      $('#infoTdEleBox>i').html(atomicNumber.slice(1));
      $('#infoTdEleBox b').html(sym);
      $('#infoTdEleBox span').html(name);
      $('#infoTdEleBox u').html(Number(neuts)+Number(atomicNumber.slice(1)));
      $('#infoTdEleBox s i').css({color:'#'+color});
    });
    eelem.on("click",function() {
      var e = $(this).attr("id");
      var name = ELEMENTS[e][DATARESP.indexOf("name")]
      $("#seleEleDete").html(name);
      $('#get_elemes_data').data('elem',e);
      if (WIDTH<427) {
        var top = $(window).outerHeight()-$('.mobile_options_first_btn').outerHeight()
        $('.mobile_options').css({
          top: top+'px'
        });
        loadRightInfo(ELEMENTS,DATARESP,e.slice(1),CLASSES);
      }
    }).on('dblclick',function() {
      var e = $(this).attr("id");
      var name = ELEMENTS[e][DATARESP.indexOf("name")]
      $("#seleEleDete").html(name);
      $('#get_elemes_data').data('elem',e);
      $('#get_elemes_data').click();
    });
  }
  var arrCls=$('#forNormalCateSys').children();
  var arrClsLength=arrCls.length;
  for (var i = 0; i < arrClsLength; i++) {
    var setId = "c"+(i+1);
    var selElem = $(arrCls[i]);
    var color = CLASSES[setId][1];
    selElem.attr("id",setId);
    selElem.children('i').css({color:"#"+color});
    selElem.on("mouseover",function() {
      var this_cate_id = $(this).attr('id').slice(1);
      var array_of_elements_to_be_selected_to_show = [];
      for (var i = 1; i < numOfElements; i++) {
        var ele_cate_this = ELEMENTS['e'+i][DATARESP.indexOf("category")];
        if (Number(ele_cate_this)===Number(this_cate_id)) {
          array_of_elements_to_be_selected_to_show.push(i);
        }
      }
      var length_of_selected_elements = array_of_elements_to_be_selected_to_show.length;
      $('.perTable td').not(".d,.dnum").css({background:'#0002'});
      for (var i = 0; i < length_of_selected_elements; i++) {
        $('#e'+array_of_elements_to_be_selected_to_show[i]).css({background:'#fff1'});
      }
    });
  }
  $('edata').html(function() {
    var t = $(this).html();
    var e = t.split('.')[0];
    var r = t.split('.')[1];
    return ELEMENTS[e][DATARESP.indexOf(r)];
  }).css({display:'inline'});

  $('#get_elemes_data').click(function() {
    var elem = $(this).data("elem").slice(1);
    location.href="#element="+elem;
    loadRightInfo(ELEMENTS,DATARESP,elem,CLASSES);
  });
  $('#filter_elems_inp').on('keyup keydown',function() {
    var v = $(this).val();
    if (v.length>0) {
      var keep_arr = [];
      for (var i = 1; i < numOfElements; i++) {
        $('#e'+i).css({opacity:'0'});
        // if (ELEMENTS["e"+i][DATARESP.indexOf("name")].search(v)>0) {
        //   keep_arr.push(i);
        // } else {
        //   $('#e'+i).css({opacity:'0.2'});
        // }
        if (ELEMENTS["e"+i][DATARESP.indexOf("name")].toLowerCase().indexOf(v.toString().toLowerCase())>-1 || i.toString()===v.toString()) {
          // console.log(ELEMENTS["e"+i][DATARESP.indexOf("name")].toLowerCase());
          keep_arr.push(i);
        }
      }
      var num_keeps = keep_arr.length;
      for (var ec = 0; ec < num_keeps; ec++) {
        $('#e'+keep_arr[ec]).css({opacity:'1'});
      }
    } else {
      for (var i = 0; i < numOfElements; i++) {
        $('#e'+i).css({opacity:'1'});
      }
    }
  });
  $.post("assets/data/meltboil.json",function(data,status) {
    if (status==="success") {
      const MELTBOIL = JSON.parse(JSON.stringify(data));
      $('#temperature').on('input change',function() {
        var v =$(this).val();
        meltboiler(v);
        $('.temp_keys_feat').show();
      }).on('mouseout',function() {
        uscolorer();
        $('.temp_keys_feat').hide();
        $('.perTable td').not('.dnum,.d').css({background:'#0002'});
      });
      function meltboiler(v) {
        $('.temperature_div button').html(v);
        for (var i = 1; i < numOfElements; i++) {
          var m = MELTBOIL["e"+i][0];
          var b = MELTBOIL["e"+i][1];
          if (m!==null && b!==null) {
            if (v >= b) {
              $('#e'+i).css({borderColor:'#0005',background:'#888'});
            } if (v > m && v < b) {
              $('#e'+i).css({borderColor:'#0005',background:'#36c'});
            } if ( v <= m) {
              $('#e'+i).css({borderColor:'#0005',background:'#333'});
            }
          } else {
            $('#e'+i).css({borderColor:'#0005',background:'#000'});
          }
        }
        $('#temperature').val(v);
      }
      $('.temperature_div button').mousedown(function() {
        meltboiler(298);
      }).mouseup(function() {
        uscolorer();
        $('.temp_keys_feat').hide();
        $('.perTable td').not('.dnum,.d').css({background:'#0002'});
      });
    }
  });
}
function loadRightInfo(ELEMENTS,DATARESP,elem,CLASSES) {
  var elem_right_ided_div = $('#elem_right_ided_div').length;
  var url = location.href.split("#element=")[1];
  function dyn_htmler() {
    $('.x21,.otherElemeneries,.xn6').html(function() {
      var datec = $(this).data('spec');
      var rec = ELEMENTS["e"+elem][DATARESP.indexOf(datec)];
      if (datec==="ionization_energies") {
        rec= rec.toString().split(",").join(' &nbsp; ');
      }if (datec==="shells") {
        rec= rec.toString().split(",").join(' &nbsp; ');
      }if (datec==="category") {
        rec = CLASSES["c"+rec][0];
      } if (datec==="source") {
        rec = "https://en.wikipedia.org/wiki/"+ELEMENTS["e"+elem][DATARESP.indexOf("name")];;
      }
      if (rec!=="null" && rec!=="" && rec!==null) {
        return rec
      } else {
        return "---"
      }
    });
    $('.elem_right_mass_number').html(Number(ELEMENTS["e"+elem][DATARESP.indexOf("neutrons")])+Number(ELEMENTS["e"+elem][DATARESP.indexOf("number")]));
    $('.elem_right_external a').attr('href','https://en.wikipedia.org/wiki/'+ELEMENTS["e"+elem][DATARESP.indexOf("name")]);
  }
  if (!elem_right_ided_div) {
    $('.right_dyn_cont').css({height:"100vh"}).html('<i class="fa fa-spin fa-spinner fa-2x" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:50;"></i>');
    $.post("panes/elem_right.php",function(data,status) {
      if (status==="success") {
        $('.right_dyn_cont').html(function() {
          return data;
        });
        dyn_htmler();
      }
    });
  }
  dyn_htmler();
}
function change_cate_system(val) {
  if (val==="density") {
    $('.cls_elem_btns').hide();
    $('#forDensityCateSys').show();
  }
}
function escape_functions() {
  $(document).on('keyup',function(e) {
    if (e.which===27) {
      $('.mid').focus();
    }
  })
}
$(document).ready(function() {
  $.post("assets/data/mix-elements.json",function(data,status) {
    if (status==="success") {
      const ELEMENTS = JSON.parse(JSON.stringify(data));
      $.post("assets/data/cls.json",function(data2,status2) {
        if (status2==="success") {
          const CLASSES = JSON.parse(JSON.stringify(data2));
          after_data_loaded(ELEMENTS,CLASSES);
          $('table.perTable td').not('.d,.dnum').on("mouseover",function() {
            $(this).css({background:'#fff1'});
          }).on("mouseout",function() {
            $(this).css({background:'#0002'});
          });
          $('.cls_elem_btns').on("mouseout",function() {
            $('.perTable td').not(".d,.dnum").css({background:'#0002'});
          });
          if (localStorage.getItem("lang")!==undefined) {
            $('#'+localStorage.lang+'LangBtn').attr('class','a');
          } else {
            $('#enLangBtn').attr('class','a');
          }
          $('.right').css({
            minWidth: $('.body').outerWidth()-$('.left').outerWidth()-$('.mid').outerWidth()+'px'
          });
          if (location.href.indexOf("#")>0) {
            var url = location.href.split("#element=")[1];
            loadRightInfo(ELEMENTS,DATARESP,url,CLASSES);
          } else {
            $.post("panes/right.php",function(data,status) {
              if (status==="success") {
                $('.right_dyn_cont').html(data);
              }
            });
          }
          escape_functions();
        }
      });
    } else {
      console.log("ERROR ON OUR CODE");
    }
  });
});
