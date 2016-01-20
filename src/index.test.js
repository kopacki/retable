/**
 * Created by youngmoon on 1/18/16.
 */

import { expect } from'chai';
import starWars from './index';

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

    it('should be good', function () {
      var items = starWars.random(3);
      expect(items).to.have.length(3);
      items.forEach(function (item) {
        expect(starWars.all).to.include(item);
      });
    });
  });
});