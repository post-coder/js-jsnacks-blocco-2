/*

Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi 
fino a quando ne avrà tanti quanti l’altro. 
(Se iniziate con un array da 3 elementi e l'altro da 5, 
eseguite istruzioni sinchè non ne hanno entrambi 5

*/

// inizializzo il primo array
const array1 = [3,5,1];

// inizializzo il secondo array
const array2 = [1,2,3,4,5,6,7,8,9];

// controllo quale sia il più piccolo
if(array1.length < array2.length) {

    // sinchè la lunghezza del primo array è inferiore di quella del secondo
    do {
        
        // aggiungi elementi
        // in questo caso sto aggiungendo gli elementi mancanti dal secondo array
        // li prelevo comodamente usando come indice la lunghezza del primo visto che aumenta di uno in uno, che mi fa di volta in volta
        // prelevare l'elemento successivo dal secondo
        // array1.push(array2[array1.length]);
        array1.push(Math.floor(Math.random() * 100)+ 1)

    } while (array1.length < array2.length) 

} else {
    // stessa cosa ma inversa

    while (array2.length < array1.length) {
        
        array2.push(array1[array2.length]);

    }
}

console.log("Array 1:", array1);
console.log("Array 2:", array2);