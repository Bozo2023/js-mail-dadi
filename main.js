
// Générer un nombre aléatoire entre 1 et 6 pour le joueur et l'ordinateur
let giocatore = Math.floor(Math.random() * 6) + 1;
let computer = Math.floor(Math.random() * 6) + 1;

// Déterminer le gagnant en fonction du nombre le plus élevé
if (giocatore > computer) {
  console.log("il vincitore è il giocatore con  " + giocatore+ " !");
} else if (giocatore < computer) {
  console.log("il vincitore è il computer con " + computer + " !");
} else {
  console.log("parità !");
}