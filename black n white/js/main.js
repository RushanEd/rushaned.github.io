window.onload = function () {
    var the_btn = document.getElementById("btnToallStuff");
    var backtbn = document.getElementById("backtoland");
    the_btn.addEventListener("click", function () {
        the_btn.setAttribute("style", "background:#000;transition:.6s;width:100vw;height:100vw;border-radius:0;");
        backtbn.setAttribute("style", "");
        setTimeout(function () {
            document.getElementById("allSites").style.display = "block";
            the_btn.style.display = "none";
        }, 300);
        setTimeout(function () {
            document.getElementById("itemss").style.visibility = "visible";
            document.getElementById("itemss").style.transform = "translate(0,0)";
        }, 350);
        setTimeout(function () {
            document.getElementById("webdets").style.visibility = "visible";
            document.getElementById("webdets").style.transform = "translate(0,0)";
        }, 450);
        setTimeout(function () {
            document.getElementById("leftdets").style.visibility = "visible";
            document.getElementById("leftdets").style.transform = "translate(0,0)";
        }, 650);
        setTimeout(function () {
            backtbn.style.visibility = "visible";
        }, 2000);
        
    });
    backtbn.addEventListener("click", function () {
        backtbn.setAttribute("style", "background:#fff;transition:.6s;width:100vw;height:100vw;transform: translate(-50%,50%) scale(2,2);");
        the_btn.setAttribute("style", "");
        setTimeout(function () {
            document.getElementById("allSites").style.display = "none";
            backtbn.style.display = "block";
        }, 300);
        setTimeout(function () {
            document.getElementById("itemss").style.visibility = "hidden";
            document.getElementById("itemss").style.transform = "translate(0,8%)";
        }, 350);
        setTimeout(function () {
            document.getElementById("webdets").style.visibility = "hidden";
            document.getElementById("webdets").style.transform = "translate(0,8%)";
        }, 450);
        setTimeout(function () {
            document.getElementById("leftdets").style.visibility = "hidden";
            document.getElementById("leftdets").style.transform = "translate(0,8%)";
        }, 650);
        setTimeout(function () {
            document.getElementById("backtoland").style.visibility = "hidden";
        }, 2000);
    });
    // let yy = window.innerHeight;
    // document.getElementsByClassName("hero")[0].addEventListener("mouseover", function () {
    //     var y = 0;
    //     document.onmousemove = function (event) {
    //         y = event.pageY;
    //         if (y > (yy / 2)) {
    //             document.querySelector(".headerlast div.expander").setAttribute("style", "background:#0002;");
    //         } else {
    //             document.querySelector(".headerlast div.expander").setAttribute("style", "background:#0000;");
    //         }
    //     }
    // });

}