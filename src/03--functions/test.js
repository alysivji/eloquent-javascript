var exercise = require('./exercise.js');
var assert = require('assert');


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


describe("Is Even", function () {
  describe("test case 1", function () {
    it('50', function () {
      assert.equal(exercise._test.isEven(50), true);
    })
  })

  describe("test case 2", function () {
    it('75', function () {
      assert.equal(exercise._test.isEven(75), false);
    })
  })
});


describe("Count Bs", function () {
  describe("test case 1", function () {
    it('BbB', function () {
      assert.equal(exercise._test.countBs("BbB"), 2);
    })
  })

  describe("test case 2", function () {
    it('abc', function () {
      assert.equal(exercise._test.countBs("abc"), 0);
    })
  })
});
