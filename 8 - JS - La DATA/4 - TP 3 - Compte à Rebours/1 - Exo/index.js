// Créer la logique de compte à rebours
// // choice.value = 5 minutes


// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours
  
// const start = document.getElementById("start");
// const countdownDisplay = document.getElementById('countdownDisplay')
// start.addEventListener("click", (e) => {
//   e.preventDefault();
//   let totalSeconds = choice.value * 60;
//   let minutes = Math.floor(totalSeconds / 60);
//   let seconds = totalSeconds % 60;
//   let chrono = [minutes + " : " + seconds];
//   if (seconds = 0) {
//     minutes --
//     seconds = 59
//   }
// });
let seconds = 10
  countdownDisplay.textContent = seconds

const secondsEnMoins = () => {
  if (seconds >= 1) {
    setInterval(() => {
      seconds --;
      countdownDisplay.textContent = seconds;
    }, 1000)  
  }
  }
// secondsEnMoins();

const secondsEnMoins2 = () => {
    if (seconds > 0) {
      setInterval(() => {
        seconds --;
        countdownDisplay.textContent = seconds;
      }, 1000);
    } 
    if (seconds = 0) {
      seconds = 59;
    }
  }
secondsEnMoins2()

// il vaudrait mieux utiliser setTimeout() plutot
// que setInterval() et rappeler la fonction de --
// dans cette meme boucle