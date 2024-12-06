// src/calculator.test.ts

import { add, subtract, multiply, divide, exponentiate, squareRoot, factorial } from './calculator';

describe('Calculator', () => {
  // Test Addition
  test('adds two positive numbers', () => {
    expect(add(3, 5)).toBe(8);
  });

  test('adds two negative numbers', () => {
    expect(add(-3, -5)).toBe(-8);
  });

  // Test Subtraction
  test('subtracts two numbers', () => {
    expect(subtract(10, 5)).toBe(5);
  });

  // Test Multiplication
  test('multiplies two numbers', () => {
    expect(multiply(3, 5)).toBe(15);
  });

  test('multiplies with zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  // Test Division
  test('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  // Test Exponentiation
  test('exponentiates a number', () => {
    expect(exponentiate(2, 3)).toBe(8);
  });

  test('exponentiates a negative base', () => {
    expect(exponentiate(-2, 3)).toBe(-8);
  });

  // Test Square Root
  test('calculates the square root of a positive number', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('throws error when calculating square root of negative number', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take the square root of a negative number');
  });

  // Test Factorial
  test('calculates factorial of a number', () => {
    expect(factorial(5)).toBe(120);
  });

  test('throws error when calculating factorial of a negative number', () => {
    expect(() => factorial(-1)).toThrow('Cannot compute the factorial of a negative number');
  });

  // Additional Tests for Edge Cases
  test('divides with floating-point precision', () => {
    expect(divide(10, 3)).toBeCloseTo(3.3333333333, 10);
  });

  test('adds non-numeric values and throws error', () => {
    expect(() => add(5, 'a' as any)).toThrow('Invalid input');
  });

  test('throws error when subtracting invalid numbers', () => {
    expect(() => subtract('a' as any, 5)).toThrow('Invalid input');
  });
});
