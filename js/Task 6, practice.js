'use strict';


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

// первый способ записи
for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его', '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}
console.log(personalMovieDB);

// второй спобос записи наоборот
// for (let i = 0; i < 2; i++) {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 		b = prompt('На сколько оцените его', '');
// 	if (a == null || b == null || a == '' || b == '' || a.length > 50 || b.length > 50) {
// 		console.log('error');
// 		i--;
// 	} else {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	}
// }

// третий вариант записи 
// for (let i = 0; i < 2; i++) {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 		b = prompt('На сколько оцените его', '');
// 	(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) 
// 		? personalMovieDB.movies[a] = b
// 		: i--;
// }

// четвертый вариант
let flag = true;
 
again:  while(flag) {
	const movie = prompt('Один из последних просмотренных фильмов?', '');
	if(!movie || movie.length > 50) {continue again;}

	const rate  = prompt('На сколько оцените его?', ''); 
	if(!rate || rate.length > 50) {continue again;}

	personalMovieDB.movies[movie] = rate;
	flag = +confirm('Продолжаем ?');
}

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
}	else {
	console.log('Произошла ошибка');
}
console.log(personalMovieDB);