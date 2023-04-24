function removeDuplicatesFromSortedArrayII(n, nums) {
  //initialize the count variable to 1
  //initialize a index pointer with 1.
  //iterate the array from 1 to n
  //if current element is equal to prev element increment count else reset the counter to 1
  //if the count is less than or equal to 2,then copy the element to the index pointer and increment the index
  //return the index;
  let count = 1;
  let index = 1;
  let arr = [];
  arr.push(nums[index]);
  for (let i = 1; i < n; i++){
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count <= 2) {
      nums[index] = nums[i];
      arr.push(nums[index]);
      index++;
    }
  }
  return {index,arr};
  // let i =0;
  
  // let newArr = nums.forEach(element=>{
  //   if(i==0||i==1||nums[i-1]!=element){
  //     nums[i]=element;
  //     i++;
  //   }
  // });
  // return { i, nums };  
}
const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 5];
const n = arr.length;
const result = removeDuplicatesFromSortedArrayII(n, arr);
// [1,1,2,2,3,3,4,5]
console.log(result);
