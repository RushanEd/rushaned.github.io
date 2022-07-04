$(document).ready(function() {
     var id=$('body').attr('id');
     var e=eval(id);
     var url=location.href.toString();
     var wid=$(window).outerWidth();
     if (wid<450) {
     	$('header form').hide();
     	$('div.body').css({width:'100%'});
     	$('div.mobMenu').css({width:wid+'px'}).show();
     	$('div.left').css({
     		left: '-55%',
     		zIndex:'50000000000',
     		position:'fixed',
     		width:'55%',
     		background:'#ffffff',
     		transition:'all .3s ease',
     		borderRight: '1px solid silver',
     	});
     	$('div.right').css({
     		right:'-55%',
     		zIndex:'50000000000',
     		position:'fixed',
     		width:'55%',
     		transition:'all .3s ease',
     		borderLeft: '1px solid silver',
     	})
     	$('#showLeft').click(function(){
     		$('div.left').css({
     			left: '0%'
     		});
     	});
     	$('#showRight').click(function(){
     		$('div.right').css({
     			right: '0%'
     		});
     	});
  	   $('div.body').click(function(){
     		$('div.left').css({left:'-55%'});
     		$('div.right').css({
     			right: '-55%'
     		});
    	 });
     }
     function alertm(e) {
          $('body').append('<div class="alertt">'+e+'<br><button>Cancel</button></div>');
          $('#blackWall').fadeIn();
          setTimeout(function(){
               $('div.alertt').fadeIn(300);
               $('div.alertt button').click(function(){
                    $(this).parent().remove();
                    $('#blackWall').fadeOut();
               });
        }, 20);
     }
     if (id!='ep') {
     	$('#headerName').html(e.name);
     $('a.openIn').attr('href',function() {
          var e=eval($('body').attr('id'));
          return '../../index.html#'+e.name
     });
     }
     var i=0;
     do {
          i=i+1
          $('#elements').append(function() {
               if (id!='undefined') {
               	if ($('body').attr('id').slice(1)===i.toString()) {
                    return '<a href="javascript:void(0);" class="a"><cf>'+i+'</cf>'+eval('e'+i).name+'</a>';
               }
               else {
                    return '<a href="file:///C:/Users/RE/Documents/website/2018[5]/Holytable/elements/e'+i+'/index.html"><cf>'+i+'</cf>'+eval('e'+i).name+'</a>';
               }
               }
          });
     } while (i<126);
     $('arrow').html('<c style="display:inline-block;height:3px;width:30px;background:black;"></c><i class="fa fa-chevron-right"></i>');
     setTimeout(function() {
          var top=(Number($('div.left a.a cf').html())-1)*$('div.left a').outerHeight()+$('div.left h3').outerHeight();
          $('div.left').animate({
               scrollTop: top+'px'
          },500);
          if (url.indexOf('mpara')>=1) {
               var to=url.split('#')[1].slice(1);
               var far=$('#'+to).offset().top;
               $('html,body').animate({
                    scrollTop: far+'px'
               });
               $('div.right #k'+to.slice(4)).attr('class','av');
          }
          $('div.text h1 a').click(function() {
               $('body,html').animate({
                    scrollTop: $(this).offset().top+'px'
               });
          });
          $('div.text h1').on('mouseover mouseenter',function() {
               $(this).children('a').show(0);
          }).on('mouseout mouseleave',function() {
               $(this).children('a').hide(0);
          });
     },500);
     $('div.text h1').prepend(function() {
          var i=$(this).attr('id');
          return '<a href="#m'+i+'"><i class="fa fa-link"></i></a>';
     });
     $('dta').html(function() {
          var s=$(this).attr('class').slice(2);
          if (s.indexOf('In')<=0) {
         	return e[s];
         }else {
         	return Number(e[s])+273.15+" 'C";
         }
     });
     $('dtac').html(function() {
          var s=$(this).attr('class').slice(2);
          var n=e[s];
          return eval(n).name
     }).attr('style',function(){
     	var s=$(this).attr('class').slice(2);
        var n=e[s];
        return 'background:'+eval(n).color+';'
     }).on('click',function(){
     	alertm('View all '+$(this).text()+' ?<br><a target="_blank" href="../../index.html#cat='+e.classification+'">Other nonmetals | HolyTable</a>');
     })
     $('dtaa').html(function() {
           return id.slice(1);
     });
     $('imgp').html(function() {
          return '<img src="'+$(this).attr('src')+'" class="pr"><div class="caption">'+$(this).attr('caption')+'</div>';
     });
     $('ptable').html(function() {
          var id=$(this).attr('elem');
          var tabletext='<table class="perTable"><tr name="row1"><td id="e1">H</td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td id="e2">He</td></tr><tr name="row2"><td id="e3">Li</td><td id="e4">Be</td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td id="e5">B</td><td id="e6">C</td><td id="e7">N</td><td id="e8">O</td><td id="e9">F</td><td id="e10">Ne</td></tr><tr name="row3"><td id="e11">Na</td><td id="e12">Mg</td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td id="e13">Al</td><td id="e14">Si</td><td id="e15">P</td><td id="e16">S</td><td id="e17">Cl</td><td id="e18">Ar</td></tr><tr name="row4"><td id="e19">K</td><td id="e20">Ca</td><td id="e21">Sc</td><td id="e22">Ti</td><td id="e23">V</td><td id="e24">Cr</td><td id="e25">Mn</td><td id="e26">Fe</td><td id="e27">Co</td><td id="e28">Ni</td><td id="e29">Cu</td><td id="e30">Zn</td><td id="e31">Ga</td><td id="e32">Ge</td><td id="e33">As</td><td id="e34">Se</td><td id="e35">Br</td><td id="e36">Kr</td></tr><tr name="row5"><td id="e37">Rb</td><td id="e38">Sr</td><td id="e39">Y</td><td id="e40">Zr</td><td id="e41">Nb</td><td id="e42">Mo</td><td id="e43">Tc</td><td id="e44">Ru</td><td id="e45">Rh</td><td id="e46">Pd</td><td id="e47">Ag</td><td id="e48">Cd</td><td id="e49">In</td><td id="e50">Sn</td><td id="e51">Sb</td><td id="e52">Te</td><td id="e53">I</td><td id="e54">Xe</td></tr><tr name="row6"><td id="e55">Cs</td><td id="e56">Ba</td><td class="d"></td><td id="e72">Hf</td><td id="e73">Ta</td><td id="e74">W</td><td id="e75">Re</td><td id="e76">Os</td><td id="e77">Ir</td><td id="e78">Pt</td><td id="e79">Au</td><td id="e80">Hg</td><td id="e81">Tl</td><td id="e82">Pb</td><td id="e83">Bi</td><td id="e84">Po</td><td id="e85">At</td><td id="e86">Rn</td></tr><tr name="row7"><td id="e87">Fr</td><td id="e88">Ra</td><td class="d"></td><td id="e104">Rf</td><td id="e105">Db</td><td id="e106">Sq</td><td id="e107">Bh</td><td id="e108">Hs</td><td id="e109">Mt</td><td id="e110">Ds</td><td id="e111">Rg</td><td id="e112">Cn</td><td id="e113">Nh</td><td id="e114">Fl</td><td id="e115">Mc</td><td id="e116">Lv</td><td id="e117">Ts</td><td id="e118">Og</td></tr><tr name="row8"><td id="e119">Uue</td><td id="e120">Ubn</td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td></tr><tr name="row6"><td class="d"></td><td class="d"></td><td class="d"></td><td id="e57">La</td><td id="e58">Ce</td><td id="e59">Pr</td><td id="e60">Nd</td><td id="e61">Pm</td><td id="e62">Sm</td><td id="e63">Eu</td><td id="e64">Gd</td><td id="e65">Tb</td><td id="e66">Dy</td><td id="e67">Ho</td><td id="e68">Er</td><td id="e69">Tm</td><td id="e70">Yb</td><td id="e71">Lu</td></tr><tr name="row7"><td class="d"></td><td class="d"></td><td class="d"></td><td id="e89">Ac</td><td id="e90">Th</td><td id="e91">Pa</td><td id="e92">U</td><td id="e93">Np</td><td id="e94">Pu</td><td id="e95">Am</td><td id="e96">Cm</td><td id="e97">Bk</td><td id="e98">Cf</td><td id="e99">Es</td><td id="e100">Fm</td><td id="e101">Md</td><td id="e102">No</td><td id="e103">Lr</td></tr><tr name="row8"><td class="d"></td><td class="d"></td><td class="d"></td><td id="e121">Ubu</td><td id="e122">Ubb</td><td id="e123">Ubt</td><td id="e124">Ubq</td><td id="e125">Ubp</td><td id="e126">Ubh</td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td><td class="d"></td></tr> </table>';
          var c='<td id="'+id+'">'+eval(id).symbol+'</td>';
          var t='<td id="'+id+'" class="a">'+eval(id).symbol+'</td>';
          var newt=tabletext.replace(c,t);
          return newt;
     }).on('click',function() {
          alertm('Visit HolyTable<br><a href="../../index.html" target="_blank">www.holytable.com</a>');
     });
     setTimeout(function() {
          $('ptable td').css({
               width: $('div.body').outerWidth()/18+'px'
          });
          $('ptable td').not('.d').prepend(function() {
               var id=$(this).attr('id');
               return '<supta>'+id.slice(1)+'</supta>';
          });
     });
     $(document).scroll(function() {
          //make the right dynamic
     });
     $('#expandAdv').on('click',function(){
     	if ($('#advancedText').css('display')==="none") {
     		$('#advancedText').slideDown(350);
     		var h=$(window).outerHeight();
     		$('html,body').animate({
     			scrollTop: '+='+h+'px'
     		},650);
     		$(this).html('<i class="fa fa-chevron-up"></i> Hide advanced information');
     	}else {
     		$('#advancedText').slideUp(350);
     		$(this).html('<i class="fa fa-chevron-down"></i> Expand advanced information');

     	}
     });
     $('#print').click(function(){
     	window.print();
     });
     $('div.text').append(function(){
     	return '<a href="../ads.html" target="_blank">If you liked the article, click here. This is an ad. Thank you ! </a>'
     });
     $('a.el').html(function(){
     	var id=$(this).attr('id');
     	var e=eval(id);
     	return '<h1>'+e.symbol+'</h1><i>'+id.slice(1)+'</i><div>'+e.name+'</div>'
     }).attr('style',function(){
     	return 'background:'+eval(eval($(this).attr('id')).classification).color+';'
     }).attr('href',function(){
     	return '../'+$(this).attr('id')+'/index.html'
     });
     $('#leftPag').append(function(){
     	if (id==='e1') {
     		$(this).hide();
     	}else{
     		var newid='e'+(Number($('body').attr('id').slice(1))-1);
     		return '<span>'+eval(newid).name+'</span>'
     	}
     }).attr('href',function(){
   		var id='e'+(Number($('body').attr('id').slice(1))-1);
   		return '../'+id+'/index.html'
     });
     $('#rightPag').prepend(function(){
     	var newid='e'+(Number($('body').attr('id').slice(1))+1);
     	return '<span>'+eval(newid).name+'</span>'
     }).attr('href',function(){
   		var id='e'+(Number($('body').attr('id').slice(1))+1);
   		return '../'+id+'/index.html'
     });
     $('div.tags a').attr('href',function(){
     	return '../search.html?q='+$(this).text();
     });
     $('div.right a').click(function(){
     	var ind=$(this).attr('href').slice(2)
     	$('html,body').animate({
     		scrollTop: $('#'+ind).offset().top+'px'
     	});
     });
     $('div.tabs button').click(function(){
     	$('div.tab').hide();
     	$('#'+$(this).attr('id').slice(0,-1)).show();
     	$('div.tabs button').removeClass();
     	$(this).addClass('a');
     	var y=$(this).offset().top;
     	$('body,html').animate({
     		scrollTop: y+'px'
     	});
     });
     //To get suggestions for autocomplete.js
     /*$('#showb').click(function(){
     	var i=0;
     	localStorage.setItem('htmlt','');
    	do {
          i=i+1
          var htmlt=localStorage.htmlt+' '+'{ value: "'+eval('e'+i).colorName+'", data: "" },'
          localStorage.setItem('htmlt',htmlt);
    	 } while (i<126);
    	 $('body').html(function(){
    	 	return '<textarea>'+localStorage.htmlt+'</textarea>'
    	 })
     })*/
     //For search db
     /*$('#showb').click(function(){
     	var i=0;
     	localStorage.setItem('htmlt','');
    	do {
          i=i+1
          var e=eval('e'+i);
          var htmlt=localStorage.htmlt+' '+'{"title": "e'+i+'", "text": "", "tags": "'+e.name+' '+eval(e.classification).name+' '+e.latin+' '+e.disBy+' '+e.yeaDis+'", "url": ""},\n\r'
          localStorage.setItem('htmlt',htmlt);
    	 } while (i<126);
    	 $('body').html(function(){
    	 	return '<textarea>'+localStorage.htmlt+'</textarea>'
    	 })
     })*/
});
