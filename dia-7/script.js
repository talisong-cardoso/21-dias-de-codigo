const counterNumber = document.querySelector(".counter__number");
const counterPlayBtn = document.querySelector("#counter__btn-play");
const counterPauseBtn = document.querySelector("#counter__btn-pause");
const counterRestartBtn = document.querySelector("#counter__btn-restart");

const counter = new Counter();

counterPlayBtn.addEventListener("click", () => {
  counter.play();
  counterPlayBtn.classList.add("hidden");
  counterPauseBtn.classList.remove("hidden");
});
counterPauseBtn.addEventListener("click", () => {
  counter.pause();
  counterPlayBtn.classList.remove("hidden");
  counterPauseBtn.classList.add("hidden");
});
counterRestartBtn.addEventListener("click", () => {
  counter.restart();
  counterRestartBtn.classList.add("animate");
  setTimeout(() => {
    counterRestartBtn.classList.remove("animate");
  }, 2000);
});
