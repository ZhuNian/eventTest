function onload() {
	var em = document.getElementById('div');
	var em1 = document.getElementById('div1');
	var em2 = document.getElementById('div2');
	var em3 = document.getElementById('div3');

	em2.addEventListener('keypress', function(evt){
		var charCode = evt.charCode;
	    if (charCode != 0) {
	        if (charCode < 97 || charCode > 122) {
	            evt.preventDefault();
	            alert(
	                "Please use lowercase letters only."
	                + "\n" + "charCode: " + charCode + "\n"
	            );
	        }
	    }
	}, false);




	em3.addEventListener('keypress', function(){
	}, false);

	em1.addEventListener('keypress', function(){
	}, false);
}