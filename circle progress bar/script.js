const halfCircles = document.querySelectorAll(".half-circle");
const halfCircleTop = document.querySelector(".half-circle-top");
const progressBarCircle = document.querySelector(".progressbar-circle");

document.addEventListener("scroll", () => {
  const pageViewPortHeight = window.innerHeight;
  const paheheight = document.documentElement.scrollHeight;
  const scrolledPortion = window.pageYOffset;

  const scroledPortionDegree =
    (scrolledPortion / (paheheight - pageViewPortHeight)) * 360;
  //   console.log(scroledPortionDegree);

  const scroelldPortionPercent = Math.floor((scroledPortionDegree / 360) * 100);
  progressBarCircle.textContent = `${scroelldPortionPercent}%`;
  halfCircles.forEach((el) => {
    el.style.transform = `rotate(${scroledPortionDegree}deg)`;

    if (scroledPortionDegree >= 180) {
      halfCircles[0].style.transform = `rotate(180deg)`;
      halfCircleTop.style.opacity = "0";
    }
    if (scroledPortionDegree < 180) {
      halfCircleTop.style.opacity = "1";
    }
  });
});
