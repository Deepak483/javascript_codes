function firstMissingPositive(n, arr) {

  //* first approach using sorting which take time complexity of o(nlogn)
  // arr.sort((a, b) => {
  //   return a - b;
  // });
  // let count = 1;
  // console.log(arr);
  // for (let i = 0; i < arr.length; i++){
  //   if (arr[i] > 0) {
  //     if (arr[i] === count) count++;
  //     else break;
  //  } 
  // }
  // return count;
  //* second approach using time complexity of O(n) and space O(1)
  // for (let i = 0; i < n; i++){
  //   const element = arr[i];
  //   if (element >= 1 && element <= n) {
  //     let chair = element - 1;
  //     if (arr[chair] !== element) {
  //       [arr[chair], arr[i]] = [arr[i], arr[chair]];
  //       i--;
  //     }
      
  //   }
  // }
  // for (let i = 0; i < n; i++){
  //   if (i + 1 !== arr[i]) {
  //     return i + 1;
  //   }
  // }
  // return n + 1;
  
  //* third approach using map and easy one 
  const positiveIntegers = new Map();
  for (let i = 0; i < n; i++){
    if (arr[i] > 0) {
      positiveIntegers.set(arr[i], true);
    }
  }
  console.log(positiveIntegers);
  let missingInteger = 1;
  while (positiveIntegers.has(missingInteger)) {
    missingInteger++;
  }
  return missingInteger;
}
let n = 4;
let arr = [1,2,3,4];
const result = firstMissingPositive(n, arr);
console.log(result);

// int firstMissingPositive(vector < int > & nums){
//   int n = nums.size();
//   for (int i = 0; i < n; i++){
//     int element = nums[i];
//     if (element >= 1 && element <= n) {
//       int chair = element - 1;
//       if (nums[char] != element) {
//         swap(nums[char], nums[i]);
//         i--;
//       }
      
//     }
//   }
//   for (int i = 0; i < nums.size(); i++) {
//     if (i + 1 != nums[i]) return i + 1;
//   }
//   return n + 1;
// }