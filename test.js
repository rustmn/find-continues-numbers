const assert = require('assert');
const findContinuesNumbers = require('./index');

const tests = [
  {
    input: [1,2,3,4,5,6,7,8],
    output: '1-8'
  },
  {
    input: [1,3,4,5,6,7,8],
    output: '1,3-8'
  },
  {
    input: [1,3,4,5,6,7,8,10,11,12],
    output: '1,3-8,10-12'
  },
  {
    input: [1,3,4,5,6,7,8,10,11,12],
    output: '1,3-8,10-12'
  },
  {
    input: [1,2,3],
    output: '1-3'
  },
  {
    input: [1,2],
    output: '1,2'
  },
  {
    input: [1,2,4],
    output: '1,2,4'
  },
  {
    input: [1,2,4,5,6],
    output: '1,2,4-6'
  },
  {
    input: [1,2,3,7,8,9,15,17,19,20,21],
    output: '1-3,7-9,15,17,19-21'
  },
  {
    input: [1,2,3,4,5,6,100,1091,1999,2000,2001,2002],
    output: '1-6,100,1091,1999-2002'
  },
  {
    input: [1],
    output: '1'
  },
  {
    input: [1,3,5,7,9,11],
    output: '1,3,5,7,9,11'
  }
];

describe('findContinuesNumbers testing with test cases defined in technical task', () => {
  tests.forEach(({ input, output }) => {
    it(`${input} -> ${output}`, async () => {
      const exec = await findContinuesNumbers(input);
      assert.strictEqual(exec, output);
    });
  });
});