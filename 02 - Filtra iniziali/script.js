/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * 
 * @param {array} array 
 * @param {lettera} lettera 
 * @returns 
 */
function selzioneIniziale (array,lettera){
    const arraySelLettera = [];
    for(let i = 0; i < array.length; i++ ){
        const elemantoCorrente = array[i];
        const iniziale = elemantoCorrente.charAt(0);
        if (iniziale === lettera) {
            arraySelLettera.push(iniziale);
        }
}
return arraySelLettera;


}




// Invoca la funzione qui e stampa il risultato in console

console.log(selzioneIniziale(names, A));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]