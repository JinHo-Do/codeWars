var assert = require('chai').assert;
var f = require('./sum-of-many-ints');

describe('', function() {
  it('f(10, 5)', function() {
    assert.equal(f(10, 5), 20);
  });

  it('f(20, 20)', function() {
    assert.equal(f(20, 20), 190);
  });

  it('f(15, 10)', function() {
    assert.equal(f(15, 10), 60);
  });
});
