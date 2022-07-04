$(document).ready(function() {
  var w = $(document).outerWidth();
  $('.body').css({
    width: w-$('.left').outerWidth()+'px'
  });
  $('.drop_menu .drop').click(function() {
    var t = $(this).next().css("display");
    if (t==="none") {
      $(this).next().show();
    } else {
      $(this).next().hide();
    }
  });
  $('.drop_menu .drop_down a.a').parent().show();
  $('.body').focus();
  if (w<=768) {
    $('.left').css({display:'none',position:'fixed',top:"0",left:'0',height:'100vh'});
    $('.body').css({width:"100%"});
    $('.body_dyn').css({width:"1000px",height:"100vh"});
    $('.mobile_options,#leftCloseBtn').show();
  }
  $('.mobile_options button').click(function() {
    $('.left').show();
  });
  $('#leftCloseBtn').click(function() {
    $('.left').hide();
  })
});
