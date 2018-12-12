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


