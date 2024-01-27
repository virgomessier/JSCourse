'use strict';

for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
		
	}
}

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {
	for (let j = 0; j < i; j++) {
		result += '*';
	}
	result += '\n';
}
console.log(result);


first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;
			console.log(`Third level: ${k}`);
			
		}
		
	}
}


for (let i = 5; i < 11; i++) {
	console.log(i);
}

firstCycle: for (let i = 20; i > 9; i--) {
	if (i === 13) break firstCycle;
	console.log(i);
}

// firstCycle: for (let i = 2; i < 11; i++) {
// 	console.log(i); 
// 	for (let j = 4; j < 11; j++) {
// 		console.log(j);
// 		for (let k = 6; k < 11; k++) {
// 			console.log(k);
// 			for (let l = 8; l < 11; l++) {
// 				console.log(l);
// 				for (let m = 10; l < 11; m++) {
// 					console.log(m);
// 					if (m === 10) break firstCycle;
// 				}
// 			}
// 		}
		
// 	}
// }

// вывод в консоль четных чисел
for (let i = 2; i <= 10; i++) {
	if (i % 2 === 1) {
		continue;
	} else {
		console.log(i);
	}
}

// Вывод в консоль нечетных чисел
for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

let i = 2;
while (i < 16 ) {
	i++;
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}



const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
	arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);



