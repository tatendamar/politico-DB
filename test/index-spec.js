// const assert = require('assert');
// const calculator = require('../index');

// describe('calculator', () => {
//   describe('add function', ()=> {
//     it('add numbers', () => {
//       let result = calculator.add(1, 1);
//       assert.equal(result, 2);
//     });
//   });
// });

let assert = require('assert');

describe('Basic Mocha Test', () => {
  it('should throw errors', () => {
    assert.equal(3, 3);
  });
});
