$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)
    $('#compNum').text(Random);

    var GeneratedNumbers = []
    var wins = 0;
    var losses = 0;
    var total = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function fourRandomNumbers() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 11 + 1);
            GeneratedNumbers.push(num);
        }
    }

    fourRandomNumbers();

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        $('#compNum').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total = 0;
        $('#userNum').text(total);
    }

    function addWin() {
        alert("You Win!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    function addLoss() {
        alert("You Lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

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