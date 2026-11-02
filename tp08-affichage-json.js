let data = {"polluant":"CO2",
"unite":"milliards de tonnes",
"annee":2017,
"pays":[{"nom":"Chine", "valeur":9.26, "pourcentage":28.2, "code":"cn"},
 {"nom":"Etats-Unis", "valeur":4.76, "pourcentage":14.5, "code":"us"},
 {"nom":"Inde", "valeur":2.16, "pourcentage":6.6, "code":"in"},
 {"nom":"Russie", "valeur":1.54, "pourcentage":4.7, "code":"ru"},
 {"nom":"Japon", "valeur":1.13, "pourcentage":3.4, "code":"jp"},
 {"nom":"Allemagne", "valeur":0.72, "pourcentage":2.2, "code":"de"},
 {"nom":"Corée du Sud", "valeur":0.6, "pourcentage":1.8, "code":"kr"},
 {"nom":"Iran", "valeur":0.57, "pourcentage":1.7, "code":"ir"},
 {"nom":"Canada", "valeur":0.55, "pourcentage":1.7, "code":"ca"}]}

function initialiserDonnees() {

    document.querySelector("#titre").textContent = data.polluant + " (" + data.unite + ")";
    document.querySelector("#annee").textContent = data.annee;

    let texte = "";
for (let i = 0; i < data.pays.length; i++) {
        texte += data.pays[i].nom + " - " + data.pays[i].valeur + " " + data.unite
              + " (" + data.pays[i].pourcentage + " %) - " + data.pays[i].code + "<br>";
    }

    document.querySelector("#listePays").innerHTML = texte;
}