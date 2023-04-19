function increment(N, A) {
  let carry = 1;
  let sum;
  let ansArray = [];
  for (let i = N - 1; i >= 0; i--) {
    let sum = A[i] + carry;
    ansArray.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry) {
    ansArray.push(carry);
  }
  return ansArray.reverse().join('');
}
let A = [9, 9, 9];
let N = 3;
const result = increment(N, A);
console.log(result);
