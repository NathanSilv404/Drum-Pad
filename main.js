window.addEventListener('keydown', playSound);



function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'box-shadow') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', () => playSound(key)));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));










function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}




let startButton = document.getElementById("myButton");
startButton.addEventListener("click", beatBox);

function beatBox() {
  function simulateKey(keyCode) {
      
      let event = new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          keyCode: keyCode
      });
      
      document.dispatchEvent(event);
  }

  function playBeat(keyCode, time) {
      return new Promise((resolve) => {
          setTimeout(() => {
              simulateKey(keyCode);
              resolve();
          }, time);
      });
  }


  playBeat(81, "300") 
  .then(() => playBeat(81, "250"))
  .then(() => playBeat(81, "250"))
  .then(() => playBeat(68, "400"))
  .then(() => playBeat(68, "250"))
  .then(() => playBeat(68, "250"))
  .then(() => playBeat(65, "250"))
  .then(() => playBeat(65, "250"))
  .then(() => playBeat(65, "250"))
  .then(() => playBeat(65, "500"))
  .then(() => playBeat(65, "200"))
  .then(() => playBeat(90, "400"))
  .then(() => playBeat(90, "250"))
  .then(() => playBeat(90, "250"))
  .then(() => playBeat(69, "400"))
  .then(() => playBeat(69, "250"))
  .then(() => playBeat(69, "250"))
  .then(() => playBeat(83, "400"))
  .then(() => playBeat(83, "400"))
  .then(() => playBeat(83, "250"))
  .then(() => playBeat(83, "500"))
  .then(() => playBeat(83, "250"))
  .then(() => playBeat(67, "400"));

}
