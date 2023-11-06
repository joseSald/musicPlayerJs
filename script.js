let progress = document.getElementById('progress');
let song = document.getElementById('current-song');
let controlIconPlay = document.getElementById('control-icon-play');

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.valu = song.currentTime;
};

function playPause() {
  if (controlIconPlay.classList.contains('fa-pause')) {
    song.pause();
    controlIconPlay.classList.remove('fa-pause');
    controlIconPlay.classList.add('fa-play');
  } else {
    song.play();
    controlIconPlay.classList.add('fa-pause');
    controlIconPlay.classList.remove('fa-play');
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  controlIconPlay.classList.add('fa-pause');
  controlIconPlay.classList.remove('fa-play');
};
