const fs = require("fs");
const path = require("path");

const directoryPath = "./assets"; // Replace with the path to your music folder
const playlist = [];

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);

    // Check if the file has a supported audio file extension, e.g., .mp3
    if (file.endsWith(".mp3")) {
      playlist.push(filePath);
    }
  });

  console.log(playlist);
  // You can write the playlist array to a separate file or use it in your HTML as needed.
});

const audio = document.getElementById("musicPlayer");

let currentSongIndex = 0;

function playMusic() {
  audio.src = playlist[currentSongIndex];
  audio.play();
}

function pauseMusic() {
  audio.pause();
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  playMusic();
}

function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  playMusic();
}

audio.addEventListener("ended", () => {
  // Play the next song when the current one ends
  nextSong();
});
