import * as actions from "./actions.js";
import { controls } from "./elements.js";

export function registerControls() {
  controls.addEventListener("click", (e) => {
    const action = e.target.dataset.actions;
    e.target.classList.toggle("on");
    if (typeof actions[action] !== "function") {
      return;
    }
    actions[action]();
  });
}
