'use strict'

// Array.find() returns the first item in an array 
// which matches a condition

var players = [
    { id: 101, name: 'Barry', age: 28, score: 30 },
    { id: 102, name: 'Larry', age: 22, score: 29 },
    { id: 103, name: 'Garry', age: 21, score: 22 },
    { id: 104, name: 'Bobby', age: 26, score: 32 },
    { id: 105, name: 'Robby', age: 19, score: 30 },
]

const id = 102

// :1 Finding a player by id with a for loop

// var player = findPlayerById(id)

function findPlayerById(playerId) {
    for (var i = 0; i < players.length; i++) {
        if (players[i].id === playerId) return players[i]
    }
    return null
}
// console.log('player: ', player)


// :2 Finding a player by id with Array.find()

var player = players.find(player => player.id === id)
console.log(player)

// :3 Finding a player by score with Array.find()

// const player = players.find(player => player.score === 30)
// console.log(player)

// :4 Finding multiple players by score with Array.filter()

// const playersWith30 = players.filter(player => player.score === 30)
// console.log(playersWith30)

// Array.findIndex() returns the index of the first item in an array 
// which matches a condition

// :1 Finding a player's index by id with a for loop

// var playerIdx = findPlayerIdxById(id)

// function findPlayerIdxById(playerId) {
//     for (var i = 0; i < players.length; i++) {
//         if (players[i].id === playerId) return i
//     }
//     return -1
// }
// console.log('playerIdx: ', playerIdx)

// :2 Finding a player's index by id with Array.findIndex()

// const idx = players.findIndex(player => player.id === id)
// console.log(idx)

// :3 Removing a player by id with Array.findIndex() + Array.splice()

// const idx = players.findIndex(player => player.id === id)
// players.splice(idx, 1)

// console.log(players)

// :4 Removing a player by id with Array.filter()

// const playersNot30 = players.filter(player => player.score !== 30)
// console.log(playersNot30)

// :5 Let's implement find & findIndex

const player = find(players, player => player.id === id)
console.log(player)

function find(arr, func) {
    for(var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)) return arr[i]
    }
    return null
}

const idx = findIndex(players, player => player.id === id)
console.log(idx)

function findIndex(arr, func) {
    for(var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)) return i
    }
    return -1
}

{
    document.querySelector('h3').innerText = 'Array.find() & Array.findIndex()'
}