function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  if (isNaN(a) || isNaN(b)) {
    return null;
  }
  return a / b;
}

function average(values) {
  if (values.length === 0) {
    return null;
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function subtract(a, b) {
  return a - b;
}

function isEven(value) {
  return value % 2 === 0;
}

function max(values) {
  if (values.length === 0) {
    return null;
  }
  return Math.max(...values);
}

module.exports = {
  sum,
  multiply,
  divide,
  average,
  subtract,
  isEven,
  max
};