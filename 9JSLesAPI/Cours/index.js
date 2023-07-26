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

// fetch("data.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

// fetch("data.json") //demande de chercher data.json
//   .then((res) => res.json()) //transforme ce qui est trouvé en texte
//   .then((data) => console.log(data)); //affiche le texte dans la console

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "MatCout",
    message: "yo les gens!",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/post", init2).then(() =>
    console.log("data envoyées")
  );
});

//-----------
// Asynchrone
//-----------
console.log("ici la partie sur l Asynchrone");

// setTimeout biensûr
setTimeout(() => {
  // console.log("test");
}, 2000);

// Promise
fetch("mon lien").then((res) => res);

// async/await
async function fetchData() {
  await fetch("mon lien");
  // attend que le await soit exécuté avant de faire la suite

  await executefunction();
  await console.log("coucou t a attendu");
  await console.log("coucou t a attendu");
}
// avec une fonction fléchée:
const fetchData2 = async () => {
  await fetch("mon lien");
  // attend que le await soit exécuté avant de faire la suite

  await executefunction();
  await console.log("coucou t a attendu");
  await console.log("coucou t a attendu");
};
