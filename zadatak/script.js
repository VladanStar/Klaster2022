'use strict';
let zadatiNumber = Math.round(Math.random() * 20 + 1);

let Scorevalue = 20;

let hiscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});

document.querySelector('.check').addEventListener('click', function () {
  const probniBroj = Number(document.querySelector('.guess').value);
  if (probniBroj > 20 || probniBroj < 1) {
    document.querySelector('.message').innerHTML = 'Uneli ste Nekorektan Broj ';
  } else if (probniBroj == zadatiNumber) {
    document.querySelector('.label-highscore').innerHTML =
      'Tacan  Number....Svaka cast pogodili ste';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').innerHTML = `${probniBroj}`;
    document.querySelector('.message').innerHTML = 'Pogodilli ste';
    document.querySelector('h1').innerHTML = 'Pogodilli ste';
  } else if (probniBroj > zadatiNumber) {
    document.querySelector('.label-highscore').innerHTML = 'TOO High';
    {
      Scorevalue--;

      document.querySelector('.score').textContent = Scorevalue;
      if (Scorevalue <= 0) {
        document.querySelector('.score').textContent = 0;

        document.querySelector('.label-highscore').textContent =
          'You lost the game';
      }
    }
  } else if (probniBroj < zadatiNumber) {
    document.querySelector('.label-highscore').innerHTML = 'TOO Low';
  }
  {
    Scorevalue--;

    document.querySelector('.score').textContent = Scorevalue;
    if (Scorevalue <= 0) {
      document.querySelector('.score').textContent = 0;
      console.log(
        (document.querySelector('.label-highscore').textContent =
          'You lost the game klikni Ponovo button')
      );
    }
  }
});

