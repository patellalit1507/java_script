'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
let highscore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is not input
  if (!guess) {
    document.querySelector('.message').textContent = 'NO Nmber!';
  }
  // when player wins
  else if (guess === number) {
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('.body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    console.log(highscore);
    console.log(score);

    highscore = Math.max(score, highscore);
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== number) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent =
        guess > number ? 'guess is too high' : 'guess is too low';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'game over';
      document.querySelector('.score').textContent = score;
    }
  }

  // when guess is wrong
  //   else if (guess > number) {
  //     if (score <= 0) {
  //       document.querySelector('.message').textContent = 'game over';
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       score--;
  //       document.querySelector('.message').textContent = 'guess is too high';
  //       document.querySelector('.score').textContent = score;
  //     }
  //   } else if (guess < number) {
  //     if (score <= 0) {
  //       document.querySelector('.message').textContent = 'game over';
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       score--;
  //       document.querySelector('.message').textContent = 'guess is too low';
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
});

// const x = function () {
//   console.log(document.querySelector('.guess').value);
// };
// document.querySelector('.check').addEventListener('click', x);
