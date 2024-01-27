console.log(window === this);

console.log(window);
console.log(this);
if(window === this){
  console.log(true);
}else{
  console.log(false);
}

var global = 'I am global scope';

function scope(){
  console.log(global);
}

scope()
