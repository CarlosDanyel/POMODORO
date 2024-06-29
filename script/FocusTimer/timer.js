import * as el from "./elements.js";
import { kichenTimer } from "./sound.js";
import state from "./state.js";

export function countDown() {
  clearTimeout(state.countDownID);

  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < -0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    kichenTimer.play();
    return;
  }

  updateDisplay(minutes, seconds);

  state.countDownID = setTimeout(() => countDown(), 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;
  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}

export function StatePluss() {
  let currentMinutes = Number(el.minutes.textContent);
  currentMinutes += 5;
  el.minutes.textContent = String(currentMinutes).padStart(2, "0");
}

export function StateMenus() {
  let currentMinutes = Number(el.minutes.textContent);
  currentMinutes -= 5;
  if (currentMinutes < 0) {
    currentMinutes = 0;
  }
  el.minutes.textContent = String(currentMinutes).padStart(2, "0");
}
