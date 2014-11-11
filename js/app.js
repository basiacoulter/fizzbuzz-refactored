$(document).ready(function(){
   $('#submit').on('click', function(){
     count();
   })
  })
var count = function() {
  console.log("Calling the function!");
  var inputNumber = document.getElementById('num').value;
  var inputValue = +inputNumber;
		for (var i=1; i<inputValue; i++) {
			var p = document.createElement('p');
			p.textContent = i;
			document.getElementById('numbers').appendChild(p);
			if (i%3 == 0 && i%5 == 0) {
			p.textContent = 'fizzbuzz';
			} else if (i%3 == 0) {
			p.textContent = 'fizz';
			} else if (i%5 == 0) {
       p.textContent = 'buzz'; 
      }
		}
}