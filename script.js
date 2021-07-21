let time = document.getElementById("digital");
let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

function clock() {
  let date = new Date();
  let pointerH = (date.getHours()-12) ;
  let pointerM = (date.getMinutes()*5);
  let pointerS = (date.getSeconds()*6);
  hours.style.transform = `rotate(calc(${pointerH}deg + 90deg))`;
  minutes.style.transform = `rotate(calc(${pointerM}deg - 82deg))`
  seconds.style.transform = `rotate(calc(${pointerS}deg - 90deg))`;

  time.innerHTML = date.toLocaleTimeString("pt-BR", true);
  console.log(date.getHours())
}
setInterval(clock, 1000);

