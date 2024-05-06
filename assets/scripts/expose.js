// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var hornImage = document.querySelector("img"); // select the <img> element
  var hornAudio = document.querySelector("audio"); // select the <audio> element

  document.getElementById("horn-select").addEventListener('change', function() {
      // get the selected value from dropdown
      var selectedHorn = this.value;
      console.log("Selected horn:", selectedHorn);

      // make path to svg image
      var imagePath = "./assets/images/" + selectedHorn + ".svg";
      var audioPath = "./assets/audio/" + selectedHorn + ".mp3";
      console.log("Image path:", imagePath);

      // update the src of the image
      hornImage.src = imagePath;
      hornAudio.src = audioPath;
  });

  var audioIcon = document.querySelector("#volume-controls img");

  document.getElementById("voloume-controls").addEventListener('change', function() {
    // get the volume
    var volumeValue = parseInt(this.value);
    this.volume = volumeValue;

    if (volumeValue == 0) {
      audioIcon.src = "./assets/icons/volume-level-0.svg";
    } else if (volumeValue >= 1 && volumeValue < 33 ) {
      audioIcon.src = "./assets/icons/volume-level-1.svg";
    } else if (volumeValue >= 33 && volumeValue < 67 ) {
      audioIcon.src = "./assets/icons/volume-level-2.svg";
    } else if (volumeValue >= 67) {
      audioIcon.src = "./assets/icons/volume-level-3.svg";
    } 
  });

  document.getElementById("button").addEventListener('click', function() {
    // get the horn
    var selectedHorn = hornSelect.value;

    // Set the audio source based on the selected horn
    audioElement.src = `./assets/audio/${selectedHorn}.mp3`;

    // Set the volume level of the audio element
    audioElement.volume = volumeRange.value / 100; // Convert range value to a decimal between 0 and 1

    // Play the audio
    audioElement.play();

    // Trigger confetti using the js-confetti library
    confetti();
  });

}