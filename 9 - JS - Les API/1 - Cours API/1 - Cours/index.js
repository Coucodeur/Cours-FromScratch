// XMLHttpRequest

function reqListener() {
  //   console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();
//
//------
//FETCH
//-------
//
console.log("ici la methode FETCH");

fetch("data.txt")
  .then((res) => res.text())
  .then((data) => console.log(data));

fetch("data.json") //demande de chercher data.json
  .then((res) => res.json()) //transforme ce qui est trouvé en texte
  .then((data) => console.log(data)); //affiche le texte dans la console
