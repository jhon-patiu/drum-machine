window.addEventListener("keydown", playSound);

// color fx array
const colors = ["clr-1", "clr-2", "clr-3", "clr-4", "clr-5", "clr-6"];
const random = Math.floor(Math.random() * colors.length + 1);

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");

  if (key.dataset.key === "81" || key.dataset.key === "68") {
    key.classList.add(colors[0]);
  } else if (key.dataset.key === "87" || key.dataset.key === "70") {
    key.classList.add(colors[1]);
  } else if (key.dataset.key === "69" || key.dataset.key === "90") {
    key.classList.add(colors[2]);
  } else if (key.dataset.key === "82" || key.dataset.key === "88") {
    key.classList.add(colors[3]);
  } else if (key.dataset.key === "65" || key.dataset.key === "67") {
    key.classList.add(colors[4]);
  } else if (key.dataset.key === "83" || key.dataset.key === "86") {
    key.classList.add(colors[5]);
  }

  audio.currentTime = 0;
  audio.play();
}

// remove fx after transition
function removeEffect(event) {
  event.target.classList.remove(
    "playing",
    "clr-1",
    "clr-2",
    "clr-3",
    "clr-4",
    "clr-5",
    "clr-6"
  );
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeEffect));
