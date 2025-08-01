
// Even numbers from 1 to 42:

for (let i=1;i<=50;i++){

  if(i%2!=0){
    continue;
  }

  console.log(i)

  if(i==42){
    break;
  }

}

// From Integer to Binary:

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