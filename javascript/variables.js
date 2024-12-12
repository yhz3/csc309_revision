// var

// var is function-scoped, meaning its scope is limited to the function in which it is declared. 
// If declared outside a function, it becomes a global variable.

if (true) {
    var x = 10;
}
console.log(x); // Output: 10

// Variables declared with var can be redeclared within the same scope.
var x = 10;
var x = 20; // Valid

// var declarations are hoisted to the top of their scope but are initialized with undefined.
console.log(a); // Output: undefined
var a = 10;


// let

// let is block-scoped, meaning its scope is restricted to the block, statement, or expression where it is declared.

if (true) {
    let y = 10;
}
console.log(y); // ReferenceError: y is not defined

// Variables declared with let cannot be redeclared within the same scope.
let z = 10;
let z = 20; // SyntaxError

// let declarations are hoisted to the top of their block but are not initialized. 
// Accessing the variable before its declaration results in a Temporal Dead Zone (TDZ) error.
console.log(b); // ReferenceError
let b = 10;


// const

// Like let, const is block-scoped.

if (true) {
    const c = 10;
}
console.log(c); // ReferenceError: c is not defined

// Variables declared with const cannot be redeclared within the same scope.
const d = 10;
const d = 20; // SyntaxError

// Similar to let, const is hoisted but is not initialized, and accessing it before declaration results in a Temporal Dead Zone (TDZ) error.
console.log(e); // ReferenceError
const e = 10;

// Variables declared with const cannot be reassigned. 
// However, if the const variable holds an object or array, the contents of the object/array can still be modified.
const f = 10;
f = 20; // TypeError: Assignment to constant variable

const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed
console.log(obj); // { name: "Bob" }


/*
Key Takeaways:
	•	Use const by default unless you know the value will need to change.
	•	Use let when the variable’s value will change during execution.
	•	Avoid using var in modern JavaScript due to its unpredictable scoping behavior.
 */