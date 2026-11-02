const bouton = document.querySelector("#calculer");

bouton.addEventListener("click", function () {
     const champA = document.querySelector("#a");
    const champB = document.querySelector("#b");
    const champOp = document.querySelector("#op");
    const zone = document.querySelector("#resultat");



    const a = Number(champA.value);
    const b = Number(champB.value);
    const op = champOp.value;       
      

       if (Number.isNaN(a) || Number.isNaN(b)) {
        zone.textContent = "Vous devez saisir un nombre";
        zone.className = "erreur";

   } else if (op === "+") {
        zone.textContent = "Le résultat de l'addition est : " + (a + b);
        zone.className = "";

      } else if (op === "-") {
        zone.textContent = "Le résultat de la soustraction est : " + (a - b);
        zone.className = "";

         } else if (op === "*") {
        zone.textContent = "Le résultat de la multiplication est : " + (a * b);
        zone.className = "";
    
     } else if (op === "/") {
      zone.textContent = "Le résultat de la division est : " + (a / b);
      zone.className = "";
    }
});