function reverseNum(n) {
  let sum = 0;
  while (n > 0) {
    sum = (n % 10) + sum * 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

let n = 911110;
console.log(reverseNum(n));
