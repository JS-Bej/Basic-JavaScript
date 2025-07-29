/*
 Arithmetic operators are used to perform math calculations. We have the following ones:
 + as in addition.
 - as in subtraction.
 * as in multiplication.
 / as in division.
 % as in modulo (will return the remainder of a division)
 ** as in exponent.

 Here are some examples:
*/
let score = 0;

score = 4 + 3;      // score is now 7
score = 4 - 3;      // score is now 1
score = 4 * 3;      // score is now 12
score = (2+4)*(3-5) // score is now -12
score = 4 / 3;      // score is now 1.3333
score = 4 % 3;      // score is now 1
score = 4 ** 3;     // score is now 64

console.log(score); // Output: 64

// The `+` operator can be also used to concatenate strings and numbers.
console.log("The"+" score now is: "+score) // Output: The score now is: 64
console.log(score+6)                      // Output: 70

// But be careful trying to concatenate and make an adittion in the same `console.log()` function.
console.log("Needed score: "+score+34)   // Output: Needed score: 6436