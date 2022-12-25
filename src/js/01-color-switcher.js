const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('button[data-start]');
const stoptBtnEl = document.querySelector('button[data-stop]');

startBtnEl.addEventListener('click', onClickStartBtn);
stoptBtnEl.addEventListener('click', onClickStoptBtn);

let timerId = null;

function onClickStartBtn() {
  startBtnEl.disabled = true;

  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onClickStoptBtn() {
  clearInterval(timerId);
  startBtnEl.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
