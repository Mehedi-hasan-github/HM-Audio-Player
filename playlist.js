const fs = require("fs");
const path = require("path");

const directoryPath = "./assets";
let playlist = [];

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);

    if (path.extname(file) === ".mp3") {
      playlist.push(filePath);
    }
  });

  console.log(playlist);
});

export default playlist;
