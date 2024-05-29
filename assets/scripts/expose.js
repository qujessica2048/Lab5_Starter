// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var hornImage = document.querySelector("img"); // select the <img> element
  var hornAudio = document.querySelector("audio"); // select the <audio> element
  var selectedHorn = document.getElementById("horn-select");

  selectedHorn.addEventListener('change', function() {
      // get the selected value from dropdown
      selectedHorn = this.value;

      // make path to svg image
      var imagePath = "./assets/images/" + selectedHorn + ".svg";
      var audioPath = "./assets/audio/" + selectedHorn + ".mp3";

      // update the src of the image
      hornImage.src = imagePath;
      hornAudio.src = audioPath;
  });

  var audioIcon = document.querySelector("#volume-controls img"); // select the audio icon

  document.getElementById("volume").addEventListener('input', function() {
    // get the volume
    var volumeValue = parseInt(this.value);

    // conditionals for icon
    if (volumeValue == 0) {
      audioIcon.src = "./assets/icons/volume-level-0.svg";
    } else if (volumeValue < 33 ) {
      audioIcon.src = "./assets/icons/volume-level-1.svg";
    } else if (volumeValue < 67 ) {
      audioIcon.src = "./assets/icons/volume-level-2.svg";
    } else {
      audioIcon.src = "./assets/icons/volume-level-3.svg";
    } 

    // make volume between 0 and 1
    hornAudio.volume = volumeValue / 100;

  });

  var playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti()
  playButton.addEventListener('click', function() {
    // play the audio
    hornAudio.play();

    // trigger confetti using the js-confetti library
    if(selectedHorn == 'party-horn') {
      jsConfetti.addConfetti()
    }
  });

} 