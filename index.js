const taille = document.getElementById("taille");
const poids = document.getElementById("poids");
const button = document.getElementById("button");
const resultat = document.getElementById("resultat");
const h3Element = document.getElementById("resultat");

button.addEventListener("click", () => {
  var poidsValue = poids.value;
  var tailleValue = taille.value;
  var tailleMetre = tailleValue / 100;

  var resultat = poidsValue / (tailleMetre * tailleMetre);

  var resultatArrondi = resultat.toFixed(1);

  h3Element.textContent = resultat.toFixed(1);
  h3Element.removeAttribute("hidden");
  h3Element.textContent = `Votre IMC est de ${resultatArrondi}`;
});
