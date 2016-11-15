var assert = require('chai').assert;
var array_diff = require('./array-dot-diff.js');

describe("Solution", function(){
  it("should test for something", function(){
    assert.equal(array_diff([1, 2], [1]), [2]);
  });
  
  it("should test for something", function(){
    assert.equal(array_diff([1, 2, 2, 2, 3], [2]), [1, 3]);
  });
});
