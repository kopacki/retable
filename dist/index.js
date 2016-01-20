'use strict';

var _hello = require('./hello.json');

var _hello2 = _interopRequireDefault(_hello);

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomItem = (0, _uniqueRandomArray2.default)(_hello2.default);

module.exports = {
	all: _hello2.default,
	random: random
};

function random(number) {
	if (number === undefined) {
		return getRandomItem();
	} else {
		var items = [];
		for (var i = 0; i < number; i++) {
			items.push(getRandomItem());
		}
		return items;
	}
}
