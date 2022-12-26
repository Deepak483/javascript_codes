// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('Hello'));
// console.log(reverseString('welcome'));

let _string = "I love India";
let _splitString = _string.split(" ");
console.log(_splitString);
// console.log(typeof _splitString.length);`

let newArray = [];
for (let i = 0; i < _splitString.length; i++) {
  newArray.push(_splitString[i].length);
  console.log(newArray);
}
console.log(newArray);
let max = newArray[0];
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] > max) {
    max = newArray[i];
  }
}
console.log(max);

/**  function findLongestWordLength(str){
  // You only need to implement this function.
  let _splitString = str.split(' ');
  let newArray = [];
  for(let i = 0;i<_splitString.length;i++){
    newArray.push(_splitString[i].length);
    console.log(newArray);    
  }
  let max = newArray[0];
for(let i= 0;i<newArray.length;i++){
    if(newArray[i]>max){
        max = newArray[i];
    }
}
return max;
}
 */