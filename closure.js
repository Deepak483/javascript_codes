// var a = 100;
// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   console.log(a);

//   y();
// }
// console.log(a);
// x();

function global() {
  function time() {
    setTimeout(() => {
      console.log(1);
    }, 2000);
  }
  console.log("Namaste Javascript!!");
  time();
}
global();
