function nombreConstant() {
    return 33
}
console.log(nombreConstant());  // Ne prend pas de paramètre et retourne le nombre 33.

console.log("FIN EXO1");



function numero2(Marcel) {
    return "Bonjour " + Marcel;
}

console.log(numero2("Marcel")); // Retourne Bonjour Marcel.

console.log("FIN EXO2");  


let a = 5
let b = 10
function numero3(a, b) {
    return a * b + a + b;
}

console.log(numero3(a, b)); // Retourne le calcul de "a * b + a + b" // 65 


console.log("FIN EXO3");  



function moyenne(tableau) {
    if (!Array.isArray(tableau)) {
        return "Erreur : le paramètre n'est pas un nombre.";
    }

    if (tableau.length === 0) {
        return 0;
    }

    let somme = 0;

    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] !== "number" || Number.isNaN(tableau[i])) {
            return "Erreur : élément " + i + " (" + tableau[i] + ") n'est pas un nombre.";
        }
        somme = somme + tableau[i];
    }

    return somme / tableau.length;
}

console.log(moyenne([10, 20, 30, 40]));   // 25
console.log(moyenne([]));                  // 0
console.log(moyenne("bonjour"));           // Erreur : le paramètre n'est pas un tableau.

console.log("FIN EXO4");  



function numero5(a, b) {
    return {
        somme:         a + b,
        soustraction:   a - b,
        multiplication: a * b,
        division:      a / b
    };
}

let resultat = numero5(5, 10);
console.log(resultat);
console.log(resultat.somme + " / " + resultat.division);

console.log("FIN EXO5");  