// Callbacks

/*
Key Points:

1. Passing a function as an argument
    - a callback is simply a function that is passed to another function to be "called back" later
    - it provides flexibility, allowing a function to determine later what specific action to take

2. Used for async operations
    - common in scenarios like HTTP requests, reading files, timers, and event listeners
    - prevent blocking the main thread while waiting for an operation to complete

3. Execution timing
    - callback function only executed after main function finishes its task or when a specific event 
      occurs
*/

function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!

// Callbacks are often used in asynchronous functions, such as setTimeout:

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 2000); // Simulate a 2-second delay
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);
// Output:
// Fetching data...
// Data fetched!
// Processing data...

// Callback Hell
// When callbacks are nested too deeply, code can become hard to read and maintain.

asyncOperation1((result1) => {
    asyncOperation2(result1, (result2) => {
        asyncOperation3(result2, (result3) => {
            console.log("Final result:", result3);
        });
    });
});



// Promise

/*
A Promise represents a value that will be available in the future. 
It is an object that can be in one of three states:
	•	Pending: The initial state; the operation has not completed yet.
	•	Fulfilled: The operation completed successfully, and the promise has a resulting value.
	•	Rejected: The operation failed, and the promise has an error or reason for the failure.
 */

const promise = new Promise((resolve, reject) => {
    // Simulate an async operation
    let success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed.");
    }
});

// Using the promise
promise
    .then((result) => console.log(result))  // Executes if resolved
    .catch((error) => console.error(error))  // Executes if rejected
    .finally(() => console.log("Operation completed"));

/**
 * then: Used to handle the result of a successful promise.
 * catch: Used to handle errors or rejected promises.
 * finally: Executes code after the promise is settled (fulfilled or rejected).
*/




// Async Functions
// An async function is a function that implicitly returns a promise. 
// It allows you to write asynchronous code in a way that looks synchronous, making it easier to read and maintain.

async function example() {
    return "Hello, world!";
}

// Equivalent to:
function example() {
    return Promise.resolve("Hello, world!");
}

// Usage
example().then(console.log); // Output: "Hello, world!"

/**
 * An async function always returns a promise.
 * If the function returns a value, that value is automatically wrapped in a resolved promise.
 * If an error is thrown inside an async function, the returned promise is rejected with that error.
 */



// Await
// The await keyword is used inside async functions to pause execution until a promise is resolved. 
// It simplifies working with promises by eliminating the need for chaining .then().

async function fetchData() {
    console.log("Fetching data...");
    let result = await new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched!"), 2000);
    });
    console.log(result);
}

fetchData();
// Output:
// Fetching data...
// (2-second delay)
// Data fetched!

/**
 * await pauses the execution of the async function until the promise resolves.
 * The await keyword can only be used inside an async function.
 * If the promise is rejected, it throws an error that you can handle with a try...catch block.
 */



// Combining async, await, and promises:

async function getData() {
    try {
        console.log("Start fetching...");
        let data = await new Promise((resolve, reject) => {
            setTimeout(() => resolve("Data is ready!"), 2000);
        });
        console.log(data); // Logs "Data is ready!"
    } catch (error) {
        console.error("Error:", error);
    } finally {
        console.log("Operation completed.");
    }
}

getData();
// Output:
// Start fetching...
// (2-second delay)
// Data is ready!
// Operation completed.

/*
Advantages
    1.	Improved Readability: async/await makes asynchronous code look more like synchronous code.
	2.	Error Handling: Use try...catch for handling errors, which is more intuitive than .catch.
	3.	Avoid Callback Hell: By using promises and async/await, deeply nested callbacks are avoided.
 */

/*
When to Use Promises vs. Async/Await:
	•	Use Promises if you’re working with libraries or APIs that already use promises.
	•	Use Async/Await when you want cleaner and more readable code for asynchronous workflows.
*/