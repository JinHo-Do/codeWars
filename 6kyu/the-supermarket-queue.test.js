var chai = require('chai');
var assert = chai.assert;
var queueTime = require('./the-supermarket-queue.js');

describe ('The supermarket Queue', function () {
  it ('should right time', function () {
    assert.equal(queueTime([], 1), 0);
    assert.equal(queueTime([1,2,3,4], 1), 10);
    assert.equal(queueTime([2,2,3,3,4,4], 2), 9);
    assert.equal(queueTime([1,2,3,4,5], 100), 5);
  });
});
