'use strict'

let gGame = {
    size: 3
}

function onInit() {
    console.log('Initalizing...')
    setBoard(gGame.size)
    renderBoard()
}