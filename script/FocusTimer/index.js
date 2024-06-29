import * as e from "./events.js";
import state from "./state.js";
import * as timer from "./timer.js";

export function star(min, seg) {
  state.minutes = min;
  state.seconds = seg;
  timer.updateDisplay();

  e.registerControls();
}
