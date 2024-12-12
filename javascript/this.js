/**
 * 1. Global context 
 * In the global scope this refers to the global object (i.e. window in browsers or global in Node.js)
*/
console.log(this);


/**
 * 2. Object method 
 * When this is used in a method, it refers to the object the method is called on.
*/
const obj_1 = {
    name: "Alice",
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};
obj_1.greet(); // Output: Hello, Alice!

// However, if you assign the method to a variable, this may lose its context.

const greetFunction = obj_1.greet;
greetFunction(); // Output: Hello, undefined! (in non-strict mode) or TypeError (in strict mode)


/*
3. Constructor Function

In a constructor function or a class, this refers to the instance being created.
*/

function Person(name) {
    this.name = name;
}
const person1 = new Person("Bob");
console.log(person1.name); // Output: Bob


/**
 * 4. Arrow Functions
 * Arrow functions do not have their own this. Instead, this is lexically bound to the surrounding context (explained better in arrowFunctions.js).
*/

const obj_2 = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, ${this.name}`);
    }
};
obj_2.greet(); // Output: Hello, undefined (or error in strict mode)


/**
 * 5. Explicit Binding with call, apply, and bind
 * You can explicitly set the value of this using call, apply, or bind.
 * 
 * call:
 * The call method calls a function with a given this value and arguments provided individually.
 * 
 * apply:
 * The apply method is similar to call, but it takes the function arguments as an array.
 * 
 * bind:
 * The bind method returns a new function where this is permanently set to the provided thisArg. The function is not invoked immediately but can be called later.
 */

// call syntax
// function.apply(thisArg, [argsArray])

// call example
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
  
const person2 = { name: "Bob" };

greet.apply(person2, ["Hi", "?"]); // Output: "Hi, Bob?"

// apply syntax
// function.apply(thisArg, [argsArray])

// apply example
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
  
const person3 = { name: "Bob" };

greet.apply(person3, ["Hi", "?"]); // Output: "Hi, Bob?"

// bind syntax
// const boundFunction = function.bind(thisArg, arg1, arg2, ...)

// bind example
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
  
const person4 = { name: "Charlie" };

const boundGreet = greet.bind(person4, "Hey");
boundGreet("!"); // Output: "Hey, Charlie!"


/**
 * 6. Event listeners
 * In event handlers, this typically refers to the element that fired the event.
 */

const button = document.querySelector("button");
button.addEventListener("click", function () {
    console.log(this); // `this` refers to the button element
});

// If you use an arrow function in the handler, this will refer to the surrounding context instead.

button.addEventListener("click", () => {
    console.log(this); // `this` refers to the global object or undefined in strict mode
});