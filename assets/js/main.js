//1. chiedi all’utente il cognome

var userInput = prompt("Scrivi qui il tuo cognome");
var nuovoCognome = userInput.toLowerCase();

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var listaCognomi = ["russo", "gallo", "costa", "ricci", "leone", "gatti", "paperi", "preti", "asdrubali", "baccanali", "jojo", "mozzarella", "carlo"];

listaCognomi.push(nuovoCognome);

//3. stampa la lista ordinata alfabeticamente

console.log(listaCognomi.sort());

listaCognomi.sort();

for (var i = 0; i < listaCognomi.length; i++ ) {
    var elemento = listaCognomi[i];
    contenutoLista = document.getElementById("lista_cognomi").innerHTML;
    document.getElementById("lista_cognomi").innerHTML = contenutoLista +  "<li>" + elemento + "</li>";
}

//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

console.log(listaCognomi.indexOf(nuovoCognome) + 1);

document.getElementById("posizione").innerHTML = listaCognomi.indexOf(nuovoCognome) + 1;