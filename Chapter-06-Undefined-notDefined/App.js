console.log(x); //undefined // declaration
var x = 10;  x = 10 //initalization
console.log(x); 

// not defined
// this is an error occurs when the code is trying to access the variable that is never beem in the memory loaction

var a = 10; 
// console.log(b);  //App.js:9 Uncaught ReferenceError: b is not defined
   

var c;
console.log(c);

if (c === undefined) {
  console.log(true);
}else{
  console.log('not defined  error');
}

//javsscript is loosly typed language means it does not attach any datatype to variable name

var loose = 5;
console.log(loose);
loose = "chai"
console.log(loose);

// a === undefined
//never use keywords as avalue or placeholder it says variable is not assigned


// practise questions
/*
  Question: What is the output of the following code?
let a;
console.log(a); // Output?
console.log(b); // Output?
*/

let num; 
console.log(num); //undefined
console.log(num1); //error not defined