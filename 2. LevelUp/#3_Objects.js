
// An object is a data type that can have multiple values, just like an Array.
// The difference is that each value have a "key", like a pair.
// They're separated by colons (:) and caged in curly brackets {}.

let book={author:"Gabriel García Márquez", title:"Cien años de soledad", realaseYear:"1967"}
console.log(book) /* Output: {
                               author: 'Gabriel García Márquez',
                               title: 'Cien años de soledad',
                               realaseYear: '1967'
                             }
                  */

// This is not the best way to create objects...
// This is how objects are commonly created:

let car={
    model:'Corvette c8', 
    year:2024,
    color:'Emerald'
}
console.log(car.model) // Output: Corvette c8
console.log(car.year) // Output: 2024

// As you just witnessed, we can access to an object's value by a dot followed by the key:

car.color='Dark green'
console.log(car.color) // Output: Dark green

// We can also create a new property for the object.
// This is the syntax: objectName.newKeyName = keyValue   --Be sure that the newKeyName isn't a property already.

car.available = true;
console.log(car)  /* Output: {
                               model: 'Corvette c8', 
                               year: 2024,
                               color: 'Dark green',
                               available: true
                             }
*/

// Objects can store even functions!

const dog = {
    name: 'Max',
    age: 4, 
    eat(something) {
        console.log(`${this.name} is eating ${something}`) // "this" stands for "this object's name"
    },
    eatRandomly() {
        const foods = ['kibble', 'treats', 'carrots', 'peanut butter'];
        const randomFood = foods[Math.floor(Math.random() * foods.length)];
        this.eat(randomFood); 
    }
}
dog.eat('apples');   // Output: Max is eating apples
dog.eatRandomly(); // Output example: Max is eating peanut butter