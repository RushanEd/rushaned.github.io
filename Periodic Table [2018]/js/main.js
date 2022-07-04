  $(document).ready(function() {

     //Add class names for each elements and color them
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
            	if (c<=Number(e.liquidIn)) {
            		return 'Solid'
            	}if (c>Number(e.liquidIn)&&c<Number(e.gasIn)) {
            		return 'Liquid'
            	}if (c>=Number(e.gasIn)) {
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
		 function printElem(elem){
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
		mywindow.document.write('<style>body{font-family:calibri;}table td{position:relative;font-size:20px;}table i{font-size:10px;font-style:normal;position:absolute;top:2px;left:2px;}div.det{display:none;}.dnum{font-size:13px;}</style>');
    mywindow.document.write('</head><body>');
    mywindow.document.write('<h1>Periodic Table</h1><div class="body"><table class="perTable">');
    mywindow.document.write(document.getElementsByClassName(elem)[0].innerHTML);
    mywindow.document.write('</table></div></body></html>');
		colorElemets();
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
		mywindow.print();
    mywindow.close();
    return true;
}
     //Set background color for catagorized circle
     $('a span').attr('style',function() {
          return 'background:'+eval($(this).parent().attr('id')).color+';'
     });
     $('#reorder').click(function() {
          window.open('elements/settings.html',"_blanck")
     });
     colorElemets();
     //Highlight catagorized elements on hover on div.left catset a (catagorize)
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
     //Close alert button event
     $('div.alert button.closeAlert').on('click',function() {
          $(this).parent().fadeOut();
          $('#blackWall').fadeOut();
     });
     $('div.left #metallicClass a').click(function() {
          location.reload();
     }).on('contextmenu',function(){
     	var id=$(this).attr('id');
     	var named=eval(id).name;
     	$('div.helpContext').show().css({
     		top: event.clientY+'px',
     		left: event.clientX+'px'
     	}).children().children('this').html(function(){
     		return named;
     	}).parent('#whatAre').attr('href',function(){
     		return 'elements/tut/'+named+'.html';
     	}).next().attr('href',function(){
     		return '#cat='+id
     	}).click(function(){
     		location.reload();
     	}).next().click(function(){
     		window.open('elements/search.html?q='+id);
     	});
     	$('#blackWall').fadeIn().on('click',function(){
     		$('.helpContext').hide();
     		$(this).fadeOut();
     	});
     	return false;
     });
     var a=$('div.body').outerWidth();
     function tdsi(){
     	var b=a/19;
    	var x=b-4;
    	$('table.perTable td').css({
    	     width:x+'px',height:x+'px'
    	});
     }
     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

     }else {tdsi();}
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
                    }).on('mouseover',function() {
                    	var className=$(this).attr('class');
                         //Making the right side bar information
                         var e=eval($(this).attr('id'));
                         $('#elementName').html(e.name).parent().css({
													 background: eval(e.classification).color
												 });
                         $('#elementSymbol').html(e.symbol);
                         $('#elementId').html($(this).attr('id').slice(1));
                         //Indicate catagorize on hover on element cell in table
                         $('div.left catset a').removeClass();
                         var div=$('div.classes a.a').attr('id');
                         if (div==="metallicc") {
                              $('#'+e.classification).addClass('active');
                         }if (div==="valancyc") {
                              $('#vale'+e.valancy).addClass('active');
                         }if (div==="densityc") {
                         	$('#'+className).addClass('active');
                         }
                    }).on('click',function() {
                         //Make the element box window
                         var th=$(this).attr('id');
                         var e=eval(th);
                         var x=event.clientX;
                         var y=event.clientY;
                         if ($('box.box_'+th).length>=1) {
                              //Focus on element box on appending to body
                              $('box').css({zIndex:'155'});
                              $('box.box_'+th).css({zIndex:'156'});
                         }else {
                              if ($(document).outerWidth()>700) {
                                  //Append the box
                              $('body').append(function() {
                                return '<box class="box_'+th+'" style="top:'+y+'px;left:'+x+'px"><div class="box_header"><a href="javascript:void(0);" class="closeBox">&times;</a></div><div class="content"><span class="atomicNumberF">'+th.slice(1)+'</span><h10>'+e.symbol+'</h10><h1>'+e.name+'</h1><div class="boxClassification"><span class="ball" style="background:'+eval(e.classification).color+'"></span> '+eval(e.classification).name+'</div><div class="boxPhase"><div class="titleI">Phase</div><span class="ball" style="background:#ffffff;"></span> <phase>Gas</phase> <warnRoomTemp></warnRoomTemp><br><div class="tempChange"><div class="leftTemp"><i class="fa fa-chevron-left"></i></div><div class="tempBarOver"><input type="range" value="31" class="tempInputRange"></div><div class="rightTemp"><i class="fa fa-chevron-right"></i></div></div><div class="tempInput"><input value="31" type="number" class="tempInput"><select><option>C</option><option>K</option><option>F</option></select></div> </div><div class="colorElem"><div class="titleI">Color</div><span class="ball" style="background:'+e.color+';border-radius:3px;"><img src="images/colorless.jpg"></span> '+e.colorName+'</div><div class="Topi"><i class="fa fa-atom"></i> Overview</div><div class="titleIM">Latin name</div><div class="titleIMT">'+e.latin+'</div><div class="titleIM">English name</div><div class="titleIMT">'+e.name+'</div><div class="titleIM">Year discovered</div><div class="titleIMT">'+e.yearDis+'</div><div class="titleIM">Discovered by</div><div class="titleIMT">'+e.disBy+'</div><div class="titleIM">CAS number</div><div class="titleIMT">'+e.casNum+'</div><div class="epn"><table><td>Electrons<br><span class="Epn"><b>'+th.slice(1)+'</b></span></td><td>Protons<br><span class="ePn"><b>'+th.slice(1)+'</b></span></td><td>Neutrons<br><span class="epN"><b>'+e.neutrons+'</b></span></td></table></div><div class="titleIM">More info</div><div class="titleIMT"><a target="_blanck" href="elements/'+th+'/index.html">Holy Reference</a> &nbsp; <a href="">Wikipedia</a></div></div></box>'
                            });
                              }
                         }if ($('box').length===5) {
                              //If the boxes exeed the limit show warning
                              $('#blackWall').fadeIn();
                              $('body').append(function() {
                                   return '<div class="alert">Keeping the web page clean will improve your work</div>'
                              });
                              setTimeout(function() {
                                   $('#blackWall').fadeOut(500);
                                   $('div.alert').fadeOut(500);
                              },2500);
                              setTimeout(function() {
                                   $('div.alert').remove();
                              },3000);
                         }
                         setTimeout(function() {
                              //Make the box draggable
                              $('box').draggable({
                                   drag: function( event, ui ) {},
                                   cursor:'-webkit-grabbing'
                              }).on('mousedown',function() {
                                   //Focus on element box on click
                                   $('box').css({zIndex:'155'});
                                   $(this).css({zIndex:'156'});
                              });
                              //Close the box window
                       		  $('a.closeBox').click(function() {
                            	  $(this).parent().parent().remove();
                       		  });
                              //Copy context inside
                              $('button.copy').on('click',function() {
                                   $('button.disableCopy').html('Copy').removeClass().addClass('copy');
                                   copyStringToClipboard($(this).parent().parent().children('.infothing').text());
                                   $(this).html('Copied').removeClass().addClass('disableCopy');
                              });
                         },200);
                    }).on('contextmenu',function() {
                         //Contextmenu on element cell
                         var th=$(this).attr('id');
                         var e=eval(th);
                         var x=event.clientX;
                         var y=event.clientY;
                         $('div.contextmenu').show().css({
                              left:x+'px',
                              top:y+'px'
                         }).children('a').children('i').html(function() {
                              return e.symbol
                         });
                         $('#whiteWall').fadeIn();
                         $('#selectElement').attr('href',function() {
                              return '#element'+th
                         });
                         $('#selectElement').click(function() {
                              //location.reload();
                              alert('ji')
                         });
                         $('#openNewTab').click(function() {
                              $(this).parent().hide();
                              $('#whiteWall').fadeOut();
                         }).attr('href',function() {
                              return 'elements/'+th+'/index.html'
                         }).attr('target','_blanck');
                         $('#moreWiki').attr('href',function(){
                         	return 'https://en.wikipedia.org/wiki/'+e.name
                         });
                         return false;
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
                         else if (temp>e.liquidIn&&temp<e.gasIn) {$('#phaseClass').children('a').removeClass();$('#Liquid').addClass('active');}
                         else if (temp>=e.gasIn) {$('#phaseClass').children('a').removeClass();$('#Gas').addClass('active');}
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
               }).on('click',function() {
                    //Make the element box window
                    var th=$(this).attr('id');
                    var e=eval(th);
                    var x=event.clientX;
                    var y=event.clientY;
										//var contd=localStorage.contentT;
                    var contd='contentChem';
                    if (a>450) {
                    	if ($('box.box_'+th).length||$('box2.box_'+th).length) {
                         //Focus on element box on appending to body
                         $('box,box2').css({zIndex:'155'});
                         $('box.box_'+th).css({zIndex:'156'});
                         $('box2.box_'+th).css({zIndex:'156'});
                    }else {
                         if (contd==="contentInd") {
                              //Append the box
                              $('body').append(function() {//down
                                   return '<box class="box_'+th+'" style="top:'+y+'px;left:'+x+'px"><div class="box_header"><span><small>'+th.slice(1)+'</small> '+e.name+'</span><a href="javascript:void(0);" class="closeBox">&times;</a></div><div class="content"><span class="atomicNumberF">'+th.slice(1)+'</span><h10>'+e.symbol+'</h10><h1>'+e.name+'</h1><div class="boxClassification"><span class="ball" style="background:'+eval(e.classification).color+'"></span> '+eval(e.classification).name+'</div><div class="boxPhase"><div class="titleI">Phase</div><span class="ball" id="pg'+th+'"></span> <phase id="p'+th+'"></phase> <warnRoomTemp></warnRoomTemp><br> </div><div class="Topi">Applications</div><div class="titleIM">Natural</div><div class="titleIMT">'+eval('wh'+th).where+'</div><div class="titleIM">Man-made</div><div class="titleIMT">'+eval('wh'+th).manmade+' </div><div class="epn"><table><td>Electrons<br><span class="Epn"><b>'+th.slice(1)+'</b></span></td><td>Protons<br><span class="ePn"><b>'+th.slice(1)+'</b></span></td><td>Neutrons<br><span class="epN"><b>'+e.neutrons+'</b></span></td></table></div><br><div class="Topi"><i class="fa fa-puzzle-piece"></i> Industrial</div><div class="titleIM">Resources</div><div class="titleIMT">'+eval('wh'+th).places+'</div><div class="titleIMT"><a href="" title="Youtube video to show you how to make '+e.name+'"><i style="color:#aa4515;font-size:30px;" class="fab fa-youtube"></i> How to make '+e.name+'</a><a href="" title="Google maps to show you where to find '+e.name+'"><i style="color:#aa9925;font-size:30px;" class="fa fa-map"></i> Where to find '+e.name+'</a></div><div class="titleIM">More info</div><div class="titleIMT"><a href="">Wikipedia</a></div></div></box>'
                              });
                         }if (contd==="contentChem") {
                              //Append the box
                              $('body').append(function() {//down
                                   return '<box2 class="box_'+th+'" style="top:'+y+'px;left:'+x+'px" tabindex="0"><div class="box_header"><span><small>'+th.slice(1)+'</small> '+e.name+'</span><a href="javascript:void(0);" class="closeBox">&times;</a></div><div class="content"><span class="atomicNumberF">'+th.slice(1)+'</span><h10>'+e.symbol+'</h10><h1>'+e.name+'</h1><div class="titleIMT" style="background:'+eval(e.classification).color+';color:black;"><center>'+eval(e.classification).name+'</center></div><div class="Topi"><i class="fa fa-atom"></i> General properties</div><div class="titleIM">Appearance</div><div class="titleIMT">'+e.colorName+' <button class="c">Copy</button> </div><div class="Topi">Basic information</div><div class="titleIM">Atomic weight</div><div class="titleIMT">'+e.relativeAtomicMass+' <button class="c">Copy</button> </div><div class="titleIM">Density</div><div class="titleIMT">'+e.density+' g/cm<sup style="vertical-align:top;font-size:12px;">3</sup>  <button class="c">Copy</button></div><div class="titleIM">Melting point</div><div class="titleIMT">'+e.liquidIn+' K <button class="c">Copy</button></div><div class="titleIM">Boiling point</div><div class="titleIMT">'+e.gasIn+' K <button class="c">Copy</button></div><div class="titleIM">CAS number</div><div class="titleIMT">'+e.casNum+' <button class="c">Copy</button></div><div class="titleIM">Discovered by</div><div class="titleIMT">'+e.disBy+' <button class="c">Copy</button></div><div class="titleIM">Discovered year</div><div class="titleIMT">'+e.yearDis+' <button class="c">Copy</button></div><div class="titleIM">Electron shell</div><div class="titleIMT">'+e.electronShell+' <button class="c">Copy</button></div><div class="titleIM">Electronegativity</div><div class="titleIMT">'+e.electronegativity+' <button class="c">Copy</button></div><div class="epn"><table><td>Electrons<br><span class="Epn"><b>'+th.slice(1)+'</b></span></td><td>Protons<br><span class="ePn"><b>'+th.slice(1)+'</b></span></td><td>Neutrons<br><span class="epN"><b>'+e.neutrons+'</b></span></td></table></div><br><div class="titleIM">More info</div><div class="titleIMT"><a href="https://en.wikipedia.org/wiki/'+e.name+'" target="_blanck">Wikipedia</a></div></div></box2>'
                              });
                         }
                    }if ($('box,box2').length===5) {
                         //If the boxes exeed the limit show warning
                         $('#blackWall').fadeIn();
                         $('body').append(function() {
                              return '<div class="alert">Keeping the web page clean will improve your work</div>'
                         });
                         setTimeout(function() {
                              $('#blackWall').fadeOut(500);
                              $('div.alert').fadeOut(500);
                         },2500);
                         setTimeout(function() {
                              $('div.alert').remove();
                         },3000);
                    }
                    }
                    /*if (a<450) {
                    	$('body div.mobile').html(function(){
                    		return '<button class="closeMob">&times;</button><h1>'+e.name+'</h1><t>Symbol</t><f>'+e.symbol+'</f><t>Atomic number</t><f>'+th.slice(1)+'</f><t>Name</t><f>'+e.name+'</f><t>Category</t><f>'+eval(e.classification).name+'</f><t>Phase</t><f>'+e.phase+'</f><t>Discovered by</t><f>'+e.disBy+'</f><t>Year discovered</t><f>'+e.yearDis+'</f><t>Cas number</t><f>'+e.casNum+'</f><t>Electron shell</t><f>'+e.electronShell+'</f><t>Atomic weight</t><f>'+e.relativeAtomicMass+'</f><t>Density</t><f>'+e.density+'</f><t>Melting point</t><f>'+e.liquidIn+'</f><t>Boiling point</t><f>'+e.gasIn+'</f><t>Valence</t><f>'+e.valancy+'</f>'
                    	}).fadeIn();
                    	$('#whiteWall').fadeIn();
                    }*/
                    setTimeout(function() {
                         //Make the box draggable
                         $('box,box2').draggable({
                              drag: function( event, ui ) {},
                              cursor:'-webkit-grabbing'
                         }).on('mousedown',function() {
                              //Focus on element box on click
                              $('box,box2').css({zIndex:'155'});
                              $(this).css({zIndex:'156'});
                         });
                         //Close the box window
                         $('box div.menu').children('button.close').on('click',function() {
                              $(this).parent().parent().remove();
                         });
                         $('a.closeBox').click(function() {
                              $(this).parent().parent().remove();
                         });
                         $('.tempInputRange').on('change input',function() {
                              var e=eval('e'+$(this).parent().parent().parent().parent().children('.atomicNumberF').html());
                              var v=$(this).val();
                              var chil=$(this).parent().parent().parent().children('.tempInput');
                              chil.children('input').val(v*70);
                              var thy=$(this).parent().parent().parent();
                              thy.children('warnroomtemp').remove();
                              var c=Number(v*70);
                              if (c>=Number(e.gasIn)) {
                                  thy.children('phase').html('Gas');
                                  thy.children('span.ball').css({
                                      background: '#aaddff'
                                  });
                              }
                              else if (c>Number(e.liquidIn)&&c<Number(e.gasIn)) {
                                thy.children('phase').html('Liquid');
                                thy.children('span.ball').css({
                                    background: '#5555ff'
                                });
                              }
                              if (c<=Number(e.solidIn)) {
                                thy.children('phase').html('Solid');
                                thy.children('span.ball').css({
                                    background: '#252525'
                                });
                              }
                              $('div.classes a').removeClass();
                              $('div.classes #phasec').addClass('a');
                         });
                         $('.tempInputRange').val(function() {
                              return Number($(this).parent().parent().parent().children('.tempInput').val())/6000*100
                         })
                         $('.tempInput').on('keyup',function(){
                            var e=eval('e'+$(this).parent().parent().parent().children('.atomicNumberF').html());
                            var v=$(this).val();
                            var thy=$(this).parent().parent();
                            thy.children('warnroomtemp').remove();
                            var c=Number(v);
                            if (c>Number(e.gasIn)) {
                                thy.children('phase').html('Gas');
                                thy.children('span.ball').css({
                                    background: '#aaddff'
                                });
                            }
                            if (c<Number(e.liquidIn)) {
                              thy.children('phase').html('Liquid');
                              thy.children('span.ball').css({
                                  background: '#5555ff'
                              });
                            }
                            if (c<Number(e.solidIn)) {
                              thy.children('phase').html('Solid');
                              thy.children('span.ball').css({
                                  background: '#252525'
                              });
                            }
                         });
                         function clickPrev(){
                         	$('div.titleIMT button').on('click',function() {
                              $(this).html('')
                              var str=$(this).parent().text();
                              if (str===' ') {
                                   alertm('Sorry, no content found')
                              }else {
                                   copyStringToClipboard(str);
                                   alertm('Copied <span style="color:#0033ac;">'+str+'</span>');
                                   $('#black').fadeIn();
                              }
                              $(this).html('Copy');
                              setTimeout(function() {
                                   $('div.alertt button').click();
                              },1000);
                         });
                         }
                         clickPrev();
                         $('noone').html('------');
                         $('.closeMob').click(function() {
                              $(this).parent().hide();
                              $('#whiteWall').hide();
                         });
                         var temp=$('.temp').val();
                         $('phase').html(function() {
                              var id=$(this).attr('id').slice(1);
                              var e=eval(id);
                              if (temp<=e.liquidIn&&temp<e.gasIn){return 'Solid';}
                              if (temp>e.liquidIn&&temp<e.gasIn){return 'Liquid';}
                              if (temp>=e.gasIn){return 'Gas';}
                         }).prev().attr('style',function() {
                              var id=$(this).attr('id').slice(2);
                              var e=eval(id);
                              if (temp<=e.liquidIn&&temp<e.gasIn){return 'background:#988845;';}
                              if (temp>e.liquidIn&&temp<e.gasIn){return 'background:#1155dd;';}
                              if (temp>=e.gasIn){return 'background:#ddddff;';}
                         }).next().next().html(function() {
                              return '(in '+temp.toFixed(2)+' K)';
                         })
                    },200);
               }).on('contextmenu',function() {
                    //Contextmenu on element cell
                    var th=$(this).attr('id');
                    var e=eval(th);
                    var x=event.clientX;
                    var y=event.clientY;
                    $('div.contextmenu').show().css({
                         left:x+'px',
                         top:y+'px'
                    }).children('a').children('i').html(function() {
                         return e.symbol
                    });
                    $('#whiteWall').fadeIn();
                    $('#selectElement').attr('href',function() {
                         return '#element'+th
                    });
                    $('#selectElement').click(function(){
                    	location.reload();
                    });
                    $('#metallicClass').click(function() {
                         if (true) {
                            location.reload();
                         }
                    });
                    $('#moreWiki').attr('href',function(){
                       	return 'https://en.wikipedia.org/wiki/'+e.name
                    }).click(function(){
                    	$('div.contextmenu').hide();
                    	$('#whiteWall').fadeOut();
                    });

                    /*$('#openNewTab').click(function() {
                         $(this).parent().hide();
                         $('#whiteWall').fadeOut();
                    }).attr('href',function() {
                         return 'elements/'+th+'/index.html'
                    }).attr('target','_blanck');*/
                    return false;
               });
               $('#whiteWall').on('click',function () {
                   $(this).hide();
                   $('div.contextmenu').hide()
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
     $('a.closeHeader').click(function() {
          $(this).parent().parent().slideUp();
          $('a.showHeader').slideDown();
     });
     $('a.showHeader').click(function() {
          $('header').slideDown();
          $(this).slideUp();
     }).hide();
     $('button.moreSites').click(function() {
          var c=$('div.moreSites').css('display');
          if (c==="none") {
               $('div.moreSites').fadeIn(0);
               $(this).children('i').attr('class','fa fa-caret-up');
          }if (c==="block") {
               $('div.moreSites').fadeOut(1);
               $(this).children('i').attr('class','fa fa-caret-down');

          }
     });
     $('button.moreSites').click(function() {
          $('div.moreSites').show();
     });
     $('div.right div.optionRight a').append(function() {
          return '<a href="javascript:void(0);"><i class="far fa-square"></i></a>'
     });
     $('div.right .a i').attr('class',function() {
          return 'far fa-check-square'
     });
     $('input[type=range].temp').on('change input',function(){
     	var n=$(this).val();
     	$('input.temp2').val(n);
     	$('table.perTable td').not('td.d,td.dnum').removeClass().addClass(function(){
               var id=$(this).attr('id');
               var e=eval(id);
               var liq=Number(e.liquidIn);
               var gas=Number(e.gasIn);
               n=Number(n);
               $('.temp2').val(n)
               if (n<=liq) {return 'Solid';}
               if (n>liq&&n<gas) {return 'Liquid';}
               if (n>=gas) {return 'Gas';}
          });}).on('mousedown',function(){
     	$('catset').hide();
     	$('#phaseClass').show();
		$('div.classes a').removeClass();
		$('div.classes #phasec').addClass('a');
     }).on('mouseup',function(){
     	/*$('#phaseClass').hide();
     	$('#metallicClass').show();*/
     });
     $('#numTemp').on('keyup',function(e){
     	if (e.which===13) {
     		$('input.temp').val($(this).val());
     		$('input[type=range].temp').change();
     		$('catset').hide();
    	 	$('#phaseClass').show();
			$('div.classes a').removeClass();
			$('div.classes #phasec').addClass('a');
     	}
     });
     $('#classiBtn').click(function(){
     	var s=$(this).html().indexOf('down');
     	if (s>=1) {
     		$('.classes').slideDown(100);
     		$(this).children('i').attr('class','fa fa-chevron-up');
     	}else {
     		$('.classes').slideUp(100);
     		$(this).children('i').attr('class','fa fa-chevron-down');
     	}
     });
     $('div.classes a').on('click',function(){
     	$('div.classes a').removeClass();
     	$(this).addClass('a');
     	$('catset').slideUp();
     	$('#'+$(this).attr('id').slice(0,-1)+'Class').slideDown();
     	colorElemets();
     	$('#classCat').html(eval($(this).attr('id')).name);
     });
     checkUrl();
     $('#combiner').draggable();
     $('#openComb').click(function() {
          $('table.perTable td').not('td.d,td.dnum').attr('draggable','true').attr('ondragstart','drag(event)');
          $('#combiner').show();
     });
     $('#closeMenuComb').click(function() {
          $('#combiner').hide();
          $('div.drop').html('');
          $('table.perTable td').not('td.d,td.dnum').attr('draggable','false').attr('ondragstart','');
          clearData();
     });
    $('div.det').css({
    	height:$('.perTable td').outerHeight()*2+'px',
    	width:$('.perTable td').outerWidth()*3+'px'
    });
    $('#showActivitySeries').click(function(){
    	var x=event.clientX-$(this).outerWidth();
    	var y=event.clientY-$(this).outerHeight();
    	$('#activitySeries').show(500).draggable().css({
    		top: y+'px',left:x+'px'
    	});
    });
    $('#activitySeries button').click(function(){
    		$('#activitySeries').hide();
    	});
    $('.contentOp').click(function(){
    	var el=$('.slideDownops');
    	if (el.css('display')==="none") {
    		el.slideDown();
    		$(this).children('i').attr('class','fa fa-chevron-up');
    	}else {
    		el.slideUp();
    		$(this).children('i').attr('class','fa fa-chevron-down');
    	}
    });
    if (localStorage.contentT!="undefined") {
    	$('.slideDownops button').removeClass();
    	$('#'+localStorage.contentT).attr('class','a');
    }else {
      $('#contentInd').attr('class','a');
    }
    $('.slideDownops button').click(function(){
			$('.slideDownops button').removeClass();
    	$('.slideDownops').slideUp();
    	$(this).attr('class','a');
    	localStorage.setItem('contentT',$(this).attr('id'));
    });
    $('header input').on('keyup keydown',function(){
        var filter=$('header form input').val().toUpperCase();
				for (i = 1; i < 127; i++) {
		    var id='e'+i;
    		if ($('#'+id).length>=0) {
      		txtValue = eval(id).name+ eval(id).symbol+i.toString();
      		if (txtValue.toUpperCase().indexOf(filter) > -1) {
        		$('.perTable #'+id).css({opacity:'1'});
      		} else {
        		$('.perTable #'+id).css({opacity:'.2'});
      		}
    		}
  		}
    });
    $('#optionsLefted').click(function(){
			$('div.optionsLeftedList').show();
			$('.body,.right,.left,header>a').not('#optionsLefted,div.optionsLeftedList').click(function() {
				$('div.optionsLeftedList').hide();
			});
			$(document).scroll(function() {
				$('div.optionsLeftedList').hide();
			});
			$(document).on('keyup',function(e) {
				if (e.which===27) {
					$('div.optionsLeftedList').hide();
				}
			});
    });
		$('#printTable').click(function() {
			printElem('perTable');
		});
		localStorage.setItem('adv','');
		$('#advancedSearch').click(function() {
			$('#advancedSearchBox').fadeIn(500).focus();
			$('#blackWall').fadeIn();
			$('#advancedSearchBox table').append(function() {
				for (var i = 1; i < 127; i++) {
					var id="e"+i;
					var e=eval(id);
					var j= '<tr id="tr'+i+'"><td>'+i+'</td><td class="ifo_name">'+e.name+'</td><td class="ifo_symbol">'+e.symbol+'</td><td class="ifo_classification">'+e.classification+'</td><td class="ifo_relativeAtomicMass">'+e.relativeAtomicMass+'</td><td class="ifo_disBy">'+e.disBy+'</td><td class="ifo_liquidIn">'+e.liquidIn+'</td><td class="ifo_gasIn">'+e.gasIn+'</td><td class="ifo_yearDis">'+e.yearDis+'</td><td class="ifo_casNum">'+e.casNum+'</td><td class="ifo_i">'+i+'</td><td class="ifo_i">'+i+'</td><td class="ifo_neutrons">'+e.neutrons+'</td><td class="ifo_valancy">'+e.valancy+'</td><td class="ifo_electronegativity">'+e.electronegativity+'</td><td class="ifo_name">'+e.liquidIn+'</td></tr>';
					localStorage.setItem('adv',localStorage.adv+j);
				}
				return localStorage.adv;
			});
		});
		setTimeout(function() {
			$('#advancedSearchBox input').attr('spellcheck','false')
			$('#advancedSearchBox table tr td').not('#advancedSearchBox table tr.firsta td,#advancedSearchBox table tr.seconda td').on('click',function() {
				$('#advancedSearchBox td').attr('contenteditable','false');
				$(this).attr('contenteditable',function() {
					return 'true';
				});
				$(this).focus();
			}).attr('spellcheck','false');
	    $('#advancedSearchBox input').on('keyup keydown',function(){
					$(this).parent().attr('class','a');
					var lng=$('#advancedSearchBoxbox td.a').length;
	        var filter=$(this).val().toUpperCase();
					for (i = 1; i < 127; i++) {
	    		if (true) {
	      		txtValue = eval('e'+i)[$('#advancedSearchBoxbox td.a').attr('name').slice(4)];
						var lng=0;
						do {
							lng=lng+1;
							txtValue=txtValue*lng;
						} while (j===lng);
	      		if (txtValue.toUpperCase().indexOf(filter) > -1) {
	        		//$('#tr'+i).show()
	      		} else {
	        		$('#tr'+i).hide();
	      		}
	    		}
	  		}
	    });
		},1500);
		$('#closeASB').click(function() {
			$('#advancedSearchBox').fadeOut();
			$('#blackWall').fadeOut();
		});
	$('#aboutSite').click(function(){
		$('div.aboutSite').fadeIn();
		$('#blackWall').fadeIn();
	});
	$('.aboutSite .exim>button').click(function(){
		$('div.aboutSite').fadeOut();
		$('#blackWall').fadeOut();
	});
	$('#unitConverterBox').draggable({
			 drag: function( event, ui ) {},
			 cursor:'-webkit-grabbing'
	});
	$('#unitConverter').click(function() {
		$('#unitConverterBox').show();
	});
	$('#convertedUnits').html(function() {
		return $('div.units').html()
	}).attr('class','units');
	$('.unitTypes button').click(function() {
		$('.unitTypes button').removeClass();
		$(this).addClass('a');
		$('div.units>div').removeClass();
		$('div.units #unitJ'+$(this).text()).addClass('a');
	});
	$('.units>div>button').click(function() {
		$(this).parent().children('button').removeClass();
		$(this).addClass('a');
	});
	$('#clearInput').click(function() {
		$('#inputText').val('');
	});
	$('#inputText,.units button,#clearInput').on('keyup keydown click',function() {
		var val=$('#inputText').val();
		var firstSelector=$('#inputUnits>.a').attr('id');
		var inputUnit=$('#inputUnits>.a>.a').attr('name').slice(5);
		var formularPartOne=eval(firstSelector)[inputUnit];
		var outputUnit=$('#convertedUnits>.a>.a').attr('name').slice(5);
		var formularPartTwo=eval(firstSelector)[outputUnit];
		var nval=Number(formularPartTwo/formularPartOne);
		var valueOut=nval*val;
		var len=valueOut.length;
		$('#outputText').val(valueOut);
	});
	$('#numTemp').contextmenu(function() {
		var x=event.clientX;
		var y=event.clientY;
		var val=Number($(this).val());
		$('#tempConvetContextmenu').show().css({
			top: y+'px',
			left: x+'px'
		}).children('button').html(function() {
			if ($(this).attr('id')==='cnvrtToC') {
				return '= '+ (val-273.15).toFixed(2)+" 'C"
			}if ($(this).attr('id')==='cnvrtToK') {
				return '= '+ val+" K"
			}if ($(this).attr('id')==='cnvrtToF') {
				return '= '+ ((val- 273.15) * 9/5 + 32).toFixed(2)+" 'F"
			}
		}).click(function() {
			copyStringToClipboard($(this).text().slice(1));
		});
		$('body *').not('#tempConvetContextmenu').on('click',function() {
			$('#tempConvetContextmenu').hide();
		});
		return false;
	});
	if(window.self == window.top) {
            document.documentElement.style.display = 'block'; }
        else {
       window.top.location = window.self.location; }
});
/*'<box class="box_'+th+'" style="top:'+y+'px;left:'+x+'px;" tabindex="0"><div class="menu"><button class="close"><i class="far fa-window-close"></i></button></div><div class="scroll"><h1>'+e.symbol+'</h1><p><span style="background:'+$('#'+e.classification).children('span').css('background')+'"></span> &nbsp; '+e.name+'</p><div class="linkes"><a target="_blanck" href="elements/'+th+'/index.html" title="Open this elements info in new tab"><i class="fa fa-angle-double-right"></i></a><a href="javascript:void(0);" class="atomicInformation" title="View atomic information"><i class="fa fa-atom"></i></a><a href="" title="Images"><i class="fa fa-images"></i></a><a href="" title="Share"><i class="fa fa-share-alt"></i></a></div><div class="boxInfo"><div class="overTitle">Basic</div><trr><div class="title">Name<button class="copy">Copy</button></div><div class="infothing">'+e.name+'</div></trr><trr><div class="title">Atomic number<button class="copy">Copy</button></div><div class="infothing">'+e.atomicNumber+'</div></trr><trr><div class="title">Valancy<button class="copy">Copy</button></div><div class="infothing">'+e.valancy+'</div></trr><trr><div class="title">Relative atomic mass <button class="copy">Copy</button></div><div class="infothing">'+e.relativeAtomicMass+' (g/mol)</div></trr></div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></box>'

/**
$('body').append(function() {//down2
     return '<box class="box_'+th+'" style="top:'+y+'px;left:'+x+'px"><div class="box_header"><span><small>'+th.slice(1)+'</small> '+e.name+'</span><a href="javascript:void(0);" class="closeBox">&times;</a></div><div class="content"><span class="atomicNumberF">'+th.slice(1)+'</span><h10>'+e.symbol+'</h10><h1>'+e.name+'</h1><div class="boxClassification"><span class="ball" style="background:'+eval(e.classification).color+'"></span> '+eval(e.classification).name+'</div><div class="boxPhase"><div class="titleI">Phase</div><span class="ball" style="background:#ffffff;"></span> <phase>Gas</phase> <warnRoomTemp>(in room temp.)</warnRoomTemp><br><div class="tempChange"><div class="leftTemp"><i class="fa fa-chevron-left"></i></div><div class="tempBarOver"><input type="range" value="31" class="tempInputRange"></div><div class="rightTemp"><i class="fa fa-chevron-right"></i></div></div><div class="tempInput"><input value="31" type="number" class="tempInput"></div> </div><div class="colorElem"><div class="titleI">Color</div><span class="ball" style="background:'+e.color+';border-radius:3px;"><img src="images/colorless.jpg"></span> '+e.colorName+'</div><div class="Topi"><i class="fa fa-atom"></i> Overview</div><div class="titleIM">Latin name</div><div class="titleIMT">'+e.latin+' <button class="c">Copy</button> </div><div class="titleIM">English name</div><div class="titleIMT">'+e.name+' <button class="c">Copy</button></div><div class="titleIM">Year discovered</div><div class="titleIMT">'+e.yearDis+' <button class="c">Copy</button></div><div class="titleIM">Discovered by</div><div class="titleIMT">'+e.disBy+' <button class="c">Copy</button></div><div class="titleIM">CAS number</div><div class="titleIMT">'+e.casNum+' <button class="c">Copy</button></div><div class="epn"><table><td>Electrons<br><span class="Epn"><b>'+th.slice(1)+'</b></span></td><td>Protons<br><span class="ePn"><b>'+th.slice(1)+'</b></span></td><td>Neutrons<br><span class="epN"><b>'+e.neutrons+'</b></span></td></table></div><div class="advancedInfo"></div><button class="viewMoreInfo">Advanced details <i class="fa fa-chevron-down"></i></button><div class="titleIM">Industrial</div><div class="titleIMT"><a href="" title="Youtube video to show you how to make '+e.name+'"><i style="color:#aa4515;font-size:30px;" class="fab fa-youtube"></i> How to make '+e.name+'</a><a href="" title="Google maps to show you where to find '+e.name+'"><i style="color:#aa9925;font-size:30px;" class="fa fa-map"></i> Where to find '+e.name+'</a></div><div class="titleIM">More info</div><div class="titleIMT"><a target="_blanck" href="elements/'+th+'/index.html">Holy Reference</a> &nbsp; <a href="">Wikipedia</a></div></div></box>'
});
 */
