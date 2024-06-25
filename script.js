let tasks = {
    obbligo: [
        "Fai un massaggio ai piedi alla persona accanto a te",
        "Fai 10 piegamenti",
        "Scegli un obbligo (già uscito o che deve uscire)",
        "Twerka",
        "Fingi un orgasmo",
        "Scambiati la T-shirt con la persona alla tua sinistra",
        "Mangia un cucchiaino di cannella",
        "Togliti il reggiseno",
        "Mostra il talento più sexy che hai",
        "L'altra persona dovrà rispondere a tutte le verità uscite e viceversa",
        "Mostra 2 foto molto hot che hai mandato (entrambi i giocatori)"
    ],
    verità: [
        "Qual è la fantasia sessuale che più ti intriga?",
        "Quante volte al giorno ti masturbi?",
        "Avresti mai un'avventura sessuale con la persona accanto a te, per sapere com'è?",
        "Hai mai avuto fanstasie sessuali su qualcuno che è lì con te ora?",
        "Hai mai mandato foto di te nudo/a su WhatsApp?",
        "Hai mai fatto sexting con uno/a sconosciuto/a?",
        "Chi è la persona più sexy del gruppo",
        "Qual è la posizione che preferisci a letto?",
        "Dì una cosa sincera e cattiva per ogni persona del gruppo",
        "Quali sono le tue misure?",
        "Descrivi/disegna le tue parti intime"
    ]
};

function addTask() {
    const inputText = document.getElementById('inputText').value.trim();
    if (inputText) {
        if (inputText.toLowerCase().includes('verità')) {
            tasks.verità.push(inputText);
        } else {
            tasks.obbligo.push(inputText);
        }
        document.getElementById('inputText').value = '';
        alert('Aggiunto con successo!');
    } else {
        alert('Inserisci un obbligo o una verità.');
    }
}

function spinWheel() {
    const wheel = document.getElementById('wheel');
    wheel.classList.remove('stopped');
    setTimeout(() => {
        const isObbligo = Math.random() < 0.5;
        wheel.classList.add('stopped');
        showTask(isObbligo ? 'obbligo' : 'verità');
    }, 2000); // Spin for 2 seconds
}

function showTask(type) {
    const taskList = tasks[type];
    const taskDisplay = document.getElementById('taskDisplay');
    if (taskList.length === 0) {
        taskDisplay.innerText = 'Nessun ' + type + ' disponibile.';
    } else {
        const randomTask = taskList[Math.floor(Math.random() * taskList.length)];
        taskDisplay.innerText = randomTask;
    }
    taskDisplay.style.display = 'block';
    taskDisplay.classList.remove('fadeIn');
    void taskDisplay.offsetWidth; // Trigger reflow
    taskDisplay.classList.add('fadeIn');
}
