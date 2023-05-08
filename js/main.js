// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// variabili globali 


// richiesta all'utente di inserire una parola

let userWord = prompt("inserisci una parola");



// if( userWord.length % 2 )

//      risultato = "pari";
        


        for (let i = 0, index = userWord.length; i < (userWord.length / 2); i++, index--){

            let letterOne = userWord.charAt(i);

            let letterTwo = userWord.charAt(userWord.length-index);

            console.log(letterOne);

            console.log(letterTwo);
        };

        // prendo il secondo 50% di caratteri e li metto dentro ad un'altra lista

        // controllo se i caratteri dentro la prima lista combacino con la seconda lista

        // aggiorno output
   

// SE la parola ha un numero di caratteri dispari rimuovo la lettera centrale e poi faccio il controllo che farei se la parola avesse un numero di caratteri pari 
        
// else

//      risultato = "dispari";

        // divido il numero di caratteri della parola per 2 e arrotondo per eccesso il risultato e rimuovo il carattere in quella posizione 

        // prendo il primo 50% di caratteri e li metto dentro ad una lista

        // prendo il secondo 50% di caratteri e li metto dentro ad un'altra lista

        // controllo se i caratteri dentro la prima lista combacino con la seconda lista

        // aggiorno output   




// output 

// 1037

// 518 1 518