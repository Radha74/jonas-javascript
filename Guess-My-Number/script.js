'use strict';
const message = document.querySelector('.message');
const number = document.querySelector('.number');
let score = document.querySelector('.score');
let scores = 20;

let highscore = 0;
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

checkBtn.addEventListener('click', function () {
  const guessValue = Number(guess.value);
  // When there is no input
  if (!guessValue) {
    message.textContent = `🤦‍♂️ No number`;
    // Whene player wins
  } else if (guessValue === secretNumber) {
    message.textContent = `👌 Correct number`;
    number.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (scores > highscore) {
      highscore = scores;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guessValue !== secretNumber) {
    if (scores > 1) {
      message.textContent =
        guessValue > secretNumber ? `😥 Too high` : `😥 Too low!`;
      scores--;
      score.textContent = scores;
    } else {
      message.textContent = `😌 You lost the game1`;
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  scores = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Starte guessing...';

  score.textContent = scores;
  number.textContent = '?';
  guess.value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
