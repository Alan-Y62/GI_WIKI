const audio = document.getElementById("the_audio");
audio.volume = 0.1;
let vol = false;
const sound = document.getElementById("volume-control");

sound.addEventListener("click", () => {
  if (vol) {
    audio.volume = 0;
    vol = !vol;
    sound.innerText = "OFF";
    sound.classList.remove("on");
  } else {
    audio.play();
    audio.volume = 0.2;
    vol = !vol;
    sound.innerText = "ON";
    sound.classList.add("on");
  }
});

function setVolume(value) {
  audio.volume = value / 100;
  if(!vol){
    audio.play();
    vol = !vol;
    sound.innerText = "ON";
    sound.classList.add("on");
  }
}
