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
}
