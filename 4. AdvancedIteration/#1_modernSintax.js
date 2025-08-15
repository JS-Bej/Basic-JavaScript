/*
 Remember the way to print an Array?
 
let things=[pen,pineapple,apple];
console.log(things)     Output: [pen,pineapple,apple]

 Is there a way to print this values without printing out the whole array with its square brackets?
 If you read '2. LevelUp', then you know how to do this.
 
console.log(`${things[0]}-${things[1]} ${things[2]-${things[0]}`)

 Well, a way to print every value of an array is with a loop using each iteration as an index.
 But there's a simplified (and better) version of this specific loop, its `for..of`.

 Basic way:
 for(let i=0;i<things.length;i++){
   console.log(things[i]);
 }

 simplified way:
 for(let i of things){
 console.log(i);
 }

 Let's take a look to this special `for` loop and its interactions.
*/

let numbers=[0,1,2,3,4];
for(let number of numbers){
    console.log(number) /* Output
                           0
                           1
                           2
                           3
                           4
                        */
}
// We can use it not only for arrays but also for strings:
const word='Hello';
for(let letter of word){
    console.log(letter); /* Output:
                           H
                           e
                           l
                           l
                           o
                        */
}

// There's also a `for..in` loop, which is used for iterating over the properties of an object:
const person={ name: 'Alice', age: 25, city: 'Wonderland' };
for (let key in person) {
    console.log(`${key}: ${person[key]}`); /* Output:
                                              name: Alice
                                              age: 25
                                              city: Wonderland
                                           */
}
// This loop is useful when you want to access either keys or values of an object.

/*
 Finally, there's an `...` spread operator.
 This operator is used to "spread out" the elements of an array or the properties of an object.
 its sintax:

 ...arrayOrObjectName
*/
const arr1=[1, 2, 3];
const arr2=[4, 5];
const combined=[...arr1, ...arr2]; // [1, 2, 3, 4, 5]
console.log(combined); // Output: [1, 2, 3, 4, 5]

const obj1={ a: 1, b: 2 };
const obj2={ ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }

/*
 On the other hand, the same three dots can be used to "pack" elements into an array or properties into an object.
 This can be really useful when you want to create a function that could require a variable number of arguments.
 this operator is called 'rest operator' regardless of being the same as spread operator. Its sintax:

 ...restParameter
*/
function addNumbers(...nums) {
    let sum=0;
    for (let n of nums) {
        sum+=n;
    }
    return sum;
}

console.log(addNumbers(1, 2));        // Output: 3
console.log(addNumbers(5, 10, 15));   // Output: 30
console.log(addNumbers(2, 4, 6, 8));  // Output: 20