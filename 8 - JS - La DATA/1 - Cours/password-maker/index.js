// on s'est arrété à 2H45

const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = ",?;.:/!§%£$µ*";
const dpl = document.getElementById("display-password-length");
const passWordOutput = document.getElementById("password-output");
function generate() {
  let dataPass = [];
  let mdp = [];
  if (lowercase.checked) {
    dataPass += dataLowerCase;
  }
  if (uppercase.checked) {
    dataPass += dataUpperCase;
  }
  if (numbers.checked) {
    dataPass += dataNumbers;
  }
  if (symbols.checked) {
    dataPass += dataSymbols;
  }
  if (
    !lowercase.checked &&
    !uppercase.checked &&
    !numbers.checked &&
    !symbols.checked
  ) {
    alert("Veuillez sélectionner un critère");
    return;
  }

  for (i = 0; i < dpl.value; i++) {
    mdp += dataPass[Math.floor(Math.random() * dataPass.length)];
  }

  passWordOutput.value = mdp;
  passWordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Copié";

  setTimeout(() => {
    passWordOutput.value = "Générateur de MDP";
    generateButton.textContent = "Générer AUTRE mot de passe";
  }, 5000);

  //   console.log(dataPass);
  //   console.log(dpl.value);
  //   console.log(mdp);
  //   console.log(dataPass[Math.floor(Math.random() * dataPass.length)]);
}

generateButton.addEventListener("click", () => {
  generate();
});
