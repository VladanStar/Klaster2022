'use strict';
let zadatiNumber = Math.round(Math.random() * 20 + 1);

document.querySelector(".again").addEventListener("click", function () {
    zadatiNumber = Math.round(Math.random() * 20 + 1);

    document.querySelector("body").style.backgroundColor = "#222";

})

document.querySelector(".check").addEventListener("click", function(){
    const probniBroj = Number(document.querySelector(".guess").value);

    if(probniBroj  == zadatiNumber){
        
        document.querySelector(".label-highscore").innerHTML =
        "Tacan  Number....Svaka cast pogodili ste";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").innerHTML= `${probniBroj}`;
    }
    else if (probniBroj >zadatiNumber){
        document.querySelector(".label-highscore").innerHTML= "TOO High"
    }
    else if (probniBroj < zadatiNumber){
        document.querySelector(".label-highscore").innerHTML = "TOO Low"

    }


})
