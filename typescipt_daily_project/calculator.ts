type Operator = "+" | "-" | "*" | "/";

function calculator(num1: number, num2: number, operator: Operator): number {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        throw new Error("Cannot divide by zero");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid operator");
  }
}

const resultCalculator = calculator(2,3,"+");
console.log(resultCalculator);