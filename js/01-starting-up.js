'use strict'

function handleName(item, idx, items) {
	console.log('Handling: ', item, idx, items)
}

init()

function init() {
	var names = ['Kai', 'Pai', 'Mai']

	// :1 Array iteration using a for loop

	for (var i = 0; i < names.length; i++) {
		var currName = names[i]
        handleName(currName, i, names)
	}

	// :2 Array iteration using Array.forEach() with a global function

    // names.forEach(handleName)
    
	// :3 Array iteration using Array.forEach() with an anonymous function

    // names.forEach(function (item, idx, items) { console.log('Handling:', item, idx, items) })
        
    // :4 Array iteration using Array.forEach() with an arrow function

    // names.forEach((item, idx, items) => console.log('Handling:', item, idx, items))
    names.forEach(item => console.log('Hi:', item))
}

{
    document.querySelector('h3').innerText = 'Array.forEach()'
}