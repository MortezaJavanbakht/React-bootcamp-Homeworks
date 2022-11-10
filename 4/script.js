class Calculator {
    calculate(inputString) {
        const [firstNumber, operator, secondNumber] = inputString.split(" ");
        return this[operator](+firstNumber, +secondNumber);
    }

    "+" = (a, b) => a + b;
    "-" = (a, b) => a - b;

    addMethod(name, func) {
        this[name] = func;
    }
}

let calc = new Calculator()
console.log(calc.calculate("3 + 7"))
console.log(calc.calculate("3 - 7"))
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("3 * 7"))
console.log(calc.calculate("3 / 7"))
console.log(calc.calculate("3 ** 7"))

