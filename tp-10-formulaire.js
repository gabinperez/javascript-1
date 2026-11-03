
const API = "https://digicode.cleverapps.io/utilisateurs";
const ID_CREATEUR = "Gabin";

const corpsTableau = document.getElementById("corpsTableau");

// Références pour le formulaire
const modaleForm = document.getElementById("modaleForm");
const formUtilisateur = document.getElementById("formUtilisateur");
const messageErreur = document.getElementById("messageErreur");


let idASupprimer = null;

async function chargerUtilisateurs() {
  const reponse = await fetch(`${API}/${ID_CREATEUR}`);
  const utilisateurs = await reponse.json();
  console.log("Utilisateurs reçus :", utilisateurs);

  corpsTableau.innerHTML = "";

  let html = "";
  for (const u of utilisateurs) {
    const adresse = `${u.numeroRue} ${u.libelleRue}, ${u.codePostal} ${u.ville}`;
    html += `
      <tr>
        <td>${u.id}</td>
        <td>${u.nom}</td>
        <td>${u.prenom}</td>
        <td>${u.dateNaissance}</td>
        <td>${u.lieuNaissance}</td>
        <td>${adresse}</td>
        <td><button class="btn-suppr" data-id="${u.id}">🗑️</button></td>
      </tr>
    `;
  }
  corpsTableau.innerHTML = html;

  document.querySelectorAll(".btn-suppr").forEach((btn) => {
    btn.addEventListener("click", () => {
      ouvrirModaleSuppr(Number(btn.dataset.id));
    });
  });
}

function ouvrirModaleSuppr(id) {
  idASupprimer = id;
  document.getElementById("modaleSuppr").classList.remove("cache");
}



document.getElementById("btnConfirmerSuppr").addEventListener("click", async () => {
  const reponse = await fetch(`${API}/${ID_CREATEUR}/${idASupprimer}`, {
    method: "DELETE",
  });

  if (reponse.ok) {
    document.getElementById("modaleSuppr").classList.add("cache");
    idASupprimer = null;
    chargerUtilisateurs();
  } else {
    console.error("Erreur lors de la suppression");
  }
});


document.getElementById("btnAnnulerSuppr").addEventListener("click", () => {
  document.getElementById("modaleSuppr").classList.add("cache");
  idASupprimer = null;
});


document.getElementById("btnAjouter").addEventListener("click", () => {
  modaleForm.classList.remove("cache");
});


document.getElementById("btnAnnuler").addEventListener("click", () => {
  modaleForm.classList.add("cache");
  formUtilisateur.reset();
  messageErreur.textContent = "";
});


formUtilisateur.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(formUtilisateur);
  const utilisateur = Object.fromEntries(formData);

  utilisateur.id = null;
  utilisateur.idCreateur = ID_CREATEUR;
  utilisateur.dateMaj = null;

  console.log("Envoi :", utilisateur);

  const reponse = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(utilisateur),
  });

  if (reponse.ok) {
    modaleForm.classList.add("cache");
    formUtilisateur.reset();
    messageErreur.textContent = "";
    chargerUtilisateurs();
}else {
    const texte = await reponse.text();
    console.log("Erreur serveur :", texte);
    messageErreur.textContent = texte;
  }
});


chargerUtilisateurs();