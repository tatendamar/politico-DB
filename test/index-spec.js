const chai = require('chai');
const expect = chai.expect;

chai.should();

function isEven(num) {
  return num % 2 === 0;
}

describe('isEven', () => {
  it('should return true when number is even ', () => {
    isEven(4).should.be.true;
  });
  it('should return false when number is odd', () => {
    expect(isEven(5)).to.be.false;
  });
});

function add(num1, num2) {
  return num1 + num2;
}

describe('add without setup/teardown', () => {
  let num;
  beforeEach(() => {
    num = 5;
  });

  it('should be ten when adding 5 to 5', () => {
    num = add(num, 5);
    num.should.equal(10);
  });
});
