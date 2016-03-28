function onload() {
	var em = document.getElementById('div');
	var em1 = document.getElementById('div1');
	var em2 = document.getElementById('div2');
	var em3 = document.getElementById('div3');

	em1.addEventListener('click', clickFun, true);
	em2.addEventListener('click', clickFun, true);
	em3.addEventListener('click', clickFun, true);

	em1.addEventListener('click', clickFun, false);
	em2.addEventListener('click', clickFun, false);
	em3.addEventListener('click', clickFun, false);
}


function clickFun(e) {
	e.currentTarget.style.backgroundColor='blue';
	alert(e.target.id +' ' + e.currentTarget.id);
	e.currentTarget.style.backgroundColor='';
} 