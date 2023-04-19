let n = 3;
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function rotateImage(matrix, n){
  let rotatedMatrix = [];
  for (let j = 0; j < n; j++){
    for (let i = n - 1; i >= 0; i--){
      rotatedMatrix.push(matrix[i][j]);
    }
  }
  const ansMatrix = [];
  console.log(rotatedMatrix);
  for (let i = 0; i < n; i++){
    ansMatrix.push([]);
    for (let j = 0; j < n; j++){
      ansMatrix[i].push(rotatedMatrix[j * n + i]);
    }
  }
  console.log(ansMatrix);
}
[[7,8,9],[4,5,6],[1,2,3]]
// console.log(sqrt);
console.log(rotateImage)
const result = rotateImage(matrix, n);
console.log(result);
