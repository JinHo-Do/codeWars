var assert = require('chai').assert;
var revrot = require('./reverse-or-rotate');

describe("revrot",function() {
  it("Basic tests",function() {
    assert.equal(revrot("1234", 0), "");
    assert.equal(revrot("", 0), "");
    assert.equal(revrot("1234", 5), "");
    s = "733049910872815764"
    assert.equal(revrot(s, 5), "330479108928157");
  });
});
