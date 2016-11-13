var assert = require('chai').assert;
var findArr = require('./find-a-bunch-of-common-elements-of-two-lists-in-a-certain-range.js');

describe("Basic Tests", function(){
  it("Simple Cases", function(){
    var arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3];
    var arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0];
    var rng = [-4, 4];
    var wanted = 'odd';
    assert.equal(findArr(arrA, arrB, rng, wanted), [1, 3]);

    arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4];
    arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4];
    rng = [-4, 4];
    wanted = 'even';
    assert.equal(findArr(arrA, arrB, rng, wanted), [0, 2, 4]);

    arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4];
    arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4];
    rng = [-4, -1];
    wanted = 'even';
    assert.equal(findArr(arrA, arrB, rng, wanted), []);
  });
});
