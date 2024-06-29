import * as el from "./elements.js";
import * as audios from "./sound.js";
import state from "./state.js";
import * as timer from "./timer.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
  audios.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  timer.updateDisplay();
  audios.buttonPressAudio.play();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    audios.bgAudio.play();
    return;
  } else {
    audios.bgAudio.pause();
  }
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}
