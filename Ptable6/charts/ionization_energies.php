<canvas id="myChart" width="700" height="700"></canvas>
<script>
function getData(ionWhich=1,numElems) {
  $.post("assets/data/mix-elements.json",function(data,status) {
    if (status==="success") {
      const ELEMENTS = JSON.parse(JSON.stringify(data));
      var elem_data_send = [];
      var elem_labels_send = [];
      dataset1 = [];
      dataset2 = [];
      dataset3 = [];
      dataset4 = [];
      if (ionWhich==="all") {
        startingPoint = 1;
      } else {
        startingPoint = ionWhich;
      }
      const DATARESP = ["name","appearance","relativeAtomicMass","boil","category2","color","density","discovered_by","melt","molar_heat","named_by","number","period","phase","source","spectral_img","summary","symbol","xpos","ypos","shells","electron_configuration","electron_affinity","electronegativity_pauling","ionization_energies","neutrons","category"];
      for (var i = startingPoint; i < numElems; i++) {
        ionization_energies_th = ELEMENTS["e"+i][DATARESP.indexOf("ionization_energies")];
        var name_th = i+"- "+ELEMENTS["e"+i][DATARESP.indexOf("name")];
        if (ionWhich==="all") {
          dataset1_item = JSON.parse(JSON.stringify(ionization_energies_th))[(0)];
          dataset2_item = JSON.parse(JSON.stringify(ionization_energies_th))[(1)];
          dataset3_item = JSON.parse(JSON.stringify(ionization_energies_th))[(2)];
          dataset4_item = JSON.parse(JSON.stringify(ionization_energies_th))[(3)];
          dataset1.push(dataset1_item);
          dataset2.push(dataset2_item);
          dataset3.push(dataset3_item);
          dataset4.push(dataset4_item);
        } else {
          ionization_energies_th = JSON.parse(JSON.stringify(ionization_energies_th))[(ionWhich-1)];
          elem_data_send.push(ionization_energies_th);
        }
        elem_labels_send.push(name_th);
      }
      create_chart(elem_labels_send,elem_data_send,dataset1,dataset2,dataset3,dataset4);
    }
  });
}
$(document).ready(function() {
  // var numElems  = $('.set input.numElems').val();
  // $('input.numElems').on('input change',function() {
  //   var numElems  = $('.set input.numElems').val();
  //   getData("<?php echo $_GET["which"]; ?>",numElems);
  //   chart.update();
  // });
  getData("<?php echo $_GET["which"]; ?>",25);
});
function create_chart(elem_labels_send,elem_data_send,dataset1=null,dataset2=null,dataset3=null,dataset4=null) {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          // labels: ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon'],
          labels: elem_labels_send,
          datasets: [<?php
            if ($_GET["which"]!=="all") {
              $wh = $_GET["which"];
              if ($wh==1) {
                $label_datta = "First ionization energies";
                $color_datta = "0ff";
                $background_datta = "a0f1";
              }if ($wh==2) {
                $label_datta = "Second ionization energies";
                $background_datta = "f311";
                $color_datta = "ff0";
              }if ($wh==3) {
                $label_datta = "Third ionization energies";
                $background_datta = "0f41";
                $color_datta = "0f0";
              }if ($wh==4) {
                $label_datta = "Forth ionization energies";
                $background_datta = "a0f1";
                $color_datta = "f0f";
              }
              echo "{
                  label: '$label_datta',
                  data: elem_data_send,
                  backgroundColor: [
                      '#0000',
                  ],
                  borderColor: [
                      '#$color_datta'
                  ],
                  borderWidth: 1
              }";
            }
           if ($_GET["which"]=="all") {
            echo "{
                label: 'First ionization energies',
                data: dataset1,
                backgroundColor: [
                    '#0000',
                ],
                borderColor: [
                    '#0ff'
                ],
                borderWidth: 1
            },{
                label: 'Second ionization energies',
                data: dataset2,
                backgroundColor: [
                    '#0000',
                ],
                borderColor: [
                    '#ff0'
                ],
                borderWidth: 1
            },{
                label: 'Third ionization energies',
                data: dataset3,
                backgroundColor: [
                    '#0000',
                ],
                borderColor: [
                    '#0f0'
                ],
                borderWidth: 1
            },{
                label: 'Forth ionization energies',
                data: dataset4,
                backgroundColor: [
                    '#0000',
                ],
                borderColor: [
                    '#f0f'
                ],
                borderWidth: 1
            }";
          } ?>]
      },
      //chart.options.elements.line.tension = value ? 0.4 : 0.000001;
      options: {
        maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      maxRotation: 0
                  }
              }]
          },
          plugins: {
              filler: {
                  propagate: true
              }
          },
          elements: {
            line: {
              tension: 0
            }
          }
      }
  });
}
</script>
