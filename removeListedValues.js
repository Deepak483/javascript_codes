// function without(arr, without) {
//   const filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let include = true;
//     for (let j = 0; j < without.length; j++) {
//       if (arr[i] === without[j]) {
//         include = false;
//         break;
//       }
//     }
//     if (include) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }

function removeListedValues(arr, without) {
  let resultArr = [];
  for (let i = 0; i < arr.lenght; i++){
    let include = true;
    for (let j = 0; j < without.lenght; j++){
      if (arr[i] === without[j]) {
        include = false
      }
    }
    if (include) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

const arr = [1, 2, 2, 3, 1, 2];
const withoutArr = [2, 3];
const filteredArr = removeListedValues(arr, withoutArr);
console.log(filteredArr); // Output: [1, 1]
