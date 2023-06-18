// Créer la logique de compte à rebours

// // choice.value = 5 minutes

// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours

const start = document.getElementById("start");
console.log(start);
start.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("le btn");
  let totalSeconds = choice.value * 60;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  console.log(totalSeconds);
  console.log(minutes);
  console.log(seconds);
});
