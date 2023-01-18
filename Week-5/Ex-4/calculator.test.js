const calculator = require("./calculator.js");

describe("sum suite", function () {
  test("addition", () => {
    console.log(calculator.sum(1, 2));
    expect(calculator.sum(1, 2)).toBe(3);
  });
  test("substraction", () => {
    console.log(calculator.diff(3, 5));
    expect(calculator.diff(3, 5)).toBe(-2);
  });
  test("multiplication", () => {
    console.log(calculator.sum(4, 5));
    expect(calculator.prodct(4, 5)).toBe(20);
  });
});
