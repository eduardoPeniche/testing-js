const { sum, multiply, divide, average, subtract, isEven, max } = require('./02-math');

test("add 1 + 3 should be 4", () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
});

test("should multiply", () => {
  const result = multiply(1, 4);
  expect(result).toBe(4);
});

test("should divide", () => {
  const result = divide(6, 3);
  expect(result).toBe(2);
  const result2 = divide(6, 2);
  expect(result2).toBe(3);
  const result3 = divide(6, 0);
  expect(result3).toBe(null);
  const result4 = divide("notanumber", 2);
  expect(result4).toBe(null);
  const result5 = divide(2, "notanumber");
  expect(result5).toBe(null);
});

test("should average of 3, 7, 11", () => {
  const values = [3, 7, 11];
  const result = average(values);
  expect(result).toBe(7);
  const result2 = average([]);
  expect(result2).toBe(null);
});

test("should subtract", () => {
  const result = subtract(10, 3);
  expect(result).toBe(7);
  const result2 = subtract(3, 10);
  expect(result2).toBe(-7);
});

test("check if number is even", () => {
  const result = isEven(10);
  expect(result).toBe(true);
  const result2 = isEven(3);
  expect(result2).toBe(false);
  const result3 = isEven(0);
  expect(result3).toBe(true);
});

test("find max value in array", () => {
  const result = max([4, 8, 1]);
  expect(result).toBe(8);
  const result2 = max([]);
  expect(result2).toBe(null);
});