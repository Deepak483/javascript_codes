// const hasDriversLicense = true;
// const hasGoodVision = true;

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);
// console.log(hasDriversLicense && hasGoodVision);

// example
// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah can drive the car!!`);
// } else {
//     console.log(`Someone else should drive...`);
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (91 + 88 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win the trophy🏆`);
// }
// else if(scoreKoalas > scoreDolphins){
//     console.log(`Koalas win the trophy🏆`);
// }
// else {
//     console.log(`Both win the trophy!`);
// }

// const age = 18;
// age >= 18 ? console.log('you can drink wine🍷') : console.log('you can drink water');

// const drink = age >= 18 ? 'wine🍷' : 'water🥤';
// console.log(drink);

// let billValue = 430;
// let tipValue = (billValue >= 50 && billValue <= 300) ? (billValue * 0.15) : (billValue * 0.2);
// console.log(`The bill was ${billValue}, the tip was ${tipValue}, and the total value ${billValue + tipValue}`);

"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

function logger() {
  console.log("I'm deepak tiwari");
}

// calling/running/invoking a function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
// console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// apple and orange juice
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//function declaration
// function calAge1(birthYear) {
//     return (2022 - birthYear);
// }

// const age1 = calAge1(1999);

//function expression
// const calAge2 = function (birthYear) {
//     return (2022 - birthYear);
// }
// const age2 = calAge2(1999);

// console.log(age1, age2);

//Arrow function
// const calAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1999));

// const cutPieces = function (fruit) {
//   return fruit * 4;
// }
// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//array in javascript
const fruits = ["orange", "apple", "mango"];
fruits.unshift("jackfruit"); // added from start of the array

// console.log(fruits);
// fruits.shift(); //remove from start of the array

// console.log(fruits);

// const friends = ["Jay", "Ram", "Raghav"];
// const pushed = friends.push("Hero");
// console.log(pushed); //output:4

// const popped = friends.pop();
// console.log(popped); //output:Hero
// console.log(friends);
/* indexOf gives output index as output */
// console.log(friends.indexOf('Ram'));//output:1
// console.log(fruits.indexOf('mango'));//output:1

/** includes method gives 'true' or 'false' */
// console.log(friends.includes('Ram'));//* ouput:true
// console.log(friends.includes('Raghuvanshi'));//* output:false
