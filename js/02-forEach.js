'use strict'

function print(item, idx) {
    console.log(idx, ':', item)
}

var players = [
    { name: 'p1', score: 19 },
    { name: 'p2', score: 12 },
    { name: 'p3', score: 53 },
]

// :1 Print all players using a for loop + a global function

// for(var i = 0; i < players.length; i++){
//     print(players[i], i)
// }

// :2 Print all players using Array.forEach() + a global function

// players.forEach(print)

// :3 Print all players using Array.forEach() + an anonymous function

// players.forEach((item, idx)=> console.log(idx, ':', item))

// :4 Increment all player scores by 1 using a for loop

// for (var i = 0; i < players.length; i++) {
//     var player = players[i]
//     player.score++
// }
// console.log(players)

// :5 Increment all player scores by one using a Array.forEach()

players.forEach(item => item.score++)
// console.log(players)

var nums = [2, 3, 4, 5]
nums.forEach(item => item++) // This does not work!
nums.forEach((item, idx, items) => items[idx]++)

console.log(nums)

// :6 Let's implement forEach

function forEach(arr, func) {
    for(var i = 0; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

{
    document.querySelector('h3').innerText = 'Array.forEach()'
}