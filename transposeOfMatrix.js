function transpose(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let col = [];
    for (let j = 0; j < arr.length; j++) {
      col.push(arr[j][i]);
    }
    result.push(col);
  }
  return result;
}

let arr = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

console.log(transpose(arr));

let obj = {
  address: {
    streetNumber: 5
  }
};
obj.address.streetNumber = 8;
console.log(obj);


