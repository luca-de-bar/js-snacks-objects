'use strict';

// Creo l'array di oggetti

const myAnimals = [
    {
        nome: 'Leone',
        classe : 'Mammifero'
    },

    {
        nome: 'cane',
        classe : 'Mammifero'
    },

    {
        nome: 'gallina',
        classe : 'Mammifero'
    },

    {
        nome: 'squalo',
        classe : 'Pesce'
    },

    {
        nome: 'Balena',
        classe : 'Mammifero'
    },

    {
        nome: 'Ragno',
        classe : 'Oviparo'
    },

    {
        nome: 'Pipistrello',
        classe : 'Oviparo'
    },
]


//Inizializzo l'array vuoto per i mammiferi
const mammalAnimals = [];
const oviparousAnimals = [];

for (let i = 0; i < myAnimals.length; i++){

    if (myAnimals[i].classe === 'Mammifero') {
        mammalAnimals.push(myAnimals[i]);
    } else {
        oviparousAnimals.push(myAnimals[i]);
    }
}


console.log(mammalAnimals);
console.log(oviparousAnimals);

