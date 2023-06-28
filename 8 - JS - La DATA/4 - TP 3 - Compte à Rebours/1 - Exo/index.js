// Créer la logique de compte à rebours
// // choice.value = 5 minutes


// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours
  


//------------ Block de départ -------
// const countdownDisplay = document.getElementById('countdownDisplay')
// const start = document.getElementById("start");
// start.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     let totalSeconds = choice.value * 60;
  //     let minutes = Math.floor(totalSeconds / 60);
  //     let seconds = totalSeconds % 60;
  //     let chrono = ["Temps restant : " + minutes + " : " + seconds];
  //     console.log(totalSeconds, minutes, seconds, chrono);
  //   }
  //   );
  
  // let chrono = 0  
  // countdownDisplay.textContent = chrono
  
  // const chronoChange = () => {
    //   chrono = 34
    // }
    // chronoChange()
    //------------ Block de départ -------
    
// -----------Test compte secondes--------
console.log('ici on vient tester le compte à rebours des secondes');
const countdownDisplay = document.getElementById('countdownDisplay');
const chrono = document.createElement('span');
const body = document.querySelector('body')
countdownDisplay.appendChild(chrono)

let seconds = 10
console.log(seconds);

const moinsSeconds = () => {
  seconds --,
  console.log(seconds);
}



const plusSeconds = () => {
  seconds ++;
  console.log(seconds);
}
// body.addEventListener('click', ()=> {
//  if (seconds > 1) {
//   moinsSeconds();
//   console.log("cliké");
// } else {
//   alert('vous etes à zéro!')
// } 
// })
body.addEventListener('click', ()=> {
  setInterval((i) => {
    if (seconds > 1) {
     moinsSeconds();
     console.log("cliké");
   } else {
     alert('vous etes à zéro!'),
    clearInterval(i)
   } 
   },1000)
},)