'use strict'

var nums = [8, 9, 2, 6, 7, 11, 14]

// :1 Filter only even numbers using a for loop

// var filteredNums = []

// for(var i = 0; i < nums.length; i++){
//     if(nums[i] % 2 === 0) filteredNums.push(nums[i])    
// }
// console.log(filteredNums)
    
// :2 Filter only even numbers using a Array.forEach()

// var filteredNums = []

// nums.forEach(num => {
//     if(num % 2 === 0) filteredNums.push(num)
// })
// console.log(filteredNums)

// :3 Filter only even numbers using a Array.filter()

// const filteredNuns = nums.filter(num => num % 2 === 0)
// console.log(filteredNuns)
// console.log(nums)

// :4 Filter only students with grades above 70 

var students = [
    {name: 'Buli', grade: 89},
    {name: 'Kuli', grade: 76},
    {name: 'Muli', grade: 100},
    {name: 'Kuti', grade: 10}
]

// const goodStudents = students.filter(student => student.grade > 70)
// console.log(goodStudents)

// :5 Filter only students with names which start with K

// const kStudents = students.filter(student => student.name.startsWith('K'))
// console.log(kStudents)

// :6 Copy an array with filter

// const studentsCopy = students.filter(() => true)
// console.log(studentsCopy)

// :6 Let's implement filter()

function filter(arr, func) {
    const filterdItems = []

    for(var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)) filterdItems.push(arr[i])
    }
    return filterdItems
}

const filteredStudents = filter(students, student => student.grade > 70)
console.log(filteredStudents)

{
    document.querySelector('h3').innerText = 'Array.filter()'
}