var assert = require('chai').assert;
var factorial = require('./large-factorials.js');

describe ('test', function() {
  it ('test', function() {
    assert.equal(factorial(1), '1', '1!');
    assert.equal(factorial(5), '120', '5!');
    assert.equal(factorial(9), '362880', '9!');
    assert.equal(factorial(15), '1307674368000', '15!');
  });

});
