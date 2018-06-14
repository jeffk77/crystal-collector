var yourScore = document.getElementById('usernumWindow');
    yourScore.innerHTML = 0;

var targetScore = document.getElementById('compnumWindow');
    targetScore.innerHTML = getRandomValue(120, 19);

var targetScore = document.getElementById('diamondvalue1');
    targetScore.innerHTML = getRandomValue(12, 1);

var targetScore = document.getElementById('diamondvalue2');
    targetScore.innerHTML = getRandomValue(12, 1);

var targetScore = document.getElementById('diamondvalue3');
    targetScore.innerHTML = getRandomValue(12, 1);

var targetScore = document.getElementById('diamondvalue4');
    targetScore.innerHTML = getRandomValue(12, 1);

function addToScore(val) {
    var numberToAdd = parseInt(val);
    var currentScore = parseInt(yourScore.innerHTML);
    yourScore.innerHTML = numberToAdd + currentScore;
}

var diamond1 = document.getElementById("diamond1");
var diamond2 = document.getElementById("diamond2");
var diamond3 = document.getElementById("diamond3");
var diamond4 = document.getElementById("diamond4");




diamond1.addEventListener('click', function () {
    addToScore(this.value);
    checkPlayerScore();
});


diamond2.addEventListener('click', function () {
    addToScore(this.value);
    checkPlayerScore();
});

diamond3.addEventListener('click', function () {
    addToScore(this.value);
    checkPlayerScore();
});

diamond4.addEventListener('click', function () {
    addToScore(this.value);
    checkPlayerScore();
});



function getRandomValue(a, b) {
    return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
    var playerInt = parseInt(yourScore.innerHTML);
    var targetInt = parseInt(targetScore.innerHTML);
    if (playerInt === targetInt) {
        alert('You win!');
        wins++;
    } else if (playerInt > targetInt) {
        alert('You lose!');
        losses++;
    }
}