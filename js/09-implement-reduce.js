'use strict'

const vals = [4, 7, 1]

function accumulateSum(acc, num) {
    return acc + num
}

// :1 A basic implementation

// var res = mySimpleReduce(vals, accumulateSum, 0)
// console.log('Got: ', res)

function mySimpleReduce(items, func, accInitialVal) {
    var acc = accInitialVal
    for (var i = 0; i < items.length; i++) {
        var item = items[i]
        acc = func(acc, item, i, items)
    }
    return acc
}

// :2 A complete implementation - support for no accumulator initialization

function myFullReduce(items, func, accInitialVal) {
    var acc
    var startIdx = 0

    if (accInitialVal !== undefined){
        acc = accInitialVal
    } else {
        acc = items[0]
        startIdx = 1
    }

    for (var i = startIdx; i < items.length; i++) {
        var item = items[i]
        acc = func(acc, item, i, items)
    }
    return acc
}

{
    document.querySelector('h3').innerText = 'Array.reduce()'
}