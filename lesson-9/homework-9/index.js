import { KEY_MAP, COLORS, SOUNDS } from "./constants.js";

const pads = document.querySelectorAll(".pad");
const visual = document.querySelector(".visual");

const animatePad = (pads, index) => {
  const pad = pads[index];
  pad.style.animation = 'dance 0.1s';
  pad.addEventListener('animationend', () => {
    pad.style.animation = 'none';
  })
};

const animateBubble = (colors, index) => {
  const bubble = document.createElement("div");
  visual.appendChild(bubble);
  bubble.style.backgroundColor = colors[index];
  bubble.style.animation = 'jump 0.1s linear';
  bubble.addEventListener('animationend', () => {
    visual.removeChild(bubble);
  })
}

const playSound = (sounds, index) => {
  const sound = sounds[index];
  const audio = new Audio(sound);
  audio.load();
  audio.play();
};

const keyPressHandler = (evt) => {
  switch (evt.key) {
    case KEY_MAP.kick:
      playSound(SOUNDS, 0);
      animatePad(pads, 0);
      animateBubble(COLORS, 0);
      break;
    case KEY_MAP.cymbal:
      playSound(SOUNDS, 1);
      animatePad(pads, 1);
      animateBubble(COLORS, 1);
      break;
    case KEY_MAP.snare:
      playSound(SOUNDS, 2);
      animatePad(pads, 2);
      animateBubble(COLORS, 2);
      break;
    case KEY_MAP.openHat:
      playSound(SOUNDS, 3);
      animatePad(pads, 3);
      animateBubble(COLORS, 3);
      break;
    case KEY_MAP.longCrash:
      playSound(SOUNDS, 4);
      animatePad(pads, 4);
      animateBubble(COLORS, 4);
      break;
    case KEY_MAP.hitHat:
      playSound(SOUNDS, 5);
      animatePad(pads, 5);
      animateBubble(COLORS, 5);
      break;

    default:
      console.error("Error!!! Wrong a key");
      break;
  }
};

document.addEventListener("keypress", keyPressHandler);