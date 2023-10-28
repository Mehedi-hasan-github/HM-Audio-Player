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
  
let currentSongIndex = 6;
audio.src = songs[currentSongIndex];
document.getElementById('audioTitle').innerText=songs[currentSongIndex]
console.log(currentSongIndex);




function ctrlButton() {
  if (audio.paused) {
    playPause.classList.remove('fa-play')
    playPause.classList.add('fa-pause')
    imageGallary.classList.add("imageSpiner");
    audio.play()
  } else if(audio.played) {
    playPause.classList.remove('fa-pause')
    playPause.classList.add('fa-play')
    imageGallary.classList.remove("imageSpiner");
    audio.pause();
 }
  }
  
  // playing mood functionality//
  function playingMood() {
    if (moods.classList.contains("fa-repeat")) {
       /// .....for the random moode song will play auto randomly.... ///
        audio.onended = function () {
        const randomOrder = parseInt(Math.random() * songs.length)
        audio.src = songs[currentSongIndex=randomOrder];
        console.log(randomOrder);
      }
      audio.loop = false;
      moods.classList.remove("fa-repeat");
      moods.classList.add("fa-shuffle");
    } else if (moods.classList.contains("fa-shuffle")) {
      audio.loop = true;
      moods.classList.remove("fa-shuffle");
      moods.classList.add("fa-rotate-right");
    } else if (moods.classList.contains("fa-rotate-right")) {
      audio.loop = false;
      moods.classList.remove("fa-rotate-right");
      moods.classList.add("fa-repeat");
  }
}

// lext or right button for change music//
function handleNextBtn() {
  songIndex = (currentSongIndex + 1) % songs.length;
  audio.src = songs[currentSongIndex = songIndex];
  document.getElementById('audioTitle').innerText=songs[currentSongIndex]
  console.log(currentSongIndex);
  if (playPause.classList.contains("fa-play")) {
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
    audio.play();
  }
}

// previous or left button for back music//
function handlePreBtn() {
  songIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  audio.src = songs[currentSongIndex = songIndex];
  document.getElementById('audioTitle').innerText=songs[currentSongIndex]
  if (playPause.classList.contains("fa-play")) {
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
  }
}


//  progress bar handling functionality//
audio.onloadedmetadata = function () {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
  
  if (audio.play()) {
    setInterval(() => {
      progress.value = audio.currentTime;
    },400);
  }
};
progress.onchange = function () {
  audio.pause()
  audio.currentTime = progress.value;
  playPause.classList.add("fa-play");
};


///// for sequence mode music will auto start after ending previous song /////// 
audio.onended = function () {
  handleNextBtn()
  document.getElementById('audioTitle').innerText=songs[currentSongIndex]
}

// ......for the single loop functionality..... //

  // if (moods.classList.contains('looping')) {
  //  moods.setAttribute('mood','true')
  // }  
