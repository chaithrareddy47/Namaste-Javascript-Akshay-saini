function a() { // a is lexically inside global scope
  console.log(b); // undefined
}
var b = 10;

a();

function aa() { //aa lexically inside the global scope
  c()
  function c(){ // c is lexically inside the aa function
    console.log(d);
  }
}

var d = 10;

aa() // print 10 

// here comes the scope chain
function x(){  // x is lexocally insdie the global scope
  y()
  var z = 10;
  function y() { // y is lexically inside x function
    
  }
}
x();
// console.log(z);// here we will get error


function parent(){
  var num = 0;
  child()
  function child(){
    console.log(num);  // prints 10 how it fincd the local memroy inside the child() function it its not finds it goes to referents of parent function and finds num insdie the parent
  }
}

parent();
