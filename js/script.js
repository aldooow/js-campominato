/*Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50
Raccomandazione: andato avanti come sempre un pezzettino alla volta, diamo a variabili e funzioni nomi che riflettano il proprio ruolo e
prima di iniziare facciamo l’analisi e scriviamo i punti importanti!*/



// Il computer deve generare 16 numeri casuali tra 1 e 100.
var quantitaNumeriCasuali = 16;
var rangeNumeriCasuali = 100;
var arrayBombe = generaNumeriCasuali(quantitaNumeriCasuali, rangeNumeriCasuali);




// In seguito deve chiedere all’utente di inserire un numero alla volta,
// sempre compreso tra 1 e 100.



// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.
var numeroMassimoGiocate = rangeNumeriCasuali - quantitaNumeriCasuali;
console.log(numeroMassimoGiocate);

var numeroInsersioniUtente = 0;
var bombaBeccata = false;

while((bombaBeccata === false) && (numeroInsersioniUtente < numeroMassimoGiocate)){
  var numeroUtente = parseInt(prompt('inserire un numero del 1 al ' + rangeNumeriCasuali))
  if(verificaNumeroInArray(numeroUtente, arrayBombe) === true) {
    bombaBeccata = true;
  }
  numeroInsersioniUtente++
}
console.log(numeroInsersioniUtente)

// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.


// BONUS: all’inizio il software richiede anche una difficoltà all’utente che
// cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100,
// con difficoltà 1 => tra 1 e 80,
// con difficoltà 2=> tra 1 e 50.



// FUNZIONI!!!

// Questa funzione genera numero casuali  dentro un Array!
//   --> quantitaNumeriCasuali = quantita numeri random dentro il Array.
//   --> rangeNumeriCasualiPc = range max.
function generaNumeriCasuali(quantitaNumeriCasuali, rangeNumeriCasuali ) {
  var arrayBombe = [];
  while( arrayBombe.length < quantitaNumeriCasuali){
    var numeroCasuale = Math.floor(Math.random() * (rangeNumeriCasuali - 1)) + 1;
    if(verificaNumeroInArray(numeroCasuale, arrayBombe) === false ){
      arrayBombe.push(numeroCasuale);
    }
  }
  console.log(arrayBombe);
}

// Questa fuznione verifica che non si ripeta un elemento dentro il Array!
//  --> listaArray = è un Array.
//  --> elemento = puo essere un elemento dentro del Array, che si cosi fosse
//  inArrat sarebbe "true", in caso contrario "false".
function verificaNumeroInArray(elemento, listaArray){
  var inArray = false;

  for (var i = 0; i < listaArray.length; i++){
    if(elemento === listaArray[i]) {
      inArray = true;
    }
  }
  return inArray;
}
