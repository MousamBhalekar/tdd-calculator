// Addition
export const add = (a: number, b: number): number => {
    if (!isValidNumber(a) || !isValidNumber(b)) {
      throw new Error('Invalid input');
    }
    return a + b;
  };
  
  // Subtraction
  export const subtract = (a: number, b: number): number => {
    if (!isValidNumber(a) || !isValidNumber(b)) {
      throw new Error('Invalid input');
    }
    return a - b;
  };
  
  // Multiplication
  export const multiply = (a: number, b: number): number => {
    if (!isValidNumber(a) || !isValidNumber(b)) {
      throw new Error('Invalid input');
    }
    return a * b;
  };
  
  // Division
  export const divide = (a: number, b: number): number => {
    if (!isValidNumber(a) || !isValidNumber(b)) {
      throw new Error('Invalid input');
    }
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    const result = a / b;
    const EPSILON = 1e-10;
    if (Math.abs(result - Math.round(result)) < EPSILON) {
      return Math.round(result);
    }
    return result;
  };
  
  // Exponentiation
  export const exponentiate = (a: number, b: number): number => {
    if (!isValidNumber(a) || !isValidNumber(b)) {
      throw new Error('Invalid input');
    }
    return Math.pow(a, b);
  };
  
  // Square Root
  export const squareRoot = (a: number): number => {
    if (!isValidNumber(a)) {
      throw new Error('Invalid input');
    }
    if (a < 0) {
      throw new Error('Cannot take the square root of a negative number');
    }
    return Math.sqrt(a);
  };
  
  // Factorial
  export const factorial = (a: number): number => {
    if (!isValidNumber(a)) {
      throw new Error('Invalid input');
    }
    if (a < 0) {
      throw new Error('Cannot compute the factorial of a negative number');
    }
    let result = 1;
    for (let i = 1; i <= a; i++) {
      result *= i;
    }
    return result;
  };
  
  // Type Guard for Valid Numbers
  export const isValidNumber = (a: any): a is number => {
    return typeof a === 'number' && !isNaN(a);
  };
  