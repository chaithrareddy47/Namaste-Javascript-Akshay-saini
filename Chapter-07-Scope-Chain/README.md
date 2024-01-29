# Chapter - 07 | scope chian | scope and lexical envirnment

function a() {
  console.log(b); // undefined
}
var b = 10;

a();

function aa() {
  c()
  function c(){
    console.log(d);
  }
}

var d = 10;

aa() // print 10 

// here comes the scope chain
function x(){
  y()
  var z = 10;
  function y() {
    
  }
}
x();
console.log(z);// here we will get error

# Scope
  - scope means a region or area in code where particular variable and function can be accessed

  ## There are 2 aspects in the scope
     1. what is the scope of any variable
     2. is any particular variable is inside the  scope of another one

  ## Scope is directly dependent on the lexical environment

  ## Each block of code creates a scope and lexical environment

  ## Whenever the global execution is created, a lexical environment is also created 

  ## Lexical environmnet 
     - lexical means - local memory along with lexical environment along with its parent

     - lexical means sequence or order

     - scope directly related to lexicsl environment


  ## every execution context (means functions) has a refernce to it ourt environment and out environment (global scope) is called as lexical scope

  ## Lexical scoping
     - the ability of accesiing the varible refernce from out parent functions is called lexical scoping

