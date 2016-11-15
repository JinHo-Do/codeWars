var assert = require('chai').assert;
var trickOrTreat = require('./halloween-trick-or-treat.js');

describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

    assert.equal(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy"]])
    , "Thank you, strange uncle!");

    assert.equal(trickOrTreat(3,[["candy","apple"],["apple","candy"],["candy","apple"]])
    , "Trick or treat!");

    assert.equal(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy","candy"]])
    , "Trick or treat!");

    assert.equal(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"]])
    , "Trick or treat!");

    assert.equal(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","bomb","candy"]])
    , "Trick or treat!");

  });
});
