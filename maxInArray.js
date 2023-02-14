//max element in array
let arr = [1, 2, 3, 1, 2, 5, 9, 111];
let result = arr.reduce((a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
});
console.log(result);

function maxInArray(n, arr) {
  let result = arr.reduce((a, b) => {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  });
  return result;
}

let value1 = 'true';
let value2 = false;
console.log(value1 === value2);
