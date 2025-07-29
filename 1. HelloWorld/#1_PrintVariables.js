
// This is a comment, it wont be executed. It's used to explain the code; and it can be single-line or multi-line.

/*
 This is a multi-line comment
 It can span multiple lines.
 It's useful for longer explanations.
*/

// To print something in the console in JavaScript, you can use the console.log() function.
console.log("Hello, World!"); // This will print "Hello, World!" to the console.

// Variables in JavaScript are not typed, meaning you don't have to declare their type explicitly.
// To declare variables in JavaScript, it's used the var, let, or const keywords.
var name = "John" // This declares a variable named "name" and assigns it the value "John".
let age = 30; // This declares a variable named "age" and assigns it the value 30.
const pi = 3.14 // This declares a constant named "pi" and assigns it the value 3.14.

/*
 `var` is used for variables that can be re-assigned.
 `let` is used for block-scoped variables that can be re-assigned.
 `const` is used for block-scoped variables that cannot be re-assigned, it's constant.
 However, `var` is function-scoped and can lead to unexpected behavior if not used carefully. So it's generally recommended to use `let` and `const` instead.

 We can also print variables to the console or re-assign their values, even with another type of value.
 This is because JavaScript is dynamically typed, meaning variables can hold values of any type and can change types.
*/
console.log(age); // This will print "30" to the console.
age = 25 // This re-assigns the value of "age" to 25.
console.log("New age: "+age); // This will now print "New age: 25" to the console.
name = 3.5 // This re-assigns the value of "name" to 3.5, which is a number.
console.log(name); // This will print "3.5" to the console.
// As you may thought, it's not possible to re-assign a value to a constant variable, like 'pi'.

// Finally, in JavaScript it's not necessary to put a `;` at the end of any line.