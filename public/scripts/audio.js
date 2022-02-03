const audio = document.getElementById("the_audio");
audio.volume = 0.2;
let vol = false;
const sound = document.getElementById("volume-control");

sound.addEventListener("click", () => {
  if (vol) {
    audio.pause();
    vol = !vol;
    sound.classList.add("on");
  } else {
    audio.play();
    vol = !vol;
    sound.classList.remove("on");
  }
});

function setVolume(value) {
  audio.volume = value / 100;
  if(!vol){
    audio.play();
    vol = !vol;
    sound.innerText = "♪";
    sound.classList.add("on");
  }
}
