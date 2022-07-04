<canvas id="myChart" width="700" height="700"></canvas>
<script>
function getData(ionWhich=1,numElems) {
  $.post("assets/data/mix-elements.json",function(data,status) {
    if (status==="success") {
      const ELEMENTS = JSON.parse(JSON.stringify(data));
      var elem_data_send = [];
      var elem_labels_send = [];
      const DATARESP = ["name","appearance","relativeAtomicMass","boil","category2","color","density","discovered_by","melt","molar_heat","named_by","number","period","phase","source","spectral_img","summary","symbol","xpos","ypos","shells","electron_configuration","electron_affinity","electronegativity_pauling","ionization_energies","neutrons","category"];
      for (var i = 1; i < numElems; i++) {
        ionization_energies_th = ELEMENTS["e"+i][DATARESP.indexOf("electronegativity_pauling")];
        var name_th = ELEMENTS["e"+i][DATARESP.indexOf("name")];
        ionization_energies_th = JSON.parse(JSON.stringify(ionization_energies_th));
        elem_data_send.push(ionization_energies_th);
        elem_labels_send.push(name_th);
      }
      create_chart(elem_labels_send,elem_data_send);
    }
  });
}
$(document).ready(function() {
  getData(1,25);
});
function create_chart(elem_labels_send,elem_data_send) {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          // labels: ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon'],
          labels: elem_labels_send,
          datasets: [
            {
                label: 'Electronegativity',
                data: elem_data_send,
                backgroundColor: [
                    '#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1','#05d1'
                ],
                borderColor: [
                    '#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d','#05d'
                ],
                borderWidth: 1
            }
           ]
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
