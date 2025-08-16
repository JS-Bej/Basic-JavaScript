
// Even numbers from 1 to 42:

console.log("--------Even numbers from 1 to 42-------- \n")
for (let i=1;i<=50;i++){

  if(i%2!=0){
    continue;
  }

  console.log(i)

  if(i==42){
    break;
  }

}

// FIZZ BUZZ: When a number is multiple of 3, write FIZZ. If the number is multiple of 5, write BUZZ.
// If the number is multiple of both 3 and 5, write FIZZBUZZ:

console.log("\n--------FIZZ BUZZ----------------------- \n")
for (let i=1;i<=50;i++){
  
  if (i%3==0 && i%5==0){
    console.log("FIZZBUZZ")
    continue;

  }else if(i%3==0){
    console.log("FIZZ")
    continue;

  }else if(i%5==0){
    console.log("BUZZ")
    continue;

  }
    console.log(i)
}

// From Integer to Binary:

console.log("\n--------Integer to binary--------------- \n")
let myNumber=50,binary="",remainder
let number=myNumber;

while(myNumber!=0){
 remainder=myNumber%2;
 if(remainder==0){
    binary="0"+binary
 }else if(remainder==1){
    binary="1"+binary
  }
 myNumber=Math.floor(myNumber/2)
}
console.log("Number digited:     "+number)
console.log("Number in binary:   "+binary)

// The following code is a leap year detector, so you know when it would be the next leap year:

console.log("\n--------Leap year detector--------------- \n")
for (let y=2000;y<=2150;y++){
    if(y%4==0 && y%100!=0){
      console.log(y+" (Leap)");
      continue;
    }else if(y%400==0){
      console.log(y+" (Leap)");
      continue;
    }
    console.log(y);
}

