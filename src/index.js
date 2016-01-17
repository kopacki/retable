var hello = require('./hello.json');
var unique = require('unique-random-array');

module.exports = {
	all: hello,
	random: unique(hello)
};
