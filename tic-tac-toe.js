var prompt = require('prompt');
var board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

function initializeBoard(id, p) {
    board[id] = p.toUpperCase();
};

function showBoard() {
    console.log(`\n ${board[1]} | ${board[2]} | ${board[3]}\n ---------\n ${board[4]} | ${board[5]} | ${board[6]} \n ---------\n ${board[7]} | ${board[8]} | ${board[9]}\n`);
}

function isInt(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

function correctMove(position) {
    return (isInt(position) && board[position] === ' ')
}

var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

function win(player) {
    var i, j, markCount
    for (i = 0; i < winCombinations.length; i++) {
        markCount = 0;
        for (j = 0; j < winCombinations[i].length; j++) {
            if (board[winCombinations[i][j]] === player) {
                markCount++;
            }
            if (markCount === 3) {
                return true;
            }
        }
    }
    return false;
}

function tie() {
    for (var i = 1; i <= Object.keys(board).length; i++) {
        if (board[i] === ' ') {
            return false;
        }
    }
    return true;
}
