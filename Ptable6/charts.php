<?php
$ionui = 0;
if (isset($_GET["chart"])) {
  if ($_GET["chart"]=="ionization_energies") {
    $ionui = true;
  }
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
	  <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="fontawesome-free-5.7.2-web/fontawesome-free-5.7.2-web/css/all.min.css">
	  <script type="text/javascript" src="jquery-3.3.1.js"></script>
    <title>Charts | Periodic Table</title>
    <link rel="stylesheet" href="css/charts_main.css">
    <link rel="stylesheet" type="text/css" href="../../style.css">
  	<script src="js/charts/Chart.min.js"></script>
  	<script src="js/charts/utils.js"></script>
  	<script src="js/charts/analyser.js"></script>
    <link rel="shortcut icon" href="assets/logo.png">
    <script src="js/charts.js"></script>
  </head>
  <body>

    <div class="mobile_options" style="display: none;">
      <button><i class="fa fa-bars"></i></button>
    </div>
    <div class="left">
      <button id="leftCloseBtn" style="display:none;"> <i class="fa fa-times"></i> </button>
      <header>
        <a href="./charts.php" id="main_text">Periodic Table Charts</a>
      </header>
      <div class="set">
        <div class="drop_menu">
          <div class="drop"><span>Ionization Energies</span> &nbsp; <i class="fa fa-chevron-down"></i> </div>
          <div class="drop_down">
            <a <?php if ($ionui){if($_GET["which"]==1){echo " class='a' ";}} ?> href="?chart=ionization_energies&which=1">1st ionization</a>
            <a <?php if ($ionui){if($_GET["which"]==2){echo " class='a' ";}} ?> href="?chart=ionization_energies&which=2">2nd ionization</a>
            <a <?php if ($ionui){if($_GET["which"]==3){echo " class='a' ";}} ?> href="?chart=ionization_energies&which=3">3rd ionization</a>
            <a <?php if ($ionui){if($_GET["which"]==4){echo " class='a' ";}} ?> href="?chart=ionization_energies&which=4">4th ionization</a>
            <a <?php if ($ionui){if($_GET["which"]=="all"){echo " class='a' ";}} ?> href="?chart=ionization_energies&which=all">All combined</a>
          </div>
        </div>
        <a <?php if (isset($_GET["chart"])){if($_GET["chart"]=="electronegativity"){echo " class='a' ";}} ?> href="?chart=electronegativity">Electronegativity</a>
        <br>
        <a href="./"><i class="fa fa-arrow-left"></i> &nbsp; <span>Periodic table</span> </a>
      </div>
    </div><div class="body" tabindex="0">
      <div class="body_dyn">
        <div class="canvas">
          <?php
          if (isset($_GET["chart"])) {
            $chart = $_GET["chart"];
            if ($chart=="ionization_energies" || $chart=="electronegativity") {
              include "charts/$chart.php";
            }
          } else {
            echo '<div style="padding: 25px;color: #789;"># choose a chart from left side</div>';
          }
          ?>
        </div>
      </div>
    </div>
  </body>
</html>
