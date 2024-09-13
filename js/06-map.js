'use strict'

// Array.map() returns an new array with the same length, 
// of transformed elements

var nums = [6, 9, 2, 5]

// :1 Create an array of squared numbers using a for loop

// const squared = []

// for(var i = 0; i < nums.length; i++){
//     squared[i] = nums[i] ** 2
// }

// console.log(squared)

// :2 Create an array of squared numbers using a Array.map()

// const squared = nums.map(num => num ** 2)
// console.log(squared)

// :3 Map an array of digits to an array of words

// var digits = [3, 6, 7, 0, 8, 2]
// var digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

// const words = digits.map(digit => digitNames[digit])
// console.log(digits)
// console.log(words)

// :4 Create an array of player objects from an array of names

var gNextId = 1001
var names  = ['Juni', 'Muki', 'Kuni']

// const players = names.map(name => ({ name, id: gNextId++ }))
// console.log(players)

// :5 Create an array of <li>'s from an array of strings

// const strHtmls = names.map(name => `<li>${name}</li>`)
// const elList = document.querySelector('ul')

// elList.innerHTML = strHtmls.join('')

// :6 Let's implement map()

const strHtmls = map(names, name => `<li>${name}</li>`)
const elList = document.querySelector('ul')

elList.innerHTML = strHtmls.join('')

function map(arr, func) {
    const transformedItems = []

    for(var i = 0; i < arr.length; i++){
        const transformedItem = func(arr[i], i, arr)
        transformedItems.push(transformedItem)
    }
    return transformedItems
}

// :7 Chainig methods

var num = 3498534989
var digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const words = String(num)
                .split('')
                .filter(digit => +digit % 2)
                .map(digit => digitNames[digit])

console.log(words)

{
    document.querySelector('h3').innerText = 'Array.map()'
}