const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const numbers = document.querySelectorAll(".number");

function setDate() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourDegrees = (hour / 12) * 360 + 90;
  const minuteDegrees = (minute / 60) * 360 + 90;
  const secondDegrees = (second / 60) * 360 + 90;

  if (secondDegrees === 90) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "all 0.05s";
  }

  if (minuteDegrees === 90) {
    minuteHand.style.transition = "none";
  } else {
    minuteHand.style.transition = "all 0.05s";
  }

  if (hourDegrees === 90) {
    hourHand.style.transition = "none";
  } else {
    hourHand.style.transition = "all 0.05s";
  }

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(() => {
  setDate();
}, 1000);
