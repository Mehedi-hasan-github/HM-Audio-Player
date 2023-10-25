const songs = [
  "assets\\a-long-way-166385.mp3",
  "assets\\background-music-for-new-year-and-christmas-videos-deck-the-halls-172532.mp3",
  "assets\\carol-of-the-bells-background-christmas-music-for-short-video-vlog-171734.mp3",
  "assets\\carol-of-the-bells-hip-hop-version-christmas-music-for-video-vlog-171731.mp3",
  "assets\\futuristic-beat-146661.mp3",
  "assets\\glossy-168156.mp3",
  "assets\\inside-you-162760.mp3",
  "assets\\lifelike-126735.mp3",
  "assets\\piano-moment-9835.mp3",
  "assets\\relaxed-vlog-night-street-131746.mp3",
  "assets\\sunshine-jaunt-163686.mp3",
  "assets\\the-best-jazz-club-in-new-orleans-164472 (1).mp3",
  "assets\\the-best-jazz-club-in-new-orleans-164472.mp3",
  "assets\\unlimited-motivation-background-vlog-music-158250.mp3",
  "assets\\waterfall-140894.mp3",
  "assets\\whistle-vibes-172471.mp3",
];

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const playPause = document.getElementById("playPause");
const imageGallary = document.getElementById("glrImage");
const moods = document.getElementById("moods");
const previous = document.getElementById("previousBtn");
const next = document.getElementById("nextBtn");

let currentSongIndex = 0;
function playMusic() {
  audio.src = songs[currentSongIndex];
  audio.play();
}

function ctrlButton() {
  if (playPause.classList.contains("fa-play")) {
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
    imageGallary.classList.add("imageSpiner");
    // audio.play();
    playMusic();
  } else {
    playPause.classList.remove("fa-pause");
    playPause.classList.add("fa-play");
    imageGallary.classList.remove("imageSpiner");
    audio.pause();
  }
}

// playing mood functionality//
function playingMood() {
  if (moods.classList.contains("fa-repeat")) {
    moods.classList.remove("fa-repeat");
    moods.classList.add("fa-shuffle");
  } else if (moods.classList.contains("fa-shuffle")) {
    moods.classList.remove("fa-shuffle");
    moods.classList.add("fa-rotate-right");
  } else if (moods.classList.contains("fa-rotate-right")) {
    moods.classList.remove("fa-rotate-right");
    moods.classList.add("fa-repeat");
  }
}

// lext or right button for change music//
function handleNextBtn() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  console.log(currentSongIndex);
  if (playPause.classList.contains("fa-play")) {
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
  }
  playMusic();
}

// previous or left button for back music//
function handlePreBtn() {}

songs.forEach((song) => {
  // console.log(song);
});
