/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * Description
 * @param {string} stringa
 * @returns {number, string}
 */
function vocali(stringa){
    const vocali= `aeiou`;
    let conteggio = 0;
    let vocalipresenti = [];    
    for (let i = 0; i < stringa.length; i++) {
        const parolaCorrente = stringa[i];
        if (vocali.includes(parolaCorrente)  ) {
            conteggio = ++conteggio;
            vocalipresenti.push(parolaCorrente);

         } 
    
    }
    return conteggio, vocalipresenti;
}
 

// Invoca la funzione qui e stampa il risultato in console
console.log(vocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)



