// const obj = {
//     firstName: 'Alex'
// };

// obj.firstName = 'John';
// console.log(obj);

obj = { name: "Criodo", age: 17 };
console.log(obj["age"]);

const arr1 = ["Raghu", "Goli", "Farhat", "Mridula", "Rahul"];
const arr2 = ["Mridula", "Raghu", "Goli", "Farhat"];

let mridulaIndex = arr1.indexOf("Mridula");
console.log(mridulaIndex);

if (mridulaIndex == -1) {
  return -1;
}

let personInFrontOfMridula = arr1[mridulaIndex - 1];
console.log(personInFrontOfMridula);

let seatNumber = arr2.indexOf(personInFrontOfMridula);
console.log(seatNumber);
