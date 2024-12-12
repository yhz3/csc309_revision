/**
* 1. Arrow Functions and Lexical this
* Arrow functions do not have their own this. Instead, they inherit this from the surrounding scope where they are defined.
*/
// Regular function
function RegularFunctionExample() {
    this.value = 10;
  
    function logValue() {
        console.log(this.value);
    }
  
    logValue(); // `this` is undefined or the global object in non-strict mode
}
  
// Arrow function
function ArrowFunctionExample() {
    this.value = 10;
  
    const logValue = () => {
        console.log(this.value);
    };
  
    logValue(); // `this` refers to the ArrowFunctionExample instance
}
  
new RegularFunctionExample(); // undefined
new ArrowFunctionExample(); // 10


/**
 * 2. Arrow Functions Inside Methods
 * In object methods, arrow functions inherit this from the enclosing function or object.
 */

const obj = {
    value: 42,
    regularMethod: function () {
        const logValue = () => {
            console.log(this.value); // Inherits `this` from regularMethod
        };
        logValue();
    },
};
  
obj.regularMethod(); // 42


  /**
   * 3. Arrow Functions Inside Callbacks
   * Arrow funcitons are useful in callbacks where maintaining the correct this context is necessary.
   */

 function Timer() {
    this.seconds = 0;
  
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds); // Correctly logs `this.seconds`
    }, 1000);
 }
  
new Timer();

// In contrast a regular function here would lose the this context. 

function Timer() {
    this.seconds = 0;
  
    setInterval(function () {
        this.seconds++;
        console.log(this.seconds); // Error: `this.seconds` is undefined
    }, 1000);
}


/**
 * 4. Arrow Functions in Event Listeners
 * Arrow functions inherit this from their surrounding scope, which may not always be desirable in event listeners.
 */

const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

button.addEventListener("click", () => {
    console.log(this); // `this` is the outer scope, not the button
});

// In contrast, regular functions set this to the element that triggered the event.

button.addEventListener("click", function () {
    console.log(this); // `this` is the button element
});


/**
 * 5. Arrow Functions in Classes
 * Arrow functions inside classes inherit this from the class instance.
 */

class MyClass {
    constructor() {
        this.name = "MyClass";
    }
  
    regularMethod() {
        const arrowFunction = () => {
            console.log(this.name); // `this` refers to the class instance
        };
  
      arrowFunction();
    }
}
  
const myClass = new MyClass();
myClass.regularMethod(); // "MyClass"


/**
 * 6. Cannot Use new with Arrow Functions
 * Arrow functions are not constructors and cannot be used with new.
 */

const ArrowConstructor = () => {
    this.value = 10;
};
  
try {
    new ArrowConstructor(); // TypeError: ArrowConstructor is not a constructor
} catch (error) {
    console.log(error.message);
}