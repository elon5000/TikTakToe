'use strict'

const X = '✕'
const CIRCLE = '◯'
const elBoard = document.querySelector('.board')

let gIsX = Math.random >= 0.5 ? true : false
let gTurnIdx = 0

function onCellClick(elCell, i, j) {
    const pos = { i, j }
    const cell = getCell(pos)
    if (cell) return
    const sign = gIsX ? X : CIRCLE
    setCell(pos, sign)
    setMoves(pos, sign)
    renderCell(elCell, sign)
    if (gTurnIdx >= (gGame.size * 2) - 2) checkWin(sign)
    gIsX = !gIsX
    gTurnIdx++
    if (gTurnIdx === gGame.size ** 2) onGameOver()
}

function onGameOver() {
    console.log('Game over')
}

function renderCell(elCell, sign) {
    elCell.innerText = sign
}

function renderBoard() {
    const board = getBoard()
    let strHtml = ''
    for (let i = 0; i < board.length; i++) {
        strHtml += `<tr>`
        for (let j = 0; j < board.length; j++) {
            strHtml += `<td class="cell" onclick="onCellClick(event.target, ${i}, ${j})">${board[i][j]}</td>`
        }
        strHtml += '</tr>'
    }
    elBoard.innerHTML = strHtml
}