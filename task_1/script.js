const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  return (seconds) => {
    let remainingTime = seconds * 1000;
    const timerInterval = setInterval(() => {
      if (!remainingTime) {
        clearInterval(timerInterval);
        timerEl.textContent = "hh:mm:ss";
        return;
      }
      remainingTime = remainingTime - 1000;
      let seconds = Math.floor((remainingTime / 1000) % 60).toString();
      let minutes = Math.floor((remainingTime / (1000 * 60)) % 60).toString();
      let hours = Math.floor(
        (remainingTime / (1000 * 60 * 60)) % 24
      ).toString();
      timerEl.textContent = `${hours.padStart(2, "0")}:${minutes.padStart(
        2,
        "0"
      )}:${seconds.padStart(2, "0")}`;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  if (isNaN(e.target.value)) e.target.value = e.target.value.slice(0, -1);
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});
