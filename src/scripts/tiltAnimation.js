//import VanillaTilt from "vanilla-tilt";
import VanillaTilt from "https://cdn.jsdelivr.net/npm/vanilla-tilt@1.8.0/src/vanilla-tilt.js";

export default function initTiltAnimation() {
  const elements = document.querySelectorAll(".js-tilt");
  VanillaTilt.init(elements);
}
