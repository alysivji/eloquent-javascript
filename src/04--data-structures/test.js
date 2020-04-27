var exercise = require('./exercise.js');
var assert = require('assert');


describe("Calculate a Range", function () {
  describe("test case 1", function () {
    it('do it', function () {
      assert.deepEqual(exercise._test.range(1, 10, 2), [1, 3, 5, 7, 9]);
    })
  })

  describe("test case 2", function () {
    it('do it', function () {
      assert.deepEqual(exercise._test.range(5, 2, -1), [5, 4, 3, 2]);
    })
  })
});

describe("Sum a Range", function () {
  describe("test case 1", function () {
    it('do it', function () {
      assert.deepEqual(exercise._test.sum(exercise._test.range(1, 10, 2)), 25);
    })
  })

  describe("test case 2", function () {
    it('do it', function () {
      assert.deepEqual(exercise._test.sum(exercise._test.range(5, 2, -1)), 14);
    })
  })
});

describe("Reversing Arrays", function () {
  describe("New array", function () {
    it('do it', function () {
      assert.deepEqual(exercise._test.reverseArray([1, 2, 3]), [3, 2, 1]);
    })
  })

  describe("New array", function () {
    it('do it', function () {
      assert.deepEqual(exercise._test.reversedArrayInPlace([1, 2, 3]), [3, 2, 1]);
    })
  })
});

describe("List to Array", function () {
  describe("Property test", function () {
    it('do it', function () {
      values = [1, 2, 3];
      assert.deepEqual(exercise._test.listToArray(exercise._test.arrayToList(values)), values);
    })
  })

  describe("nth", function () {
    it('given list', function () {
      values = [1, 2, 3];
      assert.equal(exercise._test.nth(exercise._test.arrayToList(values), 2), 3);
    })
  })
});
