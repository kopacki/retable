import hello from './hello.json';
import unique from 'unique-random-array';

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