const hour = document.querySelector(".hour");
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");

let secAcc = 0;
const setDate = () => {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getHours = now.getHours();
  const getMinute = now.getMinutes();
  // (sec/60 * 360)  (min/60 * 360) (hour/24 * 720)
  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHours / 24) * 720;

  //transition: transform 1s linear;

  if (secondDegree >= 354) {
    second.style.transform = `rotate(${0}deg)`;
    second.style.transition = `none`;
  } else {
    second.style.transform = `rotate(${secondDegree}deg)`;
    second.style.transition = `transform 1s linear`;
  }
  console.log(secondDegree);
  hour.style.transform = `rotate(${hourDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
};

setInterval(setDate, 1000);
