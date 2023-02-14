let array1 = ["item1", "item2"];
let array2 = array1.slice(0);
console.log(array1 === array2); // it means array1 and array2 are different
console.log(array2);
// let array3 = [].concat(array1);
let array3 = [...array1];
console.log(array1 === array3);
array1.push("item3");

console.log(array1);
console.log(array2);
console.log(array3);

// let array4 = [...array3].concat(['ship','car','volvo']);
let array4 = [].concat(array3.slice(0), "ship", "car", "volvo");
console.log(array4);
for (let element of array4) {
  console.log(element);
}

// Array destructuring
console.log(array4);
let [item1, item2, ...newArrayOfElement] = array4;
console.log(item1);
console.log(item2);
let [myvar1, myvar2, myvar3] = array2;
console.log(myvar1, myvar2, myvar3);
console.log(newArrayOfElement);
