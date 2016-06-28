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
  });
});
