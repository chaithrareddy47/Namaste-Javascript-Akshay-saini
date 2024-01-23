//normal js codee
// var x = 7;

// function getName(){
//     console.log('Namaster Javascript');
// }
// getName();
// console.log(x);

// 2. Moving getName invocation on top of the code

console.log(getName); // prints whole function 
getName()

console.log(x); // prints undefined
var x = 7;
function getName(){
    console.log('Namaste Javascript');
}
console.log(x);

// Practise problems
// 1. Problem: Understanding Hoisting

console.log(a); // undefined
var a = 5;  // a=5
console.log(a); // 7

//solution: here variable declaration is moved on the top of their scope so when we log it is undefined and after the code execution phase a will be stored to 7 

//2.Problem: Function Hoisting
foo(); // prints hello from bar
// bar(); // error - type error

function foo(){
    console.log('Hello from foo!');
}

// var bar = function(){
//     console.log('Hello from bar');
// }

// solution: here in the bar () function we get an error because it is a named function  only normal function are hoisted arrow function and named function cannot be hoisted so we get an errr

// 3. Problem: Hoisting in a Block Scope
function example(){
    console.log(y); // undefined
    if (true) {
        var y = 5;
    }
    console.log(y); // prints 5
}

example();

//solution in var hoisting variables can be hoisted anywhere from the global scope it is added to the window object
