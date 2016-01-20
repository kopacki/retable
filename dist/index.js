var hello = require('./hello.json');
var unique = require('unique-random-array');
var getRandomItem = unique(hello);

module.exports = {
	all: hello,
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
