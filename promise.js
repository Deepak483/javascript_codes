async function myFunction() {
  return "Hello";
}
// is the same as
function myFunction() {
  return Promise.resolve("Hello");
}

const myfunction = myFunction();
console.log(myfunction);

// myFunction.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// )  
