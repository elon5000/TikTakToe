'use strict'

let gBoard

const gMoves = {
    '✕': [],
    '◯': []
}

function getBoard() {
    return gBoard
}

function getCell({ i, j }) {
    return gBoard[i][j]
}

function setBoard(length) {
    gBoard = _makeBoard(length)
}

function setCell({ i, j }, val) {
    gBoard[i][j] = val
}

function setMoves(pos, sign) {
    gMoves[sign].push(pos)
}

function checkWin(sign) {
    console.log('Checking', sign)
    const moves = gMoves[sign]
    const idxsSum = Array.from(gGame.size)
    console.log(idxsSum)
    for (let i = 0; i < moves.length; i++) {
        const move = moves[i]

    }
}

function _makeBoard(length) {
    const board = []
    for (let i = 0; i < length; i++) {
        board[i] = []
        for (let j = 0; j < length; j++) {
            board[i][j] = ''
        }
    }
    return board
}