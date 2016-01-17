/**
 * Created by youngmoon on 1/18/16.
 */

var expect = require('chai').expect;
var starWars = require('./index');

describe('names', function () {
  describe('all', function () {
    it('should be an array of strings', function () {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contains `Hello 3`', function () {
      expect(starWars.all).to.include('hello3');
    });
  });

  describe('random', function () {
    it('should be random', function () {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });
  });
});