// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  function retreive_voices() {
    let voiceList = [];
    return new Promise((resolve, reject) => {
      let timer = setInterval(() => {
        if (voiceList.length == 0) voiceList = speechSynthesis.getVoices();
        else {
          clearInterval(timer);
          resolve(voiceList);
        }
      }, 10);
    })
  }

  const select = document.getElementById('voice-select');
  const faceImage = document.getElementsByTagName('img')[0];
  const voiceObjects = {};
  const voicePromise = retreive_voices();
  voicePromise.then((voiceList) => {
    const frag = document.createDocumentFragment();

    for(let i = 0; i < voiceList.length; i++) {
      let option = document.createElement('option');
      option.value = voiceList[i].name;
      option.innerText = voiceList[i].name;
      voiceObjects[voiceList[i].name] = voiceList[i];
      frag.appendChild(option);
    }

    select.appendChild(frag);

    document.getElementsByTagName('button')[0].onclick = (e) => {
      const utter = new SpeechSynthesisUtterance();
      utter.voice = voiceObjects[select.value];
      utter.text = document.getElementById('text-to-speak').value;
      speechSynthesis.speak(utter);
      utter.onstart = () => {
        faceImage.src = 'assets/images/smiling-open.png';
      }
      utter.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
      }
    }
  });
}