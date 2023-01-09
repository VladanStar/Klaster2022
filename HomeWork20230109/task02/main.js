function deljiv() {
  let broj = document.getElementById("broj").value;
  let result = document.getElementById("result");
  switch (broj) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      result.innerHTML += ` Za dobijenu ocenu: ${broj} ste Pali ispit`;
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      result.innerHTML += ` Za dobijenu ocenu: ${broj} ste Prosliispit`;
      break;
    default:
      alert("Unesite vrednost vecu od 1 i manju od 10")
      break;
  }
}
