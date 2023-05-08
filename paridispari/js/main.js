// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


let userChoiceOdds = prompt("scegli pari o dispari");

let userChoiceNum = parseInt(prompt("scegli un numero da 1 a 5"));

let sum;

function randomNumberGenerator (){
        return Math.floor(Math.random() * 5 + 1);
}

function isEven(numero) {


        if(numero % 2 == 0 ){
                return true;
        }
        return false;
        
}

let rng = randomNumberGenerator();

console.log(rng);

let somma = rng + userChoiceNum;



console.log(isEven(somma)); 

if (isEven(somma)){
        message = "pari";
}
else{
        message = "dispari";
}

if (message == userChoiceOdds){
        outputMessage = "hai vinto!";
}
else{
        outputMessage = "hai perso!";
}

console.log("la scelta del utente è: " + userChoiceOdds);
console.log("il numero scelto dall'utente è: " + userChoiceNum);


console.log("la somma è " + somma);

console.log(outputMessage);

