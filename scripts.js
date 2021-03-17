let questNumber = -1;
let points = 0;
let selectedAnswer;
var timeOut;
var quests;
let length;

function fetchQuestions() {
    return fetch('questions.json')
        .then(res => res.json())
        .then(function(data) {
            quests = data;
            length = quests.length;
            fillQuestions();
        })
}

function enableButton() {
    document.getElementById("button").disabled = false;
}

function calculatePoints() {
    var radios = document.getElementsByName('antwort');

    clearTimeout(timeOut);

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            selectedAnswer = i;
            radios[i].checked = false;
            break;
        }
    }
    if (selectedAnswer == quests[questNumber].correctIndex) {
        points++;
        document.getElementById("score").innerHTML = points;
    }

    fillQuestions();
    timeBar();
}

function fillQuestions() {
    document.getElementById("button").disabled = true;

    questNumber++; // Math.floor(Math.random() * length);

    if (questNumber < length) {
        document.getElementById("question").innerHTML = quests[questNumber].question;
        document.getElementById("a1").innerHTML = quests[questNumber].answers[0];
        document.getElementById("a2").innerHTML = quests[questNumber].answers[1];
        document.getElementById("a3").innerHTML = quests[questNumber].answers[2];
        document.getElementById("a4").innerHTML = quests[questNumber].answers[3];

        timer();
    } else {
        endScreen("Finished!");
    }
}

// Source: https://css-tricks.com/timer-bars-in-css-with-custom-properties/
function timeBar() {
    const bars = document.querySelectorAll(".round-time-bar");
    bars.forEach((bar) => {
        bar.classList.remove("round-time-bar");
        bar.offsetWidth;
        bar.classList.add("round-time-bar");
    });
}

function timer() {
    timeOut = setTimeout(function () {
        endScreen("Time is over!")
    }, 5000);
}

function endScreen(message) {
    document.getElementById("question").innerHTML = "Game over!";
    document.getElementById("quiz").innerHTML = "<h2>" + message + "</h2><p>You achieved " + points + " point(s).</p><div class='buttonContainer'</div><button id='button' onclick='window.location.reload();'>Play again</button>";
}

function toggleDarkMode() {
    let darkMode = localStorage.getItem('darkMode');

    if (darkMode == 'true') {
        localStorage.setItem("darkMode", "false");
    } else {
        localStorage.setItem("darkMode", "true");
    }

    setColors();
}

function setColors() {
    let root = document.documentElement;
    let darkMode = localStorage.getItem('darkMode');

    if (darkMode == 'true') {
        root.style.setProperty('--bg-color', "black");
        root.style.setProperty('--font-color', "black");
    } else {
        root.style.setProperty('--bg-color', "#EEEEEE");
        root.style.setProperty('--font-color', "white");
    }
}