// console.log(arr1);

function findSeatNumber(arr1, arr2) {
  let mridulaIndex = 0;
  let personInFrontOfMridula = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === "Mridula") {
      mridulaIndex = i;
      if (mridulaIndex === -1) {
        return -1;
      }
      personInFrontOfMridula = i;
    }
  }
  let seatNumber = -1;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === arr2[personInFrontOfMridula]) {
      return (seatNumber = i);
    }
  }
}
let arr1 = ["Raghu", "Goli", "Farhat", "Mridula", "Rahul"];

let arr2 = ["Mridula", "Raghu", "Goli", "Farhat"];
// console.log(arr1);

let returnValue = findSeatNumber(arr1, arr2);
console.log(returnValue);
