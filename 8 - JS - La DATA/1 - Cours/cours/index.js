// Rappel types de données
let string = "Chaine";
let number = 13;
let boolean = true;
let maViariable; // type Undifined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "Nodejs"],
  admin: false,
};
// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "Nodejs"],
    admin: false,
  },
  {
    pseudo: "Samina",
    age: 24,
    technos: ["CSS", "React", "Nodejs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["PHP", "React", "Nodejs"],
    admin: true,
  },
];
// console.log(data[2].age);

// --------------------------
// Les structures de controle
// --------------------------
if (data[0].age > data[1].age) {
  //   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // valeur si faux
}

//  While
let w = 0;
while (w < 10) {
  w++;
  //   console.log("La valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} ${
  //   user.age + " ans"
  // } maitrise :  ${user.technos}</li>`;
}
// on a dit 32:52 !! (push depuis le mac)

// on déclare la valeur de i | jusqu'ou on boucle |
for (i = 0; i < data.length; i++) {
  // document.body.innerHTML +=
  //   "<h2>" +
  //   data[i].pseudo +
  //   " " +
  //   data[i].age +
  //   " ans " +
  //   "Technos matrisées : " +
  //   data[i].technos +
  //   "</h2>";
}

//  le 25/05 on s'arrete à 43:25 | les switch case :)

// ********** EVEMENT AU CLICK ON CHANGE DE STYLE **************
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "php":
      document.body.style.background = "blue";
      console.log("php click");
      break;
    case "javascript":
      document.body.style.background = "yellow";
      console.log("java click");
      break;
    case "python":
      document.body.style.background = "purple";
      console.log("python click");
      break;
    case "dateBtn":
      console.log(dateDestructuring(iso));
      break;
    default:
      document.body.style.background = "none";
      console.log("click ailleur");
  }
});

//
//
// ---------
// Les dates
// ---------
//
//
console.log("------------- ICI COMMENCENT LES DATES ----------");
// Date classique :
let date = new Date();
console.log(date + " !!affiche la date stockée dans date!!");
// Timestamp :
let timestamp = Date.parse(date);
console.log(
  timestamp +
    " !!timestamp = affiche le temps écoulé depuis 1er janvier 1970 en milisecondes!!"
);

// IsoString :
console.log(date.toISOString() + " !!affiche la date au format européen!!");
let iso = date.toISOString();
console.log(
  iso +
    " !!affiche la date au format européen, mais stockée dans une variable!!"
);
//
//
// ---------------
// Le Destucturing
// ---------------
//
//
console.log("------------- ICI COMMENCE LE DESTRUCTURING ----------");

let moreData = {
  destVar: ["Element 1", "Element 2"],
};
console.log(
  moreData.destVar + " !!on affiche la valeur des objets moreData.destVar!!"
);
const { destVar } = moreData;
console.log(
  destVar +
    " !!on affiche la valeur des objets moreData.destVar, mais via un raccourcis!!"
);

let array5 = [70, 80, 90];
console.log(array5[0] + " on affiche le premier index de array5");
console.log(array5[1] + " on affiche le deuxième index de array5");
console.log(array5[2] + " on affiche le troisième index de array5");
let [x, y, z] = array5;
console.log(x + " on affiche le premier index de array5 mais en raccouris `x`");
console.log(
  y + " on affiche le deuxième index de array5 mais en raccourcis 'y'"
);
console.log(
  z + " on affiche le troisième index de array5 mais en raccourcis `z`"
);
console.log(iso);
const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
console.log(dateDestructuring(iso));
//
//
// --------------
//  Les Datasets
// --------------
//
//
console.log("------------ ICI COMMENCENT LES DATASETS -------------");
//  3h12
// L'idée est de rajouter des ID à la volée selon nos besoins
console.log("L'idée est de rajouter des ID à la volée selon nos besoins");
const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang);
const h3 = document.querySelectorAll("h3");

h3.forEach((language) => console.log(language.dataset));

//
//
// --------------
//  Les REGEX
// --------------
//
//
console.log("------------ ICI COMMENCENT LES REGEX -------------");
let mail = "from_scratch33@gmail.com";
console.log(mail.search(/@/));
//
//
//
// ------------
// ZONE DE TEST
// ------------
//
//
//
// console.log("++++++++++  ZONE DE TEST  +++++++++");
// console.log(iso);
// const TESTdateDestructuring = (chaine) => {
//   let newDate = chaine.split("T");
//   // [y, m, d] = newDate.split("-");
//   // return [d, m, y].join("/");
//   console.log(newDate);
// };
// TESTdateDestructuring(iso);
