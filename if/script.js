function calcolaPrezzoBiglietto(età, km) {
    const prezzoalkm = 0.21;
    const scontominori = 20; // Sconto per i minori di 18 anni
    const over65 = 40; // Sconto per gli over 65
    let prezzototale = prezzoalkm * km;

    // Applicazione degli sconti
    if (età < 18) {
        prezzototale -= (prezzototale * scontominori) / 100; // Sconto per minori
    } else if (età > 65) {
        prezzototale -= (prezzototale * over65) / 100; // Sconto per over 65
    }

    return prezzototale; // Restituisce il prezzo totale
}

// Richiesta di input all'utente
const età = prompt('Inserisci un età: ');
const km = prompt('Inserisci un numero di km: ');

// Chiamata della funzione e visualizzazione del risultato
const prezzoFinale = calcolaPrezzoBiglietto(età, km);
console.log('Il prezzo del tuo biglietto è di: ' + prezzoFinale.toFixed(2) + '€');