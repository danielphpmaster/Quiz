const questions =
    [
        {
            "question": "What is the scientific name of a butterfly?",
            "answers": [
                "Apis",
                "Coleoptera",
                "Formicidae",
                "Rhopalocera"
            ],
            "correctIndex": 3
        },
        {
            "question": "How hot is the surface of the sun?",
            "answers": [
                "1,233 K",
                "5,778 K",
                "12,130 K",
                "101,300 K"
            ],
            "correctIndex": 1
        },
        {
            "question": "Who are the actors in The Internship?",
            "answers": [
                "Ben Stiller, Jonah Hill",
                "Courteney Cox, Matt LeBlanc",
                "Kaley Cuoco, Jim Parsons",
                "Vince Vaughn, Owen Wilson"
            ],
            "correctIndex": 3
        },
        {
            "question": "What is the capital of Spain?",
            "answers": [
                "Berlin",
                "Buenos Aires",
                "Madrid",
                "San Juan"
            ],
            "correctIndex": 2
        },
        {
            "question": "What are the school colors of the University of Texas at Austin?",
            "answers": [
                "Black, Red",
                "Blue, Orange",
                "White, Burnt Orange",
                "White, Old gold, Gold"
            ],
            "correctIndex": 2
        },
        {
            "question": "What is 70 degrees Fahrenheit in Celsius?",
            "answers": [
                "18.8889",
                "20",
                "21.1111",
                "158"
            ],
            "correctIndex": 2
        },
        {
            "question": "When was Mahatma Gandhi born?",
            "answers": [
                "October 2, 1869",
                "December 15, 1872",
                "July 18, 1918",
                "January 15, 1929"
            ],
            "correctIndex": 0
        },
        {
            "question": "How far is the moon from Earth?",
            "answers": [
                "7,918 miles (12,742 km)",
                "86,881 miles (139,822 km)",
                "238,400 miles (384,400 km)",
                "35,980,000 miles (57,910,000 km)"
            ],
            "correctIndex": 2
        },
        {
            "question": "What is 65 times 52?",
            "answers": [
                "117",
                "3120",
                "3380",
                "3520"
            ],
            "correctIndex": 2
        },
        {
            "question": "How tall is Mount Everest?",
            "answers": [
                "6,683 ft (2,037 m)",
                "7,918 ft (2,413 m)",
                "19,341 ft (5,895 m)",
                "29,029 ft (8,847 m)"
            ],
            "correctIndex": 3
        },
        {
            "question": "When did The Avengers come out?",
            "answers": [
                "May 2, 2008",
                "May 4, 2012",
                "May 3, 2013",
                "April 4, 2014"
            ],
            "correctIndex": 1
        },
        {
            "question": "What is 48,879 in hexidecimal?",
            "answers": [
                "0x18C1",
                "0xBEEF",
                "0xDEAD",
                "0x12D591"
            ],
            "correctIndex": 1
        }
    ]
const length = questions.length;
let questNumber = -1;
let points = 0;
let selectedAnswer;
var timeOut;

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
    if (selectedAnswer == questions[questNumber].correctIndex) {
        points++;
        document.getElementById("score").innerHTML = points;
    }

    fillQuestions();
    timeBar();
}

function fillQuestions() {
    document.getElementById("button").disabled = true;

    questNumber++; // Math.floor(Math.random() * length);

    if (questNumber < questions.length) {
        document.getElementById("question").innerHTML = questions[questNumber].question;
        document.getElementById("a1").innerHTML = questions[questNumber].answers[0];
        document.getElementById("a2").innerHTML = questions[questNumber].answers[1];
        document.getElementById("a3").innerHTML = questions[questNumber].answers[2];
        document.getElementById("a4").innerHTML = questions[questNumber].answers[3];

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