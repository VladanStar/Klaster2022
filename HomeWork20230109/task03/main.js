function paranIliNeparan() {
  let broj = document.getElementById("broj").value;
  let result = document.getElementById("result");
  if (broj % 2 === 0) {
    result.innerHTML += ` Broj : ${broj} je paran`;
  } else {
    result.innerHTML += ` Broj: ${broj} je neparan`;
  }
}
