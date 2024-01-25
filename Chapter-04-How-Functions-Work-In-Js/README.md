
# Chapter - 04 How Functions works in js and variable environment

function a(){
	var  x = 10;
	console.log(x);
}
function b(){
	var  x = 20;
	console.log(x);
}

var x = 1;
a();  // 10
b(); // 20 printed how?


    - In JavaScript, variables declared using the var keyword have function-level scope, meaning they are limited to the function in which they are declared. Once the function execution is complete, the variable is no longer accessible.
     
     - Within the function a, a new variable x is declared with a value of 10. Similarly, within the function b, a different variable x is declared with a value of 20. These variables are local to their respective functions and do not affect the global variable x declared outside the functions.


## Call Stack
  - Within the function a, a new variable x is declared with a value of 10. Similarly, within the function b, a different variable x is declared with a value of 20. These variables are local to their respective functions and do not affect the global variable x declared outside the functions.     
