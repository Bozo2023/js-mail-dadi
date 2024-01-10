
// Générer un nombre aléatoire entre 1 et 6 pour le joueur et l'ordinateur
let giocatore = Math.floor(Math.random() * 6) + 1;
let computer = Math.floor(Math.random() * 6) + 1;
let listEmail=["didier@yahoo.fr,rossi@hotmail.com,ulrich@gmail.com,ted@yahooo.it,eric@rokmail.com"];
const emailHtml=document.getElementById("email")
const ResultHtml=document.getElementById("enter")
// Déterminer le gagnant en fonction du nombre le plus élevé
if (giocatore > computer) {
  console.log("il vincitore è il giocatore con  " + giocatore+ " !");
} else if (giocatore < computer) {
  console.log("il vincitore è il computer con " + computer + " !");
} else {
  console.log("parità !");
}
ResultHtml.addEventListener("click",function(){
    
})
function controllaEmail(email) {
    return listaEmail.includes(email);
  }
