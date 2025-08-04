/*
 A function is a block of code that can be reused over time.
 This is very helpful for tasks that can be repetitive.

 function functionName(parameters){
   code to be executed if called.
 }

 To call a function we can just type its name with the propper parameters in parentheses ():

 functionName(parameters)
 
 Now, a parameter is variable that is needed to have value. Read again the function syntax.
*/
function greetUser(user){
    console.log(`Hello, ${user}!`) // This is another way to print Strings with variables!
}

greetUser('Jhon'); // Output: Hello, Jhon!
greetUser('David') // Output: Hello, David!
greetUser('Luna'); // Output: Hello, Luna!
// Note how the parameter 'user' we defined in our function takes a different value in each call.
// These values are called 'arguments'.
// When calling a funtion without arguments, a *undefined* value will be used for the parameter.

// We can make a function to return a value that can be stored this way:

function sayGoodbye(user, age){
    // The code you want.

    return `Goodbye, ${user}, you're ${age} btw!` // The return line is always the last line of a function that returns smth.
}

let message=sayGoodbye('Jhon',23)
console.log(message) // Output: Goodbye, Jhon, you're 23 btw!

// You can define variables in a function, however you will be able to use them just inside the function.
// In the other hand, you can use variables outside functions, in a function!

let fruit='apple'
function eat(name){
    let eatingMessage=`is eating an ${fruit}!`
    return `${name} ${eatingMessage}`
}
// console.log(eatingMessage); will give you a Reference error because of the function scope.
console.log(eat("Jhon")) // Output: Jhon is eating an apple!