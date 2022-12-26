let str = "madam";
const reverseString = str.split("").reverse().join("");
console.log(reverseString);

if (reverseString === str) {
  console.log("string is palindrome");
} else {
  console.log("string is not a palindrome");
}
