//average height in array
// Sample Input 1
// 6
// 2.2 1 3 1.9 2.4 1.7

// Sample Output 1
// 2.033333
function averageHeight(n, arr) {
  let result = 0;
  arr.forEach((element) => {
    result = result + element;
  });
  let average = result / arr.length;
  let fixedValue = average.toFixed(5);
  return fixedValue;
}

let n = 6;
let arr = [2.2, 1, 3, 1.9, 2.4, 1.7];
let average = averageHeight(n, arr);
console.log(average);

// const arr = [2.2, 1, 3, 1.9, 2.4, 1.7];
// let sum = 0;
// arr.forEach((num) => sum += num);
// let average = sum / arr.length;
// let fixedValue = average.toFixed(5);
// console.log(average);
