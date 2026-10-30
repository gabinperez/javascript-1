

let prenom = "Gabin";
for (let i = 0; i < 10; i++) {
    console.log(prenom)       // Gabin est affiché 10 fois
}

console.log("FIN EXO1")


for (let a = 1; a <11; a++) {

    console.log (a)  // Compte de 0 à 10
}


console.log("FIN EXO2")


for (let b = 0; b < 10; b++) {
    if (b % 2 === 0) {
        console.log(b);
    }                  // Affiche tous les nombres pair de 0 à 10
}

console.log("FIN EXO3")

 
let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];{
for (let c = 0; c < array1.length; c++)

console.log(array1[c])                   //affiche tous les elements du tableau
}
   

console.log("FIN EXO4")

let array2 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

for (let d = 0; d < array2.length; d++) {
    if (array2[d] % 2 === 0) {
        console.log(array2[d])   //affiche tous les elementes pair du tableau
    }
}

console.log("FIN EXO5")

let e = 5;
let somme = 0;
for(let f = 1; f <= e; f++) {
    somme = somme + f;
}
console.log(somme);             //  calculer la somme de tous les nombres de 1 à de la valeur e = 5

console.log("FIN EXO6")

let array3 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4]; 
for (let g = 0; g < array3.length; g++) {

 console.log(array3[g])                   //affiche tous les elements du tableau array3
}   

console.log();

for (let g = array3.length - 1; g >= 0; g--) {
    console.log(array3[g]);             //affiche tous les elements du tableau array3 sens inverse
}


console.log();

let arrayCopy = [];

for (let g = 0; g < array3.length; g++) {
    arrayCopy.push(array3[g]);          // afficher copie du tableau array3
}

console.log(arrayCopy);

console.log("FIN EXO7");



let array4 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let arrayCopy2 = [];

for (let h = 0; h < array4.length; h++) {
    arrayCopy2.push(array4[h]);          // afficher copie du tableau array3
}

console.log(arrayCopy2);