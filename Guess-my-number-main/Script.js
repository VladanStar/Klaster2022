"use strict";


let screateNumber = Math.trunc(Math.random() * 20 + 1);

let Scorevalue = 20;


let hiscore=0;
document.querySelector(".check").addEventListener("click", function () {
  const testnumber = Number(document.querySelector(".guess").value);

  if (!testnumber) {
    console.log
      (document.querySelector(".numberGuessing").textContent =
        "Number Guessing");
    
  } else if (testnumber === screateNumber) 
  {
    console.log
      (document.querySelector(".numberGuessing").textContent =
        "Correct Number....Congratulation");
    
    document.querySelector("body").style.backgroundColor = "#60b347";
    
    console.log(document.querySelector(".number").textContent = screateNumber);
    if (Scorevalue > hiscore)
    {
     
      console.log ( document.querySelector('.highScore').textContent= Scorevalue);
    
    }
    
  } else if (testnumber > screateNumber) {
    console.log
      (document.querySelector(".numberGuessing").textContent = "TOO High");

    {
      Scorevalue--;

      document.querySelector(".score").textContent = Scorevalue;
      if (Scorevalue <= 0)
      {
        document.querySelector(".score").textContent = 0;
        console.log
        (document.querySelector(".numberGuessing").textContent = "You lost the game click Again Tab");
      }
    }
    
  } else if (testnumber < screateNumber) {
    console.log
      (document.querySelector(".numberGuessing").textContent = "TOO Low");
    {
      Scorevalue--;

      document.querySelector(".score").textContent = Scorevalue;
      if (Scorevalue <= 0)
      {
        document.querySelector(".score").textContent = 0;
        console.log
        (document.querySelector(".numberGuessing").textContent = "You lost the game");
      }
    }
    if (score <= 0)
      {
        console.log
        (document.querySelector(".numberGuessing").textContent = "You lost the game");
      }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  screateNumber = Math.trunc(Math.random() * 20 + 1);
  console.log
    (document.querySelector(".numberGuessing").textContent =
      "Number Guessing");
      Scorevalue = 20;
  
  document.querySelector("body").style.backgroundColor = "#222";
  console.log((document.querySelector(".number").textContent = "?"));
  console.log((document.querySelector(".guess").value = " "));
  document.querySelector(".score").textContent = Scorevalue;

});
