/*
 DOM, stands for Document Object Model; And it's very useful when connecting JavaScript with HTML.
 Check out the 'DOM.jpg' image to understand how this works.

 Theres a 'document' object that has a lot of useful methods, so we can make the website interactive.
 One of these methods is '.querySelector()', this one search an Id, class or markup in the DOM.
 it's useful to store HTML elements in JavaScript variables, like this:
 const/let variableName = document.querySelector("Markup, #id or .class");

const body = document.querySelector("body");
const coonImage = document.querySelector("#coon-image");
const flowers = document.querySelector(.flowers);

 We can now use the HTML elements in our JS code as variables.
 And these variables now have special methods that helps us modify our html and css properties.
 Here are some:

coonImage.src="new-image.jpg" <--We access our coonImage 'src' property and change it to "new-image.jpg"
divContainer.style.backgroundColor="green" <--Accessing 'style' then 'background-color' to change it to "Darkgreen"
 
 There's a special method that needs user activity to be activated, this is, event listeners.
 Things like hover or clicking an element are called events. We can give advise of user activity to event listeners:

const button=querySelector(#first-button);
button.addEventListener("click", ()=>{
    code to be executed when the element is clicked.
    })

button.addEventListener("hover", ()=>{      (Notice how we use arrow functions)
    button.style.backgroundColor="red"
    })

 Check the 'MethodExamples.ipynb' file to see more of these.
*/
