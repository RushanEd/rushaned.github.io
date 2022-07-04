$(document).ready(function(){
	$('.share a').on('mouseover',function(){
		$(this).children('span').css({
			transform:'scale(1,1) translate(0%,0%) '
		});
	}).on('mouseout',function(){
		$(this).children('span').css({
			transform:'scale(0,0) translate(0%,200%) '
		});
	});
	function hideshares() {
		$('div.share2>a').css({
			transform:'translate(-150%,0%)'
		});
	}
	$(document).scroll(function(){
		var y=$(document).scrollTop();
		var yt=$('div.share').offset().top+$('div.share').outerHeight();
		if (y>yt) {
			$('#f1').css({transform:'translate(0%,0%)'});
			setTimeout(function(){
				$('#f2').css({transform:'translate(0%,0%)'});
			},20);
			setTimeout(function(){
				$('#f3').css({transform:'translate(0%,0%)'});
			},60);
			setTimeout(function(){
				$('#f4').css({transform:'translate(0%,0%)'});
			},100);
			setTimeout(function(){
				$('#f5').css({transform:'translate(0%,0%)'});
			},140);
		}if(y<=yt) {
			hideshares();
		}
	});
	var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "1.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName('t')[0];
    var y = x.childNodes[0];
    document.getElementById("demo").innerHTML = y.nodeValue; 
}
});