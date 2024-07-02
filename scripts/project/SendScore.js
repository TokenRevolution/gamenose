// Funzione per inviare i dati al server
function sendScore(playerName, playerScore) {
    const xhr = new XMLHttpRequest();
    const url = "https://nose.box/gamenose/?submit_score"; // Sostituisci con l'URL del tuo script PHP
    const params = `player=${playerName}&score=${playerScore}`;

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText); // Output della risposta del server
        }
    };
    xhr.send(params);
}
