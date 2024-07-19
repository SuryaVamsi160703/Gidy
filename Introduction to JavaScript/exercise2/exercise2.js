function greet(name) {
    console.log(`Hello, ${name}! Welcome to the chat.`);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: division by zero";
    }
    return a / b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function square(num) {
    return num * num;
}

function cube(num) {
    return num * num * num;
}

function remainder(a, b) {
    return a % b;
}

function isEven(num) {
    return num % 2 === 0;
}

// Example usage of each function:
greet("Surya");

let sum = add(5, 3);
console.log(`Sum: ${sum}`);

let difference = subtract(10, 4);
console.log(`Difference: ${difference}`);

let product = multiply(7, 2);
console.log(`Product: ${product}`);

let division = divide(15, 3);
console.log(`Division: ${division}`);

let result = power(2, 3);
console.log(`Power: ${result}`);

let squared = square(4);
console.log(`Square: ${squared}`);

let cubed = cube(3);
console.log(`Cube: ${cubed}`);

let remainderValue = remainder(17, 5);
console.log(`Remainder: ${remainderValue}`);

let evenCheck = isEven(6);
console.log(`Is 6 even? ${evenCheck}`);
