//MAANG-INTERVIEW QUES

//Write a function that accepts a number encoded as an array of digits, e.g. [1,9,3,8] for the number 1938, and returns the encoded number incremented by 1, e.g. returns [1,9,3,9].

/*Examples: 
[1,9,3,8] → [1,9,3,9] 
[4,4,4] → [4,4,5]   
[ 1, 9, 3, 9] → [1 , 9, 4, 0] 
[9, 9, 9, 9] → [ 1, 0, 0, 0, 0]
[9] -> [1,0]
*/

// console.log(Math.floor(2.33))
// console.log(Math.floor(2.999))
// console.log(Math.trunc(2.33))

const sayHii = function () {
  console.log("Hii");
};
console.log(sayHii());

let sayHello = () => "Hello";
console.log(sayHello());

const MESSAGE = () => "Santa is Coming";
let player1 = ["Ronaldo", 35, 112233];
let newRonaldo = player1;
newRonaldo.push(90);
console.log(newRonaldo);
console.log(player1);
console.log(player1 === newRonaldo);

// function incrementNumber(number) {
//     var add = 1;
//     for (var i = number.length - 1; i >= 0; i--) {
//       var digit = number[i];
//       digit += add;
//       if (digit > 9) {
//         digit = 0;
//         add = 1;
//       }
//       else {
//         add = 0;
//       }
//       number[i] = digit;
//     }
//     if(number[0]==0){
//       number.unshift("1")
//     }
//     return number;
//   }
//   console.log(incrementNumber([9, 9, 9, 9]))

//   arr = [1,9,3,8];
// num = arr.join('');
// num = Number(num) + 1
// num = Array.from(String(num))
// function incrementNumber(digits) {
//   // Create a copy of the input array
//   let result = [...digits];

//   // Start from the least significant digit and work our way up
//   for (let i = result.length - 1; i >= 0; i--) {
//     // Increment the current digit
//     result[i]++;

//     // If the current digit is 10, set it back to 0 and carry the 1 to the next digit
//     if (result[i] === 10) {
//       result[i] = 0;
//     } else {
//       // If the current digit is not 10, we can return the result
//       return result;
//     }
//   }

//   // If we reach this point, all the digits were 9, so we need to add an extra 1 at the beginning
//   result.unshift(1);
//   return result;
// }

function incrementNumber(digits) {
  // Start from the last digit and work our way towards the first
  for (let i = digits.length - 1; i >= 0; i--) {
    // Increment the current digit
    digits[i]++;
    // If the digit is less than 10, we're done
    if (digits[i] < 10) {
      return digits;
    }
    // Otherwise, set the digit to 0 and continue to the next digit
    digits[i] = 0;
  }
  // If we get here, it means all the digits were set to 9 and we need to add an extra digit for the carry
  digits.unshift(1);
  return digits;
}
console.log(incrementNumber([1, 9, 3, 8])); // [1, 9, 3, 9]
console.log(incrementNumber([4, 4, 4])); // [4, 4, 5]
console.log(incrementNumber([1, 9, 3, 9])); // [1, 9, 4, 0]
console.log(incrementNumber([9, 9, 9, 9])); // [1, 0, 0, 0, 0]
console.log(incrementNumber([9]));

