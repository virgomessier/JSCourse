'use strict';

if (1) {
	console.log('okay');
} else  {
	console.log('error');
}


const num1 = 50;

if (num1 <= 49 ) {
	console.log('error');
} else if (num1 > 100) {
	console.log('слишком много');
} else {
	console.log('Отличная сумма');
}



(num1 === 50) ? console.log('Отличная сумма') : console.log('error');



const num3 = 51;

switch (num3) {
case 49:
	console.log('неверно');
	break;		
case 100:
	console.log('неверно');
	break;
case 50:
	console.log('В точку');
	break;
default:
	console.log('не в этот раз');
	break;
}