
// FIZZ BUZZ: When a number is multiple of 3, write FIZZ. If the number is multiple of 5, write BUZZ.
// If the number is multiple of both 3 and 5, write FIZZBUZZ:

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

// The following code is a leap year detector, so you know when it would be the next leap year:

console.log("\n------------LEAP YEAR DETECTOR------------ \n")
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