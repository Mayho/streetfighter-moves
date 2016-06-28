var uniqueRandomArray = require('unique-random-array');
var movesList = require('./moves.json');

module.exports = {
  all: movesList,
  random: uniqueRandomArray(movesList)
};
