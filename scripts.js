let questNumber = -1;
let points = 0;
let selectedAnswer;
let timeOut;
let quests;
let length;
let startTime;
let endTime;
let tempPoints;
let timeUsed;
let maxTime;
const timePerQuestion = 5000;

function fetchQuestions() {
    startTime = Date.now();
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
    let radios = document.getElementsByName('antwort');

    clearTimeout(timeOut);

    for (let i = 0, length = radios.length; i < length; i++) {
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
        endScreen("Finished!", 1);
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
        endScreen("Time is over!", 0.5)
    }, timePerQuestion);
}

function endScreen(message, timePenalty) {
    endTime = Date.now();
    timeUsed = endTime-startTime;
    maxTime = quests.length*timePerQuestion;
    tempPoints = Math.floor((points*(maxTime-timeUsed))/100*timePenalty);
    document.getElementById("question").innerHTML = "Game over!";
    document.getElementById("quiz").innerHTML = "<h2>" + message + "</h2><p>You achieved " + tempPoints + " point(s).</p><div class='buttonContainer'</div><button id='button' onclick='window.location.reload();'>Play again</button>";
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