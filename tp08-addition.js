const bouton = document.querySelector("#calculer");

bouton.addEventListener("click", function () {
    const champA = document.querySelector("#a");
    const champB = document.querySelector("#b");
    const zone = document.querySelector("#resultat");

    const a = Number(champA.value);   // <- trois niveaux, pas un
    const b = Number(champB.value);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        zone.textContent = "Vous devez saisir un nombre";
        zone.className = "erreur";
    } else {
        zone.textContent = "Le résultat de l'addition est : " + (a + b);
           zone.className = "";
    }
}); 