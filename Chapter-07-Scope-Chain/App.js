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

var b = 10;

aa() // print 10 