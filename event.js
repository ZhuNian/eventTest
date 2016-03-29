function onload() {
	var em = document.getElementById('div');
	var em1 = document.getElementById('div1');
	var em2 = document.getElementById('div2');
	var em3 = document.getElementById('div3');

	em2.addEventListener('click', function(e){
		// e.preventDefault();
		alert('div2 prevent default');
	}, false);


	em3.addEventListener('click', function(){
		alert('div3');
	}, false);
}