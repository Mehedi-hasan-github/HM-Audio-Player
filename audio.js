const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const playPause = document.getElementById("playPause");
const imageGallary = document.getElementById("glrImage");

function ctrlButton() {
  if (playPause.classList.contains("fa-play")) {
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
    imageGallary.classList.add("imageSpiner");
    audio.play();
  } else {
    playPause.classList.remove("fa-pause");
    playPause.classList.add("fa-play");
    imageGallary.classList.remove("imageSpiner");
    audio.pause();
  }
}
