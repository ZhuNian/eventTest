function onload() {
	var em = document.getElementById('div');
	var em1 = document.getElementById('div1');
	var em2 = document.getElementById('div2');
	var em3 = document.getElementById('div3');

	em1.addEventListener('click', clickFun, false);
	// em3.addEventListener('click', function(e) {
	// 	e.stopPropagation();
	// 	alert("this is div3's own alert" + ' ' + e.target.id +' ' + e.currentTarget.id);
	// }, false);
}


function clickFun(e) {
	e.target.style.backgroundColor='blue';
	alert(e.target.id +' ' + e.currentTarget.id);
	e.target.style.backgroundColor='';
} 