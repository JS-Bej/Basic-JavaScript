
const red = document.getElementById('btnred');
const green = document.getElementById('btngreen');
const circle = document.getElementById('circle')
/*
 When you want an action to be executed moments after an event, you can use the setTimeout() function.
 Here's the sintax:

 setTimeout(function(),time in milliseconds to wait before doing it)
*/

red.addEventListener("click", ()=>{
    red.innerText="Changing..." // Change red.innerText immediately after clicking. (1)
    setTimeout(()=>{
        circle.style.backgroundColor="#b34e4e";
        red.innerText="Change circle to red!";
},3000) // Wait 3 seconds before changing background color and red.innerText (2)
})

green.addEventListener("click", ()=>{
    green.innerText="Changing..." // Same here. (1)
    setTimeout(()=> {circle.style.backgroundColor="#5d9e58";green.innerText="Change circle to green!";},3000)}) // Same here (2)