/*
 An array is basically a variable that can hold multiple values.
 its syntax is pretty like we assign values to variables:

 let arrayName = [value1, value2, value3, ...]
*/

let fruits=["Avocado","Tomato","Lemon"]
const numbers=[1, 2, 3, 4, 5]

// An array can hold different type of values, like this:

let mix=["Apple",2,false,5.6,undefined,'f']
console.log(mix) // Output: [ 'Apple', 2, false, 5.6, undefined, 'f' ]

// In an array, each value we put, has its own index starting from 0.
// Using de 'mix' array as example: index 0="Apple", index 1=2, index 5="f"

// To access an index, we type the name of the array followed by the index in square brackets []
console.log(mix[0]+" - "+mix[2]) // Output: Apple - false
mix[2]="Pear"
console.log(mix[0]+" - "+mix[2]) // Output: Apple - Pear

// We can know how many values are stored in an array by typing '.length' after the name of that array.
let amount=number.length;
console.log(amount); // Output: 5

// Another way to print an array by its indexes is using a `for` loop:
for(let i=0;i<number.length;i++){
    console.log(number[i])
}

// Finally, we can also add a value to an array this way:
let number=[1,2,3]
number[3]=4;
console.log(number) // Output: [ 1, 2, 3, 4 ]
// However, this is not the best way to add values, we can use the built-in method `push()` instead:
number.push(5,6)
console.log(number) // Output: [ 1, 2, 3, 4, 5, 6 ]
// Or we can add it a the start of the array with `unshift()`:
number.unshift(0)
console.log(number) // Output: [0, 1, 2, 3, 4, 5, 6 ]

// As you can imagine, it's possible to remove values as well.
// This is done with the `shift()` (for start of array) and `pop()` (for end of array) methods.
// (Note that when removing, the methods returns that value)
console.log(number.shift()); // Output: 0
console.log(number); // Output: [ 1, 2, 3, 4, 5, 6 ]
console.log(number.pop()); // Output: 6
console.log(number); // Output: [ 1, 2, 3, 4, 5 ]

// Check out the '#1_Methods.ipynb' file for more info about these methods!