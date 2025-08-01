/*
 A loop is basically a block of code that will be repeated over and over again until certain condition becomes false.
 This is the sintax for a `while` loop:

 while (condition){
   code to be repeated.
 }
*/
let number=7, guess=Math.floor(Math.random()*10+1);
while(number != guess){                                      // Repeat until both variables are equal.
    console.log("No, my number is not "+guess)
    guess=Math.floor(Math.random()*10+1)                     // The computer will try to "guess" the number again.
}
console.log("Yeah! "+number+" is the number I was thinking") // This will be executed once the loop is ended.

/*
 Another kind of loop is the `for` loop. Unlike `while`, with `for` we can set an ammount of times to be repeated.
 Here's the sintax:

 for(initial value; condition; intial value increment){
   code to be repeated.
 }
 
 The 'initial value increment' refers to the initial value being incremented, so it's possible to end the loop.
 Imagine the initial value is 'i=0' if we type 'i++' as increment, the next time the loop is repeated, 'i' will be incremented by 1.
*/
for(let i=0 ; i<=10 ; i++){
    console.log(i);  // Will print numbers from 0 to 10, each in a new line.
}

// There are some keywords that let us navigate loops in certain ways..
// For example, the `continue` keyword skip the code below inside the loop when a condition is met.
// Once the code is skipped, the loop keeps active if their condition its true.

for (let i=0;i<5;i++) {
  if (i==1) {
    continue;
  }
  console.log(i); // Output: 0 2 3 4
}

// Next, the `break` keyword helps us finish a loop before its condition becomes false.

for (let i=0;i<5;i++) {
  if (i==3) {
    break;
  }
  console.log(i); // Output: 0 1 2
}