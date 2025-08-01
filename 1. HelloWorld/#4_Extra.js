// Math.random() is a method that returns a decimal number between 0 and 1
console.log(Math.random());    // Output example: 0.0236966238022709
console.log(Math.random());    // Output example: 0.7397680104909345
console.log(Math.random());    // Output example: 0.4103022944399179
// Math.floor() rounds a number to the nearest integer.
// So to get a random integer between 0 to 9:
console.log(Math.floor(Math.random()*10)); // Output example: 4
console.log(Math.floor(Math.random()*10)); // Output example: 0
console.log(Math.floor(Math.random()*10)); // Output example: 9

// Rock Paper Scissors:
let player=0, computer=Math.floor(Math.random()*3),result,pchoice,cchoice;

if (player==0){
  pchoice="Rock"
}else if(player==1){
  pchoice="Paper"
}else{
  pchoice="Scissors"
}

if (computer==0){
  cchoice="Rock"
}else if(computer==1){
  cchoice="Paper"
}else{
  cchoice="Scissors"
}

if(player==0){
  if(computer==0){
   result="It's a tie!"
  }else if(computer==1){
   result="The computer won!"
  }else{
   result="The player won!"
  }
}else if(player==1){
  if(computer==0){
   result="The player won!"
  }else if(computer==1){
   result="It's a tie!"
  }else{
   result="The computer won!"
  }
}else if(player==2){
  if(computer==0){
   result="The computer won!"
  }else if(computer==1){
   result="The player won!"
  }else{
   result="It's a tie!"
  }
}
console.log("Player picked:   "+pchoice)
console.log("Computer picked: "+cchoice)
console.log("\n"+result+"\n")

// Here's an example using the logical operators in a real scenario:
let x = 5, y = 20, z = 15;
if (x < y && y < z) {
  console.log("y is between x and z");
} else if ((x > y && y < z) || (y > z && x < z)) {
  console.log("y is not between x and z");
} else {
  console.log("y is equal to x or z");
}