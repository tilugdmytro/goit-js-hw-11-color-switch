const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorPicker() {
  refs.body.style.background =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

let switchId = null;

function onStartClick() {
  switchId = setInterval(colorPicker, 1000);
  refs.startBtn.disabled = true;
}

function onStopClick() {
  clearInterval(switchId);
  refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener("click", onStartClick);
refs.stopBtn.addEventListener("click", onStopClick);
