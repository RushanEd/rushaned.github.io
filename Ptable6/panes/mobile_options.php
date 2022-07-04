<div class="mobile_options_first_btn">
  <span class="otherElemeneries" data-spec="name"></span><i class="fa fa-chevron-up"></i>
</div>
<div class="mobile_options_dets_cont_dyn">
  <div class="elem_right_set_det_mob">
    <div class="mobile_options_det_type_tit">
      General Properties
    </div>
    <div class="x44">Name</div><div class="xn6" data-spec="name"></div>
    <div class="x44">Symbol</div><div class="xn6" data-spec="symbol"></div>
    <div class="x44">Atomic Number</div><div class="xn6" data-spec="number"></div>
    <div class="x44">Appearance</div><div class="xn6" data-spec="appearance"></div>
    <div class="x44">Category</div><div class="xn6" data-spec="category"></div>
  </div>
  <div class="elem_right_set_det_mob">
    <div class="mobile_options_det_type_tit">
      Physical Properties
    </div>
    <div class="x44">Atomic Mass</div><div class="xn6" data-spec="relativeAtomicMass"></div>
    <div class="x44">Phase</div><div class="xn6" data-spec="phase"></div>
    <div class="x44">Melting Point</div><div class="xn6 meltingPointTd" data-spec="melt">2</div>
    <div class="x44">Boiling Point</div><div class="xn6 boilingPointTd" data-spec="boil"></div>
    <div class="x44">Density</div><div class="xn6 densityTd" data-spec="density"></div>
    <div class="x44">Molar Heat</div><div class="xn6 molarHeatTD" data-spec="molar_heat"></div>
  </div>
  <div class="elem_right_set_det_mob">
    <div class="mobile_options_det_type_tit">
      Periodic Table
    </div>
    <div class="x44">Period</div><div class="xn6" data-spec="period"></div>
    <div class="x44">Group</div><div class="xn6" data-spec="xpos"></div>
  </div>
  <div class="elem_right_set_det_mob">
    <div class="mobile_options_det_type_tit">
      Structure
    </div>
    <div class="x44">Electron Shells</div><div class="xn6" data-spec="shells"></div>
    <div class="x44">Electron Configuration</div><div class="xn6" data-spec="electron_configuration"></div>
    <div class="x44">Electron Affinity</div><div class="xn6" data-spec="electron_affinity"></div>
    <div class="x44">Ionization Energies</div><div class="xn6" data-spec="ionization_energies"></div>
    <div class="x44">Electronegativity</div><div class="xn6" data-spec="electronegativity_pauling"></div>
  </div>
  <div class="elem_right_external">
    <a href="" data-spec="source" target="_blank"><i class="fab fa-wikipedia-w"></i> </a>
  </div>
</div>
<script type="text/javascript">
$(document).ready(function() {
  $('.mobile_options_first_btn').click(function() {
    var mobile_options_dets_cont_dyn = $('.mobile_options_dets_cont_dyn').css('display');
    if (mobile_options_dets_cont_dyn==="none") {
      $('.mobile_options').css({
        top: '0',
        borderRadius:'0'
      });
      $('.mobile_options_dets_cont_dyn').slideDown();
      $('.mobile_options_first_btn i').attr('class','fa fa-chevron-down');
    } else {
      $('.mobile_options_dets_cont_dyn').slideUp();
      $('.mobile_options').css({
        top: '100vh'
      });
      $('.mobile_options_first_btn i').attr('class','fa fa-chevron-up');
    }
  });
});

</script>
