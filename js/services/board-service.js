'use strict'

let gBoard

let gIsWin = false

const gMoves = {
    '✕': [],
    '◯': []
}

function getBoard() {
    return gBoard
}

function getIsWin() {
    return gIsWin
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
    const lastMove = moves[moves.length - 1]
    if (!gIsWin) _checkRow(lastMove.i, sign)
    if (!gIsWin) _checkCol(lastMove.j, sign)
    if (!gIsWin) _checkMainDiagnal(sign)
    if (!gIsWin) _checkSecDiagnal(sign)
}

function _checkRow(rowIdx, sign) {
    for (let j = 0; j < gBoard[rowIdx].length; j++) {
        const cell = gBoard[rowIdx][j]
        if (cell !== sign) return
    }
    gIsWin = true
}

function _checkCol(colIdx, sign) {
    for (let i = 0; i < gBoard.length; i++) {
        const cell = gBoard[i][colIdx]
        if (cell !== sign) return
    }
    gIsWin = true
}

function _checkMainDiagnal(sign) {
    for (let i = 0; i < gBoard.length; i++) {
        const cell = gBoard[i][i]
        if (cell !== sign) return
    }
    gIsWin = true
}

function _checkSecDiagnal(sign) {
    for (let i = 0; i < gBoard.length; i++) {
        const j = gBoard.length - 1 - i
        const cell = gBoard[i][j]
        if (cell !== sign) return
    }
    gIsWin = true
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
