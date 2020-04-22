const btnTime = document.querySelector("button.main");
const divC = document.querySelector(".color");
const panel = document.querySelector("div.time div");

let time = 0;
let active = false;
let idI;
let points = [];

const game = () => {
  let point = 1;
  points.push(point);

  if (points.length === 5) {
    clearInterval(idI);
  }
};

const timer = () => {
  clearInterval(idI);
  reset();
  idI = setInterval(start, 10);
};

const start = () => {
  time++;
  panel.textContent = (time / 100).toFixed(2);
};

const reset = () => {
  points = [];
  time = 0;
  panel.textContent = "---";
  active = false;
  clearInterval(idI);
};

btnTime.addEventListener("click", timer);
divC.addEventListener("click", game);
