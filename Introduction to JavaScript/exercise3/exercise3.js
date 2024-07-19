// Conditional Statements (if-else)
function checkAge(age) {
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    }
}

// For Loop
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// While Loop
function countdown(start) {
    let i = start;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}

// Continue Statement 
function printOddNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
}

// Break Statement
function findFirstMultiple(n, multiple) {
    for (let i = 1; i <= n; i++) {
        if (i % multiple === 0) {
            return i;
        }
    }
    return undefined;
}

// (if-else)
checkAge(20);

// For Loop
console.log("Numbers from 1 to 5:");
printNumbers(5);

// While Loop
console.log("Counting down from 3:");
countdown(3);

// Continue Statement
console.log("Odd numbers up to 10:");
printOddNumbers(10);

// Break Statement
let firstMultiple = findFirstMultiple(20, 5);
console.log(`First multiple of 5 between 1 and 20: ${firstMultiple}`);
