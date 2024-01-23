# Chapter - 03 Hoisting in Javascript

### Hosting 
    - during the compilation phase in js variables and functions are moved on top of their containing scope

    - variables initialized with undefined and  function in case whole functions are stored

    - these declarations are moved - hoisted on top of the scope making them accessible through out the program 



    - Variable declarations are moved on top of their program

    - only declarations are moved not their assignments

var x = 7;
function getName(){
    console.log('Namaster Javascript');
}
getName();
console.log(x);


### Memory (Creation) Phase:
    - var x is allocated memory and initialized with undefined.
    - The getName function is allocated memory along with its code.

### Code (Execution) Phase:
    - The getName function is invoked, and it logs 'Namaste Javascript' to the console.
    - The value of x is logged to the console, and since it was assigned 7, the output will be 7.
