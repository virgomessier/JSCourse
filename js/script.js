'use strict';

let usdCurr = 92;
let gelCurr = 2.7;
let idrCurr = 15600;

const discount = 0.9;

function convert(amount , curr) {
	console.log(amount * curr); 
}

convert(500, usdCurr);
convert(500, gelCurr);
convert(500, idrCurr);



let usdCurr = 92;
let gelCurr = 2.7;
let idrCurr = 15600;

const discount = 0.9;

function convert(amount , curr) {
	return amount * curr;

}

function promotion(result) {
	console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);
convert(500, gelCurr);
convert(500, idrCurr);



function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) {
			return;
		}
	}
	console.log('done');
}
test();

function doNothing() {}

console.log(doNothing() === undefined);


function sayHello(name) {
	return 'Привет, ' + name; 
}
console.log(sayHello('Вера'));

// Моя первая попытка
// function returnNeighboringNumbers(num) { 
// 	for (let i = 1; i < 10; i++) {
// 		for (let j = num; j < 10; j++) {
// 			let arr = [num - i, num, num + 1];
// 			if (j === 9) {
// 				return arr;
// 			}
// 		}
// 	}
// }

// const result = returnNeighboringNumbers(6);
// console.log(result);

// Переосмысление первой попытки
function returnNeighboringNumbers(num) { 
	const arr = [num - 1, num, num + 1];
	return arr;
}


function getMathResult(mainNum, repeatNum) {
	if (typeof(repeatNum) !== 'number' || repeatNum <= 0) {
		return mainNum;
	}

	let str = '';

	for (let i = 1; i <= repeatNum; i++ ) {
		if (i === repeatNum) {
			str += `${mainNum * i}`;
		} else {
			str += `${mainNum * i}---`;
		}
	}
	return str;
}


console.log(getMathResult(5, 3));