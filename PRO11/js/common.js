const buttonPlus = document.getElementById("buttonPlusId");
const buttonMinus = document.getElementById("buttonMinusId");
const number = document.getElementById("numberId");
const buttonPlus2 = document.getElementById("buttonPlus2Id");

number.innerHTML = 0;

buttonPlus.addEventListener("click", () => {
  console.log("+");

  number.innerHTML = +number.innerHTML + 1;
});
buttonPlus2.addEventListener("dblclick", () => {
  console.log("+");

  number.innerHTML = +number.innerHTML + 2;
});

buttonMinus.addEventListener("click", () => {
  console.log("-");
  number.innerHTML = +number.innerHTML - 1;
});
