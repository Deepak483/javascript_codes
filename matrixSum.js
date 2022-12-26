// //total number of students (matrixSum)
// const _2DArray = [[23, 48], [12, 18]];
// let sumOfArray = 0;
// for (let i = 0; i < _2DArray.length; i++){
//     for (let j = 0; j < _2DArray.length; j++){
//         sumOfArray = _2DArray[i][j] + sumOfArray;
//     }
// }
// console.log(sumOfArray);

// function matrixSum(arr) {
//     let sumOfArray = 0;
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length; j++){
//             sumOfArray = arr[i][j] + sumOfArray;
//         }
//     }
//     return sumOfArray;
// }

function createMatrix(size) {
  // You only need to implement this function.
  const matrix = [];
  for (let i = 0; i < size; i++) {
    const rowElements = [];
    for (let j = 0; j < size; j++) {
      rowElements.push(j);
    }
    matrix.push(rowElements);
  }
  return matrix;
}

console.log(createMatrix(3));
