function deljiv() {
  let ocena = document.getElementById("ocena").value;
  let result = document.getElementById("result");
  if(ocena >1 && ocena <= 5 ){
      result.innerHTML += ` Za dobijenu ocenu: ${ocena} ste Pali ispit`;
  }
  else if(ocena >=6 && ocena <=10){
  
      result.innerHTML += ` Za dobijenu ocenu: ${ocena} ste Prosli ispit`;
  
  }
  else{
    alert("Unesite vrednost vecu od 1 i manju od 10")
  }
   
  }

