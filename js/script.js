'use strict';
let num = 20;

function showFirstMessage(text) {
	let num = 10;
	console.log(text);
	console.log(num);
}

showFirstMessage('Hello World');

console.log(num);

function calc(a, b) {
	return (a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
	let num = 50;
	return num;
}
const anotherNum = ret();
console.log(anotherNum);


//Function Expression
const logger = function() {
	console.log('hello');
};
logger();

const calcNew  = (a, b) => a + b;

const calcNew2 = a => a + b;

const calcNew3 = (a, b) => {
	console.log('1');
	return a + b;
};


// Замыкание функции
function createCounter() {
	let counter = 0;
	const myFunction = function() {
		counter = counter + 1;
		return counter;
	};
	return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);




function preBind() {
	const person1 = {name: 'Михаил', age: 22, job: 'Frontend'};
	const person2 = {name: 'Елена', age: 19, job: 'SMM'};
	return function() {
		console.log(`Person: ${person1.name}, ${person1.age}, ${person1.job}`);
		console.log(`Person: ${person2.name}, ${person2.age}, ${person2.job}`);
	};
}

const bind = preBind();

bind();