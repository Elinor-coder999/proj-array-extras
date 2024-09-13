'use strict'

// Array.every() - Do ALL items in an array meet a condition?
// Array.some() - Does ANY item in an array meet a condition?

var items = [7, 13, 5, 3, 11, 9]
// var items = [8, 11, 4, 6, 2, 12]
// var items = [8, 4, 6, 2]

// :1 Are all array items even? (using a for loop)

// var allEven = true

// for(var i = 0; i < items.length; i++){
//     if(items[i] % 2){
//         allEven = false
//         console.log(i + 1)
//         break
//     }
// }
// console.log(allEven)

// :2 Are all array items even? (using Array.every())

const allEven = items.every(item => (item % 2) === 0)
console.log(allEven)

// :3 Is there an array item which is even? (using a for loop)

// :4 Is there an array item which is even? (using Array.some())

// const hasEven = items.some(item => item % 2 === 0)
// console.log(hasEven)

// :5 Can this be done with Array.forEach()?

// :6 Let's implement every & some

function some(items, func) {
    for(var i = 0; i < items.length; i++){
        if(func(items[i], i, items)) return true
    }
    return false
}

function every(items, func) {
    for(var i = 0; i < items.length; i++){
        if(!func(items[i], i, items)) return false
    }
    return true
}

{
    document.querySelector('h3').innerText = 'Array.every() & Array.some()'
}