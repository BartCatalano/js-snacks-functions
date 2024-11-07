/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const getCurrentTime = (nome) => {
    const now = new Date();
    const orario = now.getHours();
    let message = `Buonasera`
    if(orario < 13 && orario > 0){
        message = `Buongiorno`;
    } else if (orario >= 13 && orario <= 17){
        message = `Buon pomeriggio`
    }
    return `${message} ${nome}`
}

// Invoca la funzione qui e stampa il risultato in console

const messaggio = getCurrentTime(name);
console.log(messaggio);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.