1) What is the difference between var, let, and const?

Answer:
var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.

let: Declares variables with block scope, allowing updates but not re-declaration within the same block.

const: Declares block-scoped variables that cannot be reassigned after their initial assignment.





2) What is the difference between map(), forEach(), and filter()?

Answer:
map(): It executes the same code on every element in an array and returns a new array with the updated elements.

forEach(): This is used to execute the same code on every element in an array but does not change the array and it returns undefined.

filter():It checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.




3) What are arrow functions in ES6?

Answer:
ES6 Arrow functions enable us to write functions with simpler and shorter syntax and make our code more readable and organised. The arrow functions are introduced in the ES6 version. Arrow functions do not return any value and can be declared without the function keyword.





4) How does destructuring assignment work in ES6?

Answer:
The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. It can be used in locations that receive data (such as the left-hand side of an assignment or anywhere that creates new identifier bindings).



5) Explain template literals in ES6. How are they different from string concatenation?

Answer:
Template literals (introduced in ES6) are a new way to work with strings in JavaScript.
They use backticks (`) instead of single (' ') or double (" ") quotes.
Example:

const name = "Redone";
console.log(`Hello, ${name}!`);  
// Output: Hello, Redone!

const a = 10, b = 20;
console.log(`The sum is ${a + b}`);  
// Output: The sum is 30

