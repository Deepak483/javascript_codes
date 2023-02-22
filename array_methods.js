"use strict";

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Europe"],
  ["GBP", "Pound sterling"],
]);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr.slice(2));
console.log(arr); // slice method does not mutate the array
console.log(arr.slice(-2));
console.log(arr.slice(1, 3));
console.log(arr.slice(-1));
console.log(arr.slice(-3));
console.log(arr.slice()); // slice is also used to store the shallow copy of the data

//SPLICE
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
// second parameter of splice method is deletecount
console.log(arr.splice(2, 3));
// console.log(arr);

//! REVERSE METHOD OF ARRAY
arr = ["a", "b", "c", "d", "e", "f"];
const arr2 = ["g", "i", "h", "m", "f"];
console.log(arr2.reverse()); // reverse method mutates the array
console.log(arr2);
// arr.reverse();
// console.log(arr);

//! CONCAT METHOD OF ARRAY
const letters = arr.concat(arr2);
console.log(letters);
//*concat method does not mutates the array
/* another way to concat the array */
console.log(...arr, ...arr2);

//! JOIN METHOD
//* join method joins the array with any letters or special symbols
console.log(letters.join("--"));

console.log(letters);
arr.unshift("deepak");
arr.shift();
console.log(arr);

