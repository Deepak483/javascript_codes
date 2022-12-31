// setTimeout(() => {
//   myFunction("I love you!!!");
// }, 3000);

// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //calling the resolve function
    resolve("I love you!!!");
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById("demo").innerHTML = "I love you!!!";
});
