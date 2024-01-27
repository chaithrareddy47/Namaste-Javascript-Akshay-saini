# Chapter - 04 | undefined and not defined

## undefined
   - its a placeholder that is initalized to every variabled in memory creation phase in global execution context

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

