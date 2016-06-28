var uniqueRandomArray = require('unique-random-array');
var movesList = require('./moves.json');

var getRandomMove = uniqueRandomArray(movesList);

module.exports = {
  all: movesList,
  random: function(number) {
    if (!number) {
      return getRandomMove();
    } else {
      var randomMoves = [];
      for (var i = 0; i < number; i++) {
        randomMoves.push(getRandomMove());
      }
      return randomMoves;
    }
  }
};
