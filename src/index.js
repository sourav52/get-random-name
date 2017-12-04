var uniqueRandomArray = require('unique-random-array');
var pokemonNames = require('./pokemon.json');
var getRandomPokemon = uniqueRandomArray(pokemonNames);

module.exports = {
	all: pokemonNames,
	random: random
};

function random(number) {
	if (number === undefined) {
		return getRandomPokemon();
	}else{
		var randomItems = [];
		for (var i = 0; i < number; i++) {
			randomItems.push(getRandomPokemon());
		}
		return randomItems;
	}
}