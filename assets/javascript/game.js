$(document).ready(function () {

    // Selects random number and puts it in the "compNum" div
    var Random = Math.floor(Math.random() * 101 + 19)
    $('#compNum').text(Random);

    // Creates the variables for use later, with established zero values and array.
    var GeneratedNumbers = []
    var wins = 0;
    var losses = 0;
    var total = 0;

    // Provides values for Win/Loss tracking divs.
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    // Random value generator for the diamond buttons.
    function fourRandomNumbers() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 11 + 1);
            GeneratedNumbers.push(num);
        }
    }

    // Creates random number reset.
    fourRandomNumbers();

    // Reset function, to reset the game after each round.
    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        $('#compNum').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total = 0;
        $('#userNum').text(total);
    }

    // addWin Function, used to track when the user wins!
    function addWin() {
        alert("You Win!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    // addLoss Function, used to track when the user loses!
    function addLoss() {
        alert("You Lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    // The on-click response function.
    $('.diamondbutton').on('click', function() {
        var elem = $(this);
        var indx = elem.data('idx');

        total = total + GeneratedNumbers[indx];
        $('#userNum').text(total);

        if (total == Random) {
            addWin();
        }
        else if (total > Random) {
            addLoss();
        }
    })

});	
