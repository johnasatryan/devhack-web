// /*
// An Execution Context is an environment where JS code is evaluated and executed.

// There are 3 main type:
//   - Global Execution Context (created by default)
//   - Function Execution Context (one per function call)
//   - Eval Execution Context (rare)
  
// Each execution context has:
//   - Lexical Environment
//      - Environment Record - a data struture that stores variables/functions
//      - Outer lexical Environment Reference - a pointer to its parent context (scope chaining)
//      - Category

// The Lexical Environment is a fancy term for “what variables/functions are available in the 
//  current scope.”
//  - It’s lexical, because scope is determined by the position of code in the source file, 
//  not during runtime.

//  Whenever a function is called:
//   - A new Execution Context is created.
//   - It’s pushed to the Call Stack.
//   - When the function finishes, the context is popped off the stack.
// */

// // 'use strict'

// // greet.name = "James";
// // console.log(Object.getOwnPropertyNames(greet));
// // greet()

// // const person = {
// //   name: "James",
// //   age: 15,
// //   greet: greet
// // };
// // person.greet()
// // // 'use strict'
// function greet() {
//   console.log(`Hi from ${this.name}, age is ${this.age}`);
//   console.log(this);
// }

// // greet()

// // How can we create an object in js?

// // 1. {}

// // 2. constructor function 

// // function Person(name, age) {
// //   this.name = name;
// //   this.age = age;

// //   this.greet = greet;

// // }

// // let p1 = new Person("James", 55);
// // console.log(p1.age);

// // p1.greet()

// // function Student() {

// // }

// // 3. class es6


// // class Person {
// //   // constructor(name, age) {
// //   //   this.name = name;
// //   //   this.age = age;
// //   // }
// //   // greet() {
// //   //   console.log(this.name)
// //   // }

// // //   create(name, age) {
// // //     return {name, age}
// // //   }
// // // }

// // // new Person("James", 55)



// // const fs = new Function('a', 'b', 'return a + b');

// // console.log(fs(1, 2))

// // eval(`
// //   var a = 23;
// //   console.log(a);
// //   `);

// // implicit binding




// const stuff = {
//   food: 'fruit',
//   method: function eat() {
//     console.log(`Person eats ${this.food}`)
//     return "hello animast function"
// }
// };

// // stuff.method();

// let b = stuff.method;
// b();




// const stuff2 = {
//   food: 'popcorn'
// };

// // b.call(stuff2)

// // console.log(stuff2)

// b.chlp = 23;

// function esiminch(arg) {
//   console.log(arg);
//   console.log(this);

// }

// esiminch(32)

// class CustomFunction {
//   constructor() {

//   }
//   // [[call]]
// }

// // function poo() {

// // }

function foo() {
  console.log(this);
}

// foo();

const obj = {
  m: "hello"
};

// obj.m();

foo.customCall = function (context) {
  // console.log(this);
  // this()

  context["chlp"] = this;
  const result = context["chlp"]();

  delete context["chlp"];
  return result;
 
};

foo.customCall(obj)