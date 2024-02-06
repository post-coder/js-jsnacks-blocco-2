/*
 
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array 
fino a quando la somma degli elementi è minore di 50
  
*/



// array vuoto
const numbers = [];

// ciclo di cui non sappiamo il numero esatto di iterazioni a monte



// inizializzo una variabile sum a zero, qui conterò il totale della somma degli elementi
let sum;

do {

    // resetto il contenuto di somma
    sum = 0;

    // memorizzo il numero chiesto all'utente
    const userNumber = Number(prompt("Inserisci un numero"));

    // lo inserisco nell'array
    numbers.push(userNumber);

    // calcolo la somma dei numeri nell'array

    

    for(let i = 0; i < numbers.length; i++) {
        
        sum += numbers[i];

    }

    console.log("numeri:", numbers);
    console.log("somma: ", sum);

} while(sum < 50)


console.log("Esercizio completato, hai inserito " + numbers.length + " numeri.");
