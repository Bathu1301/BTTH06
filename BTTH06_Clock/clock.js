
let hourHand1 = document.querySelector("#hour1");
let hourHand2 = document.querySelector("#hour2");
let minuteHand1 = document.querySelector("#minute1");
let minuteHand2 = document.querySelector("#minute2");
let secondHand1 = document.querySelector("#second1");
let secondHand2 = document.querySelector("#second2");
let greating = document.querySelector(".clock-greating");
let clock = document.querySelector(".clock-time");

let setTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hourHand1.src = `img/0${Math.floor(hours / 10)}.gif`;
  hourHand2.src = `img/0${hours % 10}.gif`;

  minuteHand1.src = `img/0${Math.floor(minutes / 10)}.gif`;
  minuteHand2.src = `img/0${minutes % 10}.gif`;

  secondHand1.src = `img/0${Math.floor(seconds / 10)}.gif`;
  secondHand2.src = `img/0${seconds % 10}.gif`;
  
  if (hours >= 0 && hours < 12) {
    greating.textContent = "Chào buổi sáng";
  } else if (hours >= 12 && hours < 17) {
    greating.textContent = "Chào buổi chiều";
  } else {
    greating.textContent = "Chào buổi tối";
}

};
clock.addEventListener("click", (e) => {
  greating.classList.add("blink");
});
greating.addEventListener("click", (e) => {
  e.target.classList.add("blink");
});
window.onload = () => {
  setInterval(setTime, 1000);
};
