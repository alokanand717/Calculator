const calculator = require('../src/calculator');

test('adds 10 + 5 to equal 15', () => {
    expect(calculator.add(10, 5)).toBe(15);
});

test('subtracts 10 - 5 to equal 5', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});