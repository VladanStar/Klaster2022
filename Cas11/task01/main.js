// let ime = "Pera";
// let age = 34;
// console.log("name: ", ime);
// console.log(ime, typeof ime);
// console.log(age, typeof age);

// let c = prompt("unesi prvi broj: ");
// let d = prompt("unsi drugi  broj: ");

// let zbir = Number(c) + Number(d);
// alert("zbir je " + zbir);

// let godina = 2022;
// let godRodjenja = Number(prompt("Unesite godinu rodjenja:"));
// let starost = godina - godRodjenja;
// alert(`"Vi i mate  " ${starost} " godina";`);
// document.getElementById("btn").onclick = calculateBMI;

function calculateBMI() {
   
  let kg = document.getElementById("kilo").value;
  let visina = document.getElementById("visina").value;
  let bmi = kg / (visina * visina);
  let result = document.getElementById("result");
  result.innerHTML += `${bmi}`;
  console.log(bm);
  preventDefault();
}
// console.log(bmi(kg, visina))

// console.log(bmi(kg, visina))
//  let godine = prompt("Unesi svoje godine:");
