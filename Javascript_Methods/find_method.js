let object = [
  { _id: "1", name: "Satya" },
  { _id: "2", name: "Deepak" },
  { _id: "3", name: "John" },
  { _id: "4", name: "Zendaya" },
  { _id: "4", name: "Tom Holland1" },
];
for (let i = 0; i < object.length; i++) {
  if (object[i]._id === "4") {
    console.log(object[i]);
    break;
  }
}
let student = object.find((item) => item._id == "4");
console.log(student);

const names = ["Bill", "Kelly", "John"];
//['My Name is Bill','My Name is Kelly','My Name is John'];

// create new variable
// let newNames = [];
// for (let i = 0; i < names.length; i++){
//     newNames.push(`My Name is ${names[i]}`);
// }
// console.log(newNames);

// let newVariable = [];
// names.forEach(element => {
//     newVariable.push(`My Names is ${element}`);
//     return newVariable;
// });
// console.log(newVariable);

// const value = names.map((element) => `My Name is ${element}`);
// console.log(value);

const people = [
  { Name: "Bill", age: 20 },
  { Name: "John", age: 30 },
  { Name: "Johnny", age: 40 },
  { Name: "Janardhan", age: 50 },
];
console.log(people);
console.log(typeof people[0].age);
console.log(typeof people[1].age);

const players = [
  { FName: "Hardik", LName: "Pandya", Score: 100 },
  { FName: "Dinesh", LName: "Kartik", Score: 33 },
  { FName: "Rohit", LName: "Sharma", Score: 45 },
  { FName: "MS", LName: "Dhoni", Score: 50 },
];
//reduce method has two parameter and in second parameter has initial value
// const finalScore = players.reduce((total, player) => total + player.Score,0);
// console.log(finalScore);

const playerFullName = players.reduce((fullName, currentValue) => {
  // return [fullName, [currentValue.FName, currentValue.LName].join(" ")].join(
  //   " "
  // );
  return [...fullName, currentValue.FName + " " + currentValue.LName];
}, []);
// console.log(fullName);
console.log(playerFullName);

const colors = ['purple', 'red', 'white', 'blue', 'gold'];
console.log(colors.slice(1, 4));

