const URL_API = "https://digicode.cleverapps.io/json/pays/pollution";

let donnees = null;

document.addEventListener("DOMContentLoaded", () => {
    chargerDonnees();

    document.getElementById("valider").addEventListener("click", appliquerFiltre);
});


function chargerDonnees() {
    fetch(URL_API)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            donnees = data;
            
        })
        .catch(err => {
            console.error("Erreur de chargement :", err);
            document.getElementById("tbody").innerHTML =
                `<tr><td colspan="4" style="text-align:center;color:red;">
                    Erreur lors du chargement des données.
                </td></tr>`;
        });
}


/**

  @param {Array} pays - Liste des pays à afficher.
 */
function afficherResultats(pays) {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    if (pays.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">
            Aucun pays ne correspond aux critères.
        </td></tr>`;
        return;
    }

    pays.forEach(p => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${p.nom}</td>
            <td>${p.valeur}</td>
            <td>${p.pourcentage} %</td>
            <td>${p.code.toUpperCase()}</td>
        `;
        tbody.appendChild(tr);
    });
}


function appliquerFiltre() {
    if (!donnees) {
        console.warn("Données non encore chargées.");
        return;
    }

    const minInput = document.getElementById("min").value;
    const maxInput = document.getElementById("max").value;

    const min = minInput === "" ? 0 : Number(minInput);

  
    const max = maxInput === "" ? Number.MAX_VALUE : Number(maxInput);

  
    if (isNaN(min) || isNaN(max)) {
        alert("Veuillez saisir des nombres valides.");
        return;
    }

    
    if (min < 0 || max < 0) {
        alert("Veuillez saisir des valeurs positives.");
        return;
    }

   
    if (min > max) {
        alert("Le MIN doit être inférieur ou égal au MAX. Veuillez saisir des nombres cohérents.");
        return;
    }

   
    const resultats = donnees.pays.filter(p => p.valeur >= min && p.valeur <= max);

  
    afficherResultats(resultats);

    

}