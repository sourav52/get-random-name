var expect = require('chai').expect;
var pokemon = require('./index');

describe("pokemon-names",function() {
	it("should work",function() {
		expect(true).to.be.true;
	});

	describe("all",function() {
		it('should be an array of strings',function() {
			expect(pokemon.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			}
		});

		it('should contain `Boomerang`',function() {
			expect(pokemon.all).to.include('Boomerang');
		});
	});

	describe('random',function() {
		it('should return a random name from the pokemon.all',function() {
			var randomItem = pokemon.random();
			expect(pokemon.all).to.include(randomItem);
		});

		it('should return an array of random items if passed a number',function() {
			var randomItems = pokemon.random(3);
			expect(randomItems).to.have.length(3);
			randomItems.forEach(function(item) {
				expect(pokemon.all).to.include(item);
			});
		});
	});
});