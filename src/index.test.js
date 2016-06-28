var expect = require('chai').expect;
var StreetFighter = require('./index');

describe('streetfighter-moves', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(StreetFighter.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain \'Shoryuken\'', function() {
      expect(StreetFighter.all).to.include('Shoryuken');
    })
  });

  describe('random', function() {
    it('should return a random move from StreetFighter.all', function() {
      var randomMove = StreetFighter.random();
      expect(StreetFighter.all).to.include(randomMove);
    });

    it('should return an array of random items if passed a number', function() {
      var randomMoves = StreetFighter.random(2);
      expect(randomMoves).to.have.length(2);
      randomMoves.forEach(function(move) {
        expect(StreetFighter.all).to.include(move);
      });
    });
  });
});
