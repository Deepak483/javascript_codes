//slice and splice method

const colors = ['purple', 'red', 'white', 'blue', 'gold'];

//in slice method array is sliced into two parts but the original array is not modified it forms the new array and the second parameter of splice is exclusive
const value = colors.slice(1, 3);
console.log(value);

//in splice method array is cut into parts and the second parameter of splice method is how many elements u want to delete.
const valued = colors.splice(1, 3);
console.log(valued);

console.log(colors);
console.log(colors.slice(1, 4));

const foods = ['donut', 'bread', 'pizza', 'burger', 'dosa', 'pasta'];
console.log(foods.splice(0, foods.length - 1));
// console.log(foods.splice(-1));
// console.log(foods.splice(2))
console.log(foods);

// ! best approach for the increment value in array solution

let array = [4, 4, 5];
function incrementArrayElement(array) {
  if (array.length == 0) {
    array.push(0);
  }
  const lastElement = array[array.length - 1];
  if (lastElement < 9) {
    array[array.length - 1] += 1;
    return array;
  } else {
    const incrementedValues = array.splice(0, array.length - 1);
    return incrementArrayElement(incrementedValues).concat([0]);
  }
}

console.log(incrementArrayElement(array));
