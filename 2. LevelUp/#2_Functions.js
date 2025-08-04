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

/*
 There's another way to create functions, but these ones name are "Arrow functions".
 Get used to them, you'll see and use a lot these functions:

 const message = (name) => `Hello, ${name}!`

 First, we see "const message" this is declaring our function's name.
 Then, we see "= (name)" this is just how we declare the parameters.
 Finally, we see " => `Hello, ${name}!`" and this is just the value we want to be returned.
 so:

 const functionName=(parameters)=>value to be returned

 We call the arrow functions like a normal one.
 functionName(arguments)
*/
const arrow=(name)=>`Hello, ${name}!`
console.log(arrow('Juan')) // Output: Hello, Juan!

