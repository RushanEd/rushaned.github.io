$(document).ready(function() {
     $('rad').attr('class',function() {
          var v=$(this).parent().parent().attr('id');
          if (localStorage[v]!='undefined'||localStorage[v]!="") {
               if (localStorage[v]===$(this).attr('id')) {
                    return 'a';
               }
          }
     });
     $('.term rad').click(function() {
          $(this).parent().parent().children('span').children('rad').removeClass();
          $(this).addClass('a');
          localStorage.setItem($(this).parent().parent().attr('id'),$(this).attr('id'));
     });
     $('.menu button').click(function() {
          $(this).parent().children('button').removeClass();
          $(this).addClass('a');
          $('div.cont').hide();
          $('#cont'+$(this).attr('id')).show();
     });
});
