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



