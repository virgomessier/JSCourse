'use strict';


function calculateVolumeAndArea(num) {
	if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
		return 'При вычислении произошла ошибка';
	} else {
		let a = num * num * num;
		let b = 6 * num * num;
		return `Объем куба: ${a}, площадь всей поверхности: ${b}`;
	}
}

calculateVolumeAndArea(15);

function getCoupeNumber(placeNum) {
	if (typeof(placeNum) !== 'number' || placeNum < 0 || !Number.isInteger(placeNum)) {
		return console.log('Ошибка. Проверьте правильность введенного номера места');
	} else if (placeNum === 0 || placeNum > 36) {
		return console.log('Таких мест в вагоне не существует');
	} else {
		let secondCycle = 0;
		for (let i = 1; i <= 9; i++) {
			for (let j = 1; j <= 4; j++) {
				secondCycle = secondCycle + 1;
				if (placeNum === secondCycle) {
					return console.log(`Ваш номер купе: ${i}`);
				}
			}	
		}
	}
}
getCoupeNumber(16);


function findMaxNumber(num1, num2, num3, num4) {
	if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof(num3) !== 'number' || typeof(num4) !== 'number') {
		return console.log(0);
	}	else if (num1 < 0 || num2 < 0 || num3 < 0 || num4 < 0 ) {
		return console.log('Ошибка, проверьте данные');
	} else if (findMaxNumber() < 4) {
		return console.log(0);
	} else if (num1 > num2 && num1 > num3 && num1 > num4) {
		return console.log(num1);
	} else if (num2 > num1 && num2 > num3 && num2 > num4) {
		return console.log(num2);
	} 	else if (num3 > num1 && num3 > num2 && num3 > num4) {
		return console.log(num3);
	} 	else if (num4 > num1 && num4 > num2 && num4 > num3) {
		return console.log(num4);
	}
}

findMaxNumber(4, 545, 76, 634);