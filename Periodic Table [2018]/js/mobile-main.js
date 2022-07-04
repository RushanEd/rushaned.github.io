$(document).ready(function(){
	function colorElemets() {
			 $('table.perTable td,table.perTable td.active,table.perTable td.non').not('td.d,td.non,td.dnum').attr('class',function() {
				 var sec=$('div.classes a.a').attr('id');
				 if (sec==='metallicc') {
					 var c=eval($(this).attr('id')).classification
					 return c
				 }
				 var c=$('.temp').val();
				 var e=eval($(this).attr('id'));
				 if (sec==='phasec') {
					 if (c<Number(e.liquidIn)&&c<Number(e.gasIn)) {
						 return 'Solid'
					 }if (c>=Number(e.liquidIn)&&c<Number(e.gasIn)) {
						 return 'Liquid'
					 }if (c>Number(e.liquidIn)&&c>=Number(e.gasIn)) {
						 return 'Gas'
					 }
				 }
				 if (sec==="valancyc") {
					 var vl='vale'+eval($(this).attr('id')).valancy;
					 return vl;
				 }
				 if (sec==="densityc") {
					 var d=Number(e.density);
					 if (d<=1) {return 'd001_1'}
					 if (d>=1&&d<3) {return 'd1_3'}
					 if (d>=3&&d<6) {return 'd3_6'}
					 if (d>=6&&d<9) {return 'd6_9'}
					 if (d>=9&&d<12) {return 'd9_12'}
					 if (d>=12&&d<15) {return 'd12_15'}
					 if (d>=15&&d<18) {return 'd15_18'}
					 if (d>18) {return 'd18'}
				 }
		 if (sec==="electronegativityc") {
			 var d=Number(e.electronegativity);
					 if (d===0) {return 'en0'}
					 if (d>0&&d<1) {return 'en1_2'}
					 if (d>=1&&d<1.5) {return 'en2_3'}
					 if (d>=1.5&&d<2) {return 'en3_4'}
					 if (d>=2&&d<2.5) {return 'en4_5'}
					 if (d>=2.5&&d<3) {return 'en5_6'}
					 if (d>=3&&d<3.5) {return 'en6_7'}
					 if (d>=3.5) {return 'en7_8'}
		 }
			 });
	}
	function divleft() {
		$('div.left catset a').on('mouseover',function() {
			 var id=$(this).attr('id');
			 var aid=$('div.left .classes a.a').attr('id');
			 if (aid==='phasec') {
				 $('table.perTable td').not('td.d,td.dnum').addClass('non');
			 $('table.perTable td.active').removeClass().addClass('non');
			 $('.'+id).removeClass().addClass(id);
			 }if(aid==="metallicc") {
				 $('table.perTable td').not('td.d,td.dnum').addClass('non');
			 $('table.perTable td.active').removeClass().addClass('non');
			 var id=$(this).attr('id');
			 eval($(this).attr('id')+'x').attr('class',function() {
				  return id
			 });
			 }if(aid==="valancyc") {
				 $('table.perTable td').not('td.d,td.dnum,.'+id).addClass('non');
			 $('table.perTable td.active').removeClass().addClass('non');
			 }
			 if (aid==="densityc") {
				 $('table.perTable td').not('td.d,td.dnum,.'+id).addClass('non');
			 $('table.perTable td.active').removeClass().addClass('non');

			 }if (aid==="electronegativityc") {
				 $('table.perTable td').not('td.d,td.dnum,.'+id).addClass('non');
			 $('table.perTable td.active').removeClass().addClass('non');
			 }
		}).on('mouseout mouseleave',function() {
			 //Disable all highlighted elements and recolor them
			 $('table.perTable td').not('td.d,td.dnum').removeClass();
			 colorElemets();
		});
   }
	colorElemets();
	divleft();
	$('a span').attr('style',function() {
		return 'background:'+eval($(this).parent().attr('id')).color+';'
   });
   $('div.left #metallicClass a').click(function() {
	location.reload();
})
	$('.floatRight').hide();
	$('div.body').css({width:'1000px'});
	$('table.perTable td').not('.d,.dnum').on('click',function(){
		var id=$(this).attr('id');
		var e=eval(id);
		if (location.href.indexOf('#cat=')<0) {
			$('div.mobile_down').css({
				bottom:'0'
			}).attr('id',function(){
				return 'c'+id
			});
		}
		$('#mename').html(e.name+'<a href="javascript:void(0);" class="topRightNE"><i class="fa fa-chevron-up"></i> </a>');
		$('.chemInfo').attr('name',$(this).attr('id'));
		$('.chemInfo .detAc').html(function(){
			var ids=$(this).attr('id').slice(1);
			if (ids==='classification') {
				return eval(e[ids]).name
			}else {
				return e[ids]
			}
		});
		$('#elementName').html(e.name).parent().attr('style','background:'+eval(e.classification).color);
		$('#elementSymbol').html(e.symbol);
		$('#elementId').html($(this).attr('id').slice(1));
		$('a.topRightNE').click(function(){
    		if ($('div.mobile_down').outerHeight()<=$('div.line').outerHeight()/2) {
    			$('div.mobile_down').css({
					height:'100%',
					overflow:'auto'
				});
				$(this).children('i').attr('class','fa fa-chevron-down');
    		}else {
    			$('div.mobile_down').css({
					height:'35%',
					bottom:'-35%',
					overflow:'hidden'
				});
				$(this).children('i').attr('class','fa fa-chevron-up');
    		}
 	   });
		 $('.perTable td.d').click(function() {
			 $('div.mobile_down').css({
			 height:'35%',
			 bottom:'-35%'
		 });

	 });
	});
	$('#mPshowLeft').click(function(){
		$('div.left').css({
			left:'0'
		});
		$('div.right').css({
			right:'-75%'
		});
		$('#blackWall').fadeIn();
		setTimeout(function() {
			$('#blackWall').click(function(){
				$('div.left').css({
					left: '-75%'
				});
				$(this).fadeOut();
		});
		},150);
	});
	$('#mPshowRight').click(function(){
		$('div.right').css({
			right:'0'
		});
		$('div.left').css({
			left:'-75%'
		});
		$('#blackWall').fadeIn();
		setTimeout(function() {
			$('#blackWall').click(function(){
				$('div.right').css({
					right: '-75%'
				});
				$(this).fadeOut();
		});
		},150);
	})
	function checkUrl() {
		var url=location.href.toString();
		if (url.includes('#')&&url.includes('=')) {
			 var upurl=url.split('#')[1];
			 var cat=upurl.split('=')[1];
			 if (cat!='undefined'&&cat.indexOf('vale')===-1) {
				  $('table.perTable td').not('td.d,td.dnum').addClass('non');
				  $('table.perTable td.active').removeClass().addClass('non');
				  eval(cat+'x').attr('class',function() {
					   return cat
				  });
				  $('#'+cat).removeClass().addClass('active');
				  $('table.perTable td.non').click(function() {
					   $('body').append(function() {
							return '<div class="alert">Do you want to see all other elements ?<br><button class="yes">Yes</button><button class="no">No</button></div>'
					   });
					   $('#blackWall').fadeIn();
					   $('div.alert .no').click(function() {
							$(this).parent().remove();
							$('#blackWall').fadeOut();
					  });
					   $('div.alert .yes').click(function() {
							var url=location.href.toString().split('#')[0];
							location.href=url;
					   });
				  });
				  $('#elementView').show();
				  $('#currentCata').html(cat+'<a href="javascript:void(0);"><i class="far fa-check-square"></i></a>');
				  $('#getCatUrl').click(function() {
					   copyStringToClipboard(url);
					   $(this).html('Copied');
				  });
				  $('#viewAllCata').click(function() {
					   var url=location.href.toString().split('#')[0];
					   location.href=url;
				  });
				  $('#urlCurrent').show();
				  $('table.perTable td').not('td.d,td.non,td.dnum').prepend(function() {
					   return '<i>'+$(this).attr('id').slice(1)+'</i>';
				  });
			 }if (cat!='undefined'&&cat.indexOf('vale')>-1) {
				  alert('h')
			  }
			//clear

		}if (url.indexOf('#')<=1) {
			 divleft();
			 //Table 6 and 7
			 $('table.perTable td.dnum').on('mouseover',function() {
				  $('table.perTable td').not('td.d,td.dnum,'+eval($(this).attr('id'))).addClass('non');
				  $('table.perTable td.active').removeClass().addClass('non');
			 }).on('mouseout',function() {
				  $('table.perTable td').not('td.d,td.dnum').removeClass();
				  colorElemets();
			 });
			 //Set atomic number for element cells in table
			 $('table.perTable td').not('.d,.dnum').prepend(function() {
				  return '<i>'+$(this).attr('id').slice(1)+'</i>';
			 }).on('mouseover',function() {
				  //Making the right side bar information
				  var e=eval($(this).attr('id'));
				  $('#elementName').html(e.name).parent().css({background:eval(e.classification).color});
				  $('#elementSymbol').html(e.symbol);
				  $('#elementId').html($(this).attr('id').slice(1));
				  //Indicate catagorize on hover on element cell in table
				  $('div.left catset a').removeClass();
				  var div=$('div.classes a.a').attr('id');
				  if (div==="metallicc") {
					   $('#'+e.classification).addClass('active');
				  }if (div==="valancyc") {
					   $('#vale'+e.valancy).addClass('active');
				  }if (div==="phasec") {
					   var temp=$('.temp').val();
											   if (temp<=e.liquidIn) {$('#phaseClass').children('a').removeClass();$('#Solid').addClass('active');}
					   if (temp>e.liquidIn&&temp<e.gasIn) {$('#phaseClass').children('a').removeClass();$('#Liquid').addClass('active');}
					   if (temp>=e.gasIn) {$('#phaseClass').children('a').removeClass();$('#Gas').addClass('active');}
				  }
				  if (div==="densityc") {
						 $('#'+$(this).attr('class')).addClass('active');
				  }
				  if (div==="electronegativityc") {
					  $('#'+$(this).attr('class')).addClass('active');
				  }
				  $('#col'+Array.prototype.indexOf.call(this.parentElement.children, this)).css({
					   background:'#1f55aa',color:'#99ddff'
				  });
				  $('#'+$(this).parent().attr('name')).css({
					  background:'#1f55aa',color:'#99ddff'
				  })
			 }).on('mouseout',function() {
				  //Disable catagorize highlighting
				  $('div.left catset a').not('div.left catset a.title').removeClass();
				  $('tr.cols td,.perTable tr td:first-child').css({
					   background:'transparent',color:'#c5c6c7'
				  });
			 });
		}if(url.indexOf('#')>=0&&url.indexOf('element')>=0){
			var id=url.split('#element')[1];
			var e=eval(id);
			  $('#'+id).prepend(function() {
				return '<i>'+$(this).attr('id').slice(1)+'</i>'
			});
			  $('#elementId').html(id.slice(1));
			$('table.perTable td').not('td.d,td.dnum,#'+id).css({
				opacity:'.2'
			}).click(function(){
				location.href="index.html"
			});
			$('#elementName').html(e.name).parent().attr('style','background:'+eval(e.classification).color);
			 $('#elementSymbol').html(e.symbol);
			 //Indicate catagorize on hover on element cell in table
			 $('div.left catset a').removeClass();
			 $('#'+e.classification).addClass('active');
		}
   }
   checkUrl();
});
