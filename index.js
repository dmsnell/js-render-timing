"use strict"

let node
let bit = true
let count = 5
const times = []

window.onload = () => {
	node = document.getElementById( 'root' )
	
	requestAnimationFrame( toggle )
}

const say = msg => {
	node.innerHTML = `<p>${ msg }</p>`
}

const finish = () => {
	console.log( times.slice( 0, -1 ) )
}

const paintingDone = () => {
	times.push( performance.now() )
}

const toggle = time => {
	times.push( time )
	say( bit ? 'Hi' : 'Hello' )
	bit = ! bit;
	count = count - 1;
	
	setTimeout( paintingDone, 0 )
	
	if ( ! count ) {
		return finish();
	}
	
	requestAnimationFrame( toggle )
}
