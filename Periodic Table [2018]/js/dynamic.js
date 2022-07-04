$(document).ready(function() {
	$('table').focus();
	$('#listViewAll').click(function() {
		window.open('elements/db.html','_blank')
	});
	for (var i = 1; i < 127; i++) {
		var e=eval('e'+i);
		$('table').append('<tr class="row"><td class="atomicNumber" title="'+e.name+'">'+i+'</td><td class="name">'+e.name+'</td><td class="symbol">'+e.symbol+'</td><td class="atomicMass">'+e.relativeAtomicMass+' g/mol</td><td class="class">'+eval(e.classification).name+'</td><td class="yearDis">'+e.yearDis+'</td><td class="atomicMass">'+e.casNum+'</td><td class="atomicMass">'+e.disBy+'</td><td class="atomicMass">'+e.electronShell+'</td><td class="atomicMass">'+e.neutrons+'</td><td class="atomicMass">'+e.density+' g/mol</td><td class="atomicMass">'+e.liquidIn+' K</td><td class="atomicMass">'+e.gasIn+' K</td></tr>')
	}
	setTimeout(function() {
			for (var i = 0; i < document.getElementsByTagName('tr').length; i++) {
				if (i%2===0) {
					document.getElementsByTagName('tr')[i].setAttribute('style','background:#eeeeee;');
				}
			}
			$('table tr.thead').css({background:'#aaaaaa'});
	},500);
});
