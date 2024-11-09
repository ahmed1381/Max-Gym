let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let Bmi = document.querySelector("#Bmi");
let total = document.querySelector("#total");
let calc = document.querySelector("#calc");
let btnPrice = document.querySelector(".btn-price");

calc.addEventListener("click", function (ev) {
    btnPrice.value = `${weight.value * 24} Cal Today`;
});