function onload() {
	var em = document.getElementById('div');
	var em1 = document.getElementById('div1');
	var em2 = document.getElementById('div2');
	var em3 = document.getElementById('div3');

	em3.onclick = clickFun.bind(null, 'attr');
	em3.addEventListener('click', clickFun.bind(null, 'addEventListener'), false);


	// em3.onclick = clickFun.bind(null, 'attr2');
	// em3.addEventListener('click', clickFun.bind(null, 'addEventListener2'), false);
}


function clickFun(msg, e) {
	e.target.style.backgroundColor='blue';
	alert(msg || e.target.id);
	e.target.style.backgroundColor='';
} 