var uniqueRandomArray = require('unique-random-array');
var pokemonNames = require('./pokemon.json');

module.exports = {
	all: pokemonNames,
	random: uniqueRandomArray(pokemonNames)
};