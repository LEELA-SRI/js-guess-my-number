'use strict';
let secretnum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || 0>guess|| guess>20) {
    document.querySelector('.message').textContent = 'Choose a Number between 1 and 20';
  } else if (guess === secretnum) {
    document.querySelector('.message').textContent = 'Ya got it!';
    document.querySelector('.number').textContent = secretnum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('input').disabled=true
    if (score >= highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretnum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretnum ? 'Tis High!' : 'Raise the Number  ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Next Time Gertrude!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretnum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = 0;
  document.querySelector('.score').textContent = score;
  document.querySelector('input').disabled=false
  document.querySelector('.message').textContent = 'start guessing...';
});
