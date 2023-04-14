'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('Один из просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
