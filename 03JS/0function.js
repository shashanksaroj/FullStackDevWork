// Simple Function Declaration
function greet() {
    console.log("Hello, Welcome to JavaScript Functions!");
}

// Function with Parameters
function greetUser(name) {
    console.log("Hello " + name + ", good to see you!");
}

// Function with Return Value
function addNumbers(a, b) {
    let sum = a + b;
    return sum;
}

// Function with Default Parameters
function multiply(a, b = 1) {
    return a * b;
}

// Calling Functions
greet();                           // Output: Hello, Welcome to JavaScript Functions!

greetUser("Arfain");                // Output: Hello Arfain, good to see you!
greetUser("Shashank");              // Output: Hello Shashank, good to see you!

let result = addNumbers(5, 10);
console.log("Sum is:", result);     // Output: Sum is: 15

console.log(multiply(4, 3));        // Output: 12
console.log(multiply(7));           // Output: 7 (uses default b = 1)
