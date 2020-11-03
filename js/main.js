$(document).ready( function () {
  /* JSNACK 1
  Creare un array di oggetti
  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  Stampare a schermo la bici con peso minore con handlebars.
  */
  //CREO UN ARRAY DI OGGETTI
  const biciclette = [
    {
      nome: 'Pinarello',
      peso: 10,
    },
    {
      nome: 'Bianchi',
      peso: 8,
    },
    {
      nome: 'Scott',
      peso: 11,
    },
  ];
  //CICLO PER STABILIRE LA BICLETTA CON PESO MINORE
  let leggera = null;
  biciclette.forEach((element) => {
    if (leggera == null || leggera.peso > element.peso) {
      leggera = element;
    };
  });
  $('.jsnack1').append(
    `
    <h1>La bicicletta dal peso minore è ${leggera.nome}, pesa solo ${leggera.peso} Kg<h1/>
    `
  );
  // HANDLEBARS
  // const source = $('#entry-template').html();
  // const template = Handlebars.compile(source);
  //
  // const context = { bici: leggera.nome, peso: leggera.peso };
  // const html = template(context);
  //STAMPA BICICLETTA CON PESO MINORE
  // $('.jsnack1').append(html);

  /*
  JSNACK 2
  Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
  Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
  Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.
  */
  //ARRAY DI NOMI
  const nomi = ['Davide', 'Paolo', 'Lorenzo', 'Fabio'];
  let nomiNuovo = [];
  //CHIEDIAMO ALL'UTENTE DI INSERIRE I DUE INDICI
  let min = parseInt( prompt('Inserisci la posizione più bassa. (Minimo 0)' ));
  let max = parseInt( prompt('Inserisci la posizione più alta. (Massimo ' + (nomi.length - 1) + ' )' ));
  //POPOLAMENTO DEL NUOVO ARRAY
  nomiNuovo = nomi.filter( (element , index) => index >= min && index <= max);

  console.log('L\'array di nomi è : ' + nomi);
  console.log('L\'indice minimo è : '+ min + ' e quello massimo è : ' + max);
  console.log('L\'array di nomi nuovo è : ' + nomiNuovo);

  /*
  JSNACK 3
  Creiamo un array di oggetti (scelti da voi)
  Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
  Non dobbiamo modificare l'array iniziale.
  */
  //ARRAY DI OGGETTI
  const oggetti = [
    {
      nome: 'palla',
      peso: 1,
      colore: 'giallo',
    },
    {
      nome: 'bottiglia',
      peso: 2,
      colore: 'blu',
    },
    {
      nome: 'giacca',
      peso: 3,
      colore: 'nero',
    },
    {
      nome: 'libro',
      peso: 1,
      colore: 'bianco',
    },
  ];
  console.table(oggetti);
  //CICLO PER COSTRUIRE NUOVO ARRAY
  const nuovoArray = oggetti.map( (element) => {
    return {
      ...element,
      position: randomLet(),
    };
  });
  console.table(nuovoArray);


}); //END DOCUMENT READY

//UTILITY
// FUNZIONE NUMERI RANDOM
function randomNum (min , max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
};
// FUNZIONE LETTERA RANDOM
function randomLet () {
  var alfabeto = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z'];
  return alfabeto[randomNum(0 , alfabeto.length - 1)];
};
