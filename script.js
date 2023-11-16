// chiedi il nome all utente

let firstName = prompt('Quale è il tuo nome?');
console.log(firstName);


// chiedi il cognome all utente

let lastName = prompt('Quale è il tuo cognome?');
console.log(lastName);


// chiedi il colore preferito all utente

let color = prompt('Quale è il tuo colore preferito?');
console.log(color);



// dichiara la tua password discutibile

let password = firstName + lastName + color + 23 ;
console.log(password);


// mostra il risultato finale all utente

document.getElementById('result').innerHTML=`Il solo fatto che tu riesca a fidarti di questa pagina per creare la tua password descrive alla perfezione la tua persona. Non scordarti di inviarci la tua mail per fare delle verifiche di sicurezza ;) . 
Comunque la tua password è questa: ${password}`;