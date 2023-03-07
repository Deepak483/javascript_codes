console.log("Hello world ", 4 + 6, "Another log");
console.warn("this is warning");
console.error("this is error");

let und;
console.log(und);
let _null = null;
console.log(_null);
let symbol = Symbol("symbol string");
let _symbol = "symbol string";
if (symbol === _symbol) console.log("true");
else console.log("false");

let ac = 0;
console.log((ac = ac + 2));
let arr = [1, 2, 3, 4, 5, 9, 10, 22, 32, 10];
let j = 0;
do {
  console.log(arr[j]);
  j++;
} while (j < arr.length);

for (let i = 0; i < arr.length; i++) {
  if (i == 2) continue;
  console.log(arr[i]);
}
let myArr = ["fan", "camera", 34, null, true];
console.log(myArr.length);
myArr.pop();
console.log(myArr);
myArr.unshift("hello");
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log(myArr.toString());

//string methods
let myString = `Hello!!,I'm Deepak Tiwari`;
console.log(myString);
console.log(myString.length);
console.log(myString.indexOf("Deepak"));
