// Conditional statements are used to run a block of code if certain condition is true.
// The ´if´ keyword is one of this statements, and it's used this way:

/*
  if (condition){
   *code to be executed*
  } 
*/

if (4>3){
    console.log("4 is greater than 3") // ✅ This will be executed.
 }

if (4<3){console.log("4 is less than 3")} // ❌ This will NOT be executed because of the condition.


 // If we want to execute a block of code when the condition is false, we use the ´else´ keyword:

if(4<3){
    console.log("4 is less than 3") // ❌ This will NOT be executed.
} else{
    console.log("4 is greater or equal to 3") // ✅ This will be executed.
}
console.log("This line is outside of any condition") // ✅ This will be executed.

/*
 Comparing values is commonly used in conditions, here are some comparison operators:
 - `==`  for Equal to.
 - `===` for Strict equal to.
 - `!=`  for Not equal to.
 - `!==` for Strict not equal to.
 - `>`   for Greater than.
 - `>=`  for Greater than or equal to.
 - `<`   for Less than.
 - `<=`  for Less than or equal to.
 */


 // Now, to check multiple conditions it's used ´else if´ as following:

if(4<3){
    console.log("4 is less than 3") // ❌ This will NOT be executed.
}else if(4>3){
    console.log("4 is greater or equal to 3") // ✅ This will be executed.
}else if(4===4){
    console.log("4 is equal to 4") // ❌ This will NOT be executed.
}                      // (This happens because the control flow has already met a true condition, so it will skip the any other condition)

//-----------------------------------------------------

let a=4,b=3
if(a<b){
    console.log(a+" is less than "+b) // ❌ This will NOT be executed.
}else if(a===b){
    console.log(a+" is equal to "+b) // ❌ This will NOT be executed.
}else{
    console.log(a+" is greater than "+b) // ✅ Output: 4 is greater than 3
}