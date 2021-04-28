//1. chiedi all’utente il cognome

var userInput = prompt("Scrivi qui il tuo cognome");
var nuovoCognome = userInput.toLowerCase();

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var listaCognomi = ["russo", "gallo", "costa", "ricci", "leone", "gatti"];

listaCognomi.push(nuovoCognome);

//3. stampa la lista ordinata alfabeticamente

console.log(listaCognomi.sort());

//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

console.log(listaCognomi.indexOf(nuovoCognome) + 1);