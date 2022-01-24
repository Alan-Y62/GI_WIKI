const audio = document.getElementById("the_audio");
audio.volume = 0.1;
let vol = false;
const sound = document.getElementById("volume_control");

sound.addEventListener("click", () => {
  if (vol) {
    audio.volume = 0;
    vol = !vol;
    sound.innerText = "OFF";
    sound.classList.remove("on");
  } else {
    audio.play();
    audio.volume = 0.5;
    vol = !vol;
    sound.innerText = "ON";
    sound.classList.add("on");
  }
});

function setVolume(value) {
  audio.volume = value / 100;
}
