import * as audios from "./sound.js";
import state from "./state.js";
import * as timer from "./timer.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
  audios.buttonPressAudio.play();
}

export function mais() {
  timer.StatePluss();
}

export function reset() {
  state.isRunning = false;
  timer.updateDisplay();

  audios.buttonPressAudio.play();
}

export function menos() {
  timer.StateMenus();
  audios.buttonPressAudio.play();
}

export function floresta(e) {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    audios.floresta.play();
    return;
  } else {
    audios.floresta.pause();
  }
}

export function chuva() {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    audios.chuva.play();
    return;
  } else {
    audios.chuva.pause();
  }
}

export function mercado() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  if (state.isMute) {
    audios.cafeteria.play();
    return;
  } else {
    audios.cafeteria.pause();
  }
}

export function fire() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  if (state.isMute) {
    audios.lareira.play();
    return;
  } else {
    audios.lareira.pause();
  }
}
