'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Congratulation nice Guess!!';
// document.querySelector('.number').textContent = 18;
// document.querySelector('.guess').value = 5;

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!!';
  }
});
