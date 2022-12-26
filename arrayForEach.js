// let arr = [23,11,65];
// console.log(arr[0]);

// // at method in array
// console.log(arr.at(1));

// console.log(arr[arr.length-1])
// let returnValue = arr.slice(-1);
// console.log(arr.slice(0,1)[0]);

// console.log(arr.at(-1));

// console.log(returnValue[0]);
// console.log(arr);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i,movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i+1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i+1}: You withdraw ${Math.abs(movement)}`);
//   }
// }

// console.log("-----FOREACH STATEMENT------");

// movements.forEach(function (movement) {
//   if (movement) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// });
// const sayHii = () => "Hello world";
// console.log(sayHii());
// var a = 10;
// function display() {
//     console.log(a);
// }
// display();
// function work(){
//     var x = 1
//     var x = 2;
//     console.log(x);
//   }
//   work();
// let x = 1
// function work(){
//   let x = 2;
//   console.log(x);
// }
// work();
// display();

// function display() {
//    console.log('Will this work!');
// }

// funcExp();

// var funcExp = function display() {
//     console.log('Will this work!');
// }
// function greet(){
//     return function() {
//         console.log('Inner function');
//     }
// }
// const returnVal = greet();
// returnVal();
function greet(message) {
    message();
}
function message() {
    console.log('Hello World');
}

greet(message);
function createBase(baseNumber) {
    return function(N) {
      return baseNumber + N;
    }
  }
  
  var addSix = createBase(6);
  console.log(addSix(10));