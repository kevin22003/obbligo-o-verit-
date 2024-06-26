let tasks = {
    obbligo: [
        "Fingi un orgasmo",
        "Fai 10 piegamenti",
        "Mangia un cucchiaino di cannella",
        "Twerka",
        "Fai un massaggio ai piedi alla persona accanto a te",
        "Scambiati la T-shirt con la persona alla tua sinistra",
        "Scegli un obbligo (già uscito o che deve uscire)",
        "Togliti il reggiseno",
        "Mostra il talento più sexy che hai",
        "L'altra persona dovrà rispondere a tutte le verità uscite e viceversa",
        "Mostra 2 foto molto hot che hai mandato (entrambi i giocatori)"
    ],
    verità: [
        "Qual è la fantasia sessuale che più ti intriga?",
        "Quante volte al giorno ti masturbi?",
        "Hai mai fatto sexting con uno/a sconosciuto/a?",
        "Hai mai avuto fanstasie sessuali su qualcuno in questa stanza? (entrambi i giocatori)",
        "Hai mai mandato foto di te nudo/a su WhatsApp?",
        "Hai mai fatto sexting con uno/a sconosciuto/a?",
        "Chi è la persona più sexy del gruppo",
        "Qual è la posizione che preferisci a letto?",
        "Dì una cosa sincera e cattiva per ogni persona del gruppo (entrambi i giocatori)",
        "Quali sono le tue misure?",
        "Descrivi/disegna le tue parti intime"
    ]
};

// Indici per tenere traccia dell'ultima task e verità mostrate
let currentIndexObbligo = 0;
let currentIndexVerita = 0;

function showTask(type) {
    const taskDisplay = document.getElementById('taskDisplay');

    if (type === 'obbligo') {
        if (currentIndexObbligo >= tasks.obbligo.length) {
            taskDisplay.innerText = 'Hai finito gli obblighi disponibili.';
            return;
        }
        taskDisplay.innerText = tasks.obbligo[currentIndexObbligo];
        currentIndexObbligo = (currentIndexObbligo + 1) % tasks.obbligo.length;
    } else if (type === 'verità') {
        if (currentIndexVerita >= tasks.verità.length) {
            taskDisplay.innerText = 'Hai finito le verità disponibili.';
            return;
        }
        taskDisplay.innerText = tasks.verità[currentIndexVerita];
        currentIndexVerita = (currentIndexVerita + 1) % tasks.verità.length;
    } else {
        taskDisplay.innerText = 'Tipo non valido.';
        return;
    }

    taskDisplay.style.display = 'block';
    taskDisplay.classList.remove('fadeIn');
    void taskDisplay.offsetWidth; // Trigger reflow
    taskDisplay.classList.add('fadeIn');
}
