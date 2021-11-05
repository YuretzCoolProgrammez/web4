window.addEventListener('DOMContentLoaded', function (event) {
  const PRICE1 = 100;
  const PRICE2 = 200;
  const PRICE3 = 300;
  const EXTPRICE = 1000;
  const RADIO1 = 10;
  const RADIO2 = 20;
  const RADIO3 = 30;
  const CHECK = 50;
  let price = PRICE1;
  let extraPrice = EXTPRICE;
  let radios = document.getElementById("myradios"); 
  let s = document.getElementsByName("myselect");
  let checks = document.getElementById("mycheck");
  let r = document.querySelectorAll(".pis input[type=radio]");
  let checkbox = document.getElementById("check");
  let result = document.getElementById("result");
  let count = document.getElementsByName("count");
  let calc = document.getElementById("calc");
  s[0].addEventListener("change", function(event) {
    let select = event.target;
    if (select.value === "1") {
      radios.classList.add("d-none");
      checks.classList.add("d-none");
      extraPrice = EXTPRICE;
      price = PRICE1;
    }
    if(select.value === "2") {
      radios.classList.remove("d-none");
      checks.classList.add("d-none");
      document.getElementById("radio1").checked = true;
      extraPrice = EXTPRICE;
      price = PRICE2;
    }
    if(select.value === "3"){
      radios.classList.add("d-none");
      checks.classList.remove("d-none");
      extraPrice = EXTPRICE;
      price = PRICE3;
      document.getElementById("check").checked = false;
    }
  });
r.forEach(function (currentRadio) {
    currentRadio.addEventListener("change", function (event) {      
        let r = event.target;
        if (r.value === "r1") {      
            extraPrice = RADIO1;
            console.log(r.value);
        }
        if (r.value === "r2") {
            extraPrice = RADIO2;
            console.log(r.value);
        }
        if (r.value === "r3") {
            extraPrice = RADIO_3;
            console.log(r.value);
        }
    });
});
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
      extraPrice = CHECK;
  } else {
      extraPrice = EXTPRICE;
  }
});
calc.addEventListener("change", function () {
  let toCount = count[0].value;
  let flag1488 = toCount.match(/^\d+$/);
  if(flag1488 !== null){
    result.innerHTML=(price + extraPrice)*parseInt(count[0].value);
  }
  else{
      result.innerHTML = "Введите количество";
  }
});
});
