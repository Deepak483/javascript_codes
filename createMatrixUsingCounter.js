// const size = 2;
// let counter = 0;
// let matrix = [];
// for (let i = 0; i < size; i++) {
//   let newArray = [];
//   for (let j = 0; j < size; j++) {
//     newArray.push(counter);
//     counter++;
//   }
//   matrix.push(newArray);
// }
// console.log(matrix);

// Solution using join method of string
//first create object array
const bioObject = {
  firstName: 'Alex',
  middleName: 'P',
  lastName:'John'
};
//combined them using join method 
const combinedString = [bioObject.firstName, bioObject.middleName, bioObject.lastName].join(" ");
// return the fullName as object
return { fullName: combinedString };

