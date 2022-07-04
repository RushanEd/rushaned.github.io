$(document).ready(function() {
  // Reponsive
  function responsive() {
    var w = $(window).outerWidth();
    var h = $(document).outerHeight();
    if (w<800) {
      $('.mobile_menu,.mobile_links_chance').show();
      $('.right,.left,#get_elemes_data').hide();
      $('.mid').css({width:'750px'});
      $('.temperature_div').hide();
      $.post("panes/mobile_options.php",function(data,status) {
        if (status==="success") {
          $('.mobile_options').html(data);
        }
      });
    } else if (w>800) {
      $('.right,.left').css({opacity:'1',display:'inline-block'});
      $('.mobile_options,.mobile_menu').remove();
    } if (w<426) {
      $('footer').hide();
      $('#mobFooter').show();
      $('#infoTdEleBox').hide()
    }
    $('.table_div_hey_big').css({
      height: h-$('footer').outerHeight()+'px'
    });
  }
  responsive();
});
