const circleProgress = document.querySelector(".progressbar");
const valueProgress = document.querySelector(".progressbar__value");

let progressStart = 0;
const progressEnd = 70;
const speed = 10;

const runProgress = setInterval(() => {
  progressStart++;

  valueProgress.textContent = `${progressStart}`;
  circleProgress.style.background = `conic-gradient(#33ff00
		${progressStart * 3.6}deg, #d0ffff 0deg)`;

  if (progressStart == progressEnd) {
    clearInterval(runProgress);
  }
}, speed);
