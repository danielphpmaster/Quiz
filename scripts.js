function evaluateQuestion(page) {
    if (location.search.substring(1).localeCompare("")) {
        var points = 0;
    } else {
        var points = eval(location.search.substring(1));
    }
    var radios = document.getElementsByName('antwort');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == 1) {
                points++;
            }
        }
    }
    var nextPage = './q' + page + '.html?p=' + points
    window.open(nextPage, '_self')
}