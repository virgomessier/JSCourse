'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const latestFilm = prompt('Один из последних просмотренных фильмов', ''), 
	rating = prompt('На сколько оцените его?', ''), 
	favoriteFilm = prompt('Любимый фильм', ''), 
	favoriteRating = prompt('Его оценка', '');

personalMovieDB.movies[latestFilm] = rating;
personalMovieDB.movies[favoriteFilm] = favoriteRating;

console.log(personalMovieDB);