let array1 = ["a", "c", "e"];
let array2 = ["b", "d", "f"];
let combinedArray = [];
for (const str1 of array1) {
  for (const str2 of array2) {
    combinedArray.push(str1 + str2);
  }
}
console.log(combinedArray);
