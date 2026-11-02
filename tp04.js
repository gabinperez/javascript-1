let societe = {
    nom: "Google",
    siegeSocial: "Googleplex, Mountain View, California, United States",
    fondateurs: [
        { nom: "Larry Page",   naissance: "26/03/1973", lieu: "East Lansing, Michigan" },
        { nom: "Sergey Brin",  naissance: "21/08/1973", lieu: "Moscou, Union Soviétique" }
    ],
    chAffaire: [
        { annee: 2008, valeur: 16.49 },
        { annee: 2012, valeur: 37.97 },
        { annee: 2016, valeur: 89.46 },
        { annee: 2018, valeur: 136.2 }
    ]
};

console.log(`Nom : ${societe.nom}`);
console.log(`Siège social : ${societe.siegeSocial}`);

for (let i = 0; i < societe.fondateurs.length; i++) {
    console.log(`▪ ${societe.fondateurs[i].nom}, né le ${societe.fondateurs[i].naissance} à ${societe.fondateurs[i].lieu}`);
}

for (let i = 0; i < societe.chAffaire.length; i++) {
    console.log(`▪ ${societe.chAffaire[i].annee}, ${societe.chAffaire[i].valeur}`);
}