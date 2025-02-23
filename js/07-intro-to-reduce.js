'use strict'

// Array.reduce() reduces the array to single value

var nums = [3, 8, 1, 2, 8, 8, 9]

// :1 Summing an array with Array.reduce()

// sumArrayWithReduce(nums)

function sumArrayWithReduce(nums){
    var sum = nums.reduce((accumulator, num) => {
        console.log('Num is', num, 'Acc is', accumulator)
        return accumulator + num
    }, 0)
    console.log('sum is:', sum)
}



// Here, we use a shorter syntax

const sum = nums.reduce((acc, num) => acc + num)
// console.log('sum is:', sum)

// :2 Finding the smallest number in an array with Array.reduce()

// When not passing an initial value for the accumulator, 
// it is initialized with the first item in the array 
// and array iteration starts with the second item

// findMinWithReduce(nums)

function findMinWithReduce(nums) {
    const min = nums.reduce((acc, num) => (acc < num) ? acc : num)
    console.log('Min:', min)
}

// :3 Creating a map from an array

printMapFromArray(nums)

function printMapFromArray(nums){

    const map = nums.reduce((acc, num) => {
        if(num % 2 === 0) acc.even++ 
        else acc.odd++
    
        return acc
    }, { even: 0, odd: 0 })
    
    console.log('map: ', map)
}

{
    document.querySelector('h3').innerText = 'Array.reduce()'
}