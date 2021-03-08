let points = getUrlVars()["points"] != {} ? getUrlVars()["points"] : 0

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

const length = questions.length

function evaluateQuestion(answer, page) {

    if (location.search.substring(1).includes("")) {
        var points = 0;
    } else {
        var points = location.search.substring(1);
    }
    var radios = document.getElementsByName('antwort' + answer);
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == 1) {
                points++;
            }
        }
    }
    var nextPage = './q' + page + '.html?p=' + points
    location.reload();
}

function evaluateFinal(answer) {
    var points = eval(location.search.substring(1));
    var radios = document.getElementsByName('antwort' + answer);
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == 1) {
                points++;
            }
        }
    }

    document.write("You have answered " + points + ' questions correctly!');
}


function fillQuestions() {



    var questN = Math.floor(Math.random()*length);



    document.getElementById("questN").value = questN;
    document.getElementById("question").innerHTML = questions[questN].question;
    document.getElementById("a1").innerHTML = questions[questN].answers[0];
    document.getElementById("a2").innerHTML = questions[questN].answers[1];
    document.getElementById("a3").innerHTML = questions[questN].answers[2];
    document.getElementById("a4").innerHTML = questions[questN].answers[3];

}

function calculatePoints() {


    var questN2 = getUrlVars()["questN"]
    var answer = getUrlVars()["antwort"]
    var points = getUrlVars()["points"] != {} ? getUrlVars()["points"] : 0


    if (answer == questions[questN2].correctIndex) points++;

    document.getElementById("points").value = points;

}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}