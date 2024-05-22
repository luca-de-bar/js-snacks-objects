'use strict';


//Inizializzo l'array di oggetti che contiene i dati delle persone
const myPeople = [

    {
        nome: 'Luca',
        cognome: 'De Bar',
        eta : '23'
    },

    {
        nome: 'Matteo',
        cognome: 'De Bar',
        eta : '16'
    },

    {
        nome: 'Marco',
        cognome: 'De Bar',
        eta : '15'
    },

    {
        nome: 'Daniele',
        cognome: 'De Bar',
        eta : '32'
    },

    {
        nome: 'Maria',
        cognome: 'Porciello',
        eta : '54'
    },

    {
        nome: 'Manolito',
        cognome: 'De Bar',
        eta : '55'
    },

    {
        nome: 'Alisea',
        cognome: 'Argentini',
        eta : '28'
    },

    {
        nome: 'Sedrick',
        cognome: 'Argentini',
        eta : '12'
    },

];


//Inizializzo array vuoto, conterrà i dati finali.
const finalArray = [];


//Creo un for loop per ciclare nell'array
for (let i = 0; i < myPeople.length; i++){

    //Determino se maggiorenne, aggiungo la chiave info agli oggetti.
    if (myPeople[i].eta < 18) {

        myPeople[i].info = `${myPeople[i].nome} NON può guidare!, deve aspettare di essere maggiorenne`
        finalArray.push(myPeople[i]);

    } else {
        
        myPeople[i].info = `${myPeople[i].nome} Può guidare!`
        finalArray.push(myPeople[i]);
    }
}

console.log(finalArray)