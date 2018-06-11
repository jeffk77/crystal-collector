var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var remainingGuesses = 10;
var guessedLetters = [];

// Randomly chooses a choice from the letters array. This is the Computer's choice.
var compChoice = letters[Math.floor(Math.random() * letters.length)];

// Creates updateGuessesLeft variable, using a function that puts the value of remainingGuesses into the #guessLeft div.
var updateGuessesLeft = function () {
    document.querySelector('#guessLeft').innerHTML = remainingGuesses;
}

// Creates updateLetterToGuess variable, using a function that put a random letter into the compChoice variable.
var updateLetterToGuess = function () {
    this.compChoice = this.letters[Math.floor(Math.random() * this.letters.length)];
};

// Creates updateGuessesSoFar variable, using an array of values based on the user's inputted guesses.
var updateGuessesSoFar = function () {
    document.querySelector('#lettersGuessed').innerHTML = "Letters You've Guessed: " + guessedLetters.join(', ');
};

// Resets the game after a win or loss. Restarts the initial values, 
var reset = function () {
    guesses = 10;
    remainingGuesses = 10;
    guessedLetters = [];
    document.querySelector("#computerChoiceBox").innerHTML = "?";
    compChoice = letters[Math.floor(Math.random() * letters.length)];
}

// Response function set to the event of the user pressing a key.

document.onkeyup = function (event) {

    //subtracts from the number of remaining guesses.
    remainingGuesses--;

    //converts any letters entered into lowercase, to ensure a match to the letters array comparison
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //adds the guessed letters to the guessedLetters variable
    guessedLetters.push(userGuess)
    updateGuessesLeft();
    updateGuessesSoFar();

    //score and victory tracking
    if (remainingGuesses > 0) {
        if (userGuess == compChoice) {
            wins++;
            alert("Congrats! You're psychic!!");
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            reset();
        }
    } else if (remainingGuesses == 0) {
        losses++;
        alert("I'm sorry... turns out you're not psychic!");
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        reset();
    };
};
