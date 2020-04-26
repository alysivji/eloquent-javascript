var exercise = require('./exercise.js');
var assert = require('assert');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe("Minimum", function () {
  describe("test case 1", function () {
    it('should return 3 when asking for min of 3 and number great than 3', function () {
      assert.equal(exercise._test.min(3, 5), 3);
    })
  })

  describe("test case 2", function () {
    it('should return 3 when asking for min of 3 and number great than 3', function () {
      assert.equal(exercise._test.min(5, 3), 3);
    })
  })
});
