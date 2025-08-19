
const imageContainer=document.getElementById("imageContainer");
const catImage=document.getElementById("catImage");
const imageInfo=document.getElementById("imageInfo");
const textContainer=document.getElementById("textContainer");
const btn=document.getElementById("generateBtn");

/*
 Fetching is like going out for something and come back with that thing. To fetch something online it's used `fetch("url")`.
 So what we are doing down here is fetching some data from 'https://api.thecatapi.com'
 The enpoint '/v1/images/search' gives us some data we can convert into JSON (JavaScript Object Notation).
 
 `.then()` is used to tell the code what to do after the previous step finishes.
*/

function fetchCat(){
    fetch("https://api.thecatapi.com/v1/images/search") // We fetch some data here.
    .then((response) => response.json()) // We store that data in a 'response' variable, which we turn into JSON.
    .then((data) => {                    // We store our JSON data in a 'data' variable.
        catImage.src = data[0].url;
        catImage.classList.remove("hidden");
        imageInfo.innerText = `[\n{\n"id": "${data[0].id}",\n"width": ${data[0].width},\n"height": ${data[0].height}\n}\n]`;
        imageInfo.classList.remove("hidden");
        textContainer.innerText = `"url": "${data[0].url}"`
    })                                   // We work with the data provided.
    .catch((error)=>console.log("An error happened along the way."))  // If there was an error with something, `.catch()` will tell us.
}

/* 
 Here's another way to do this:

async function fetchCat(){
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  if (response.ok === false){
  throw new Error("An error happened along the way.");  Will throw an error and stops the function.
  }
  const data = await response.json();
  catImage.src = data[0].url;
  catImage.classList.remove("hidden");
  imageInfo.innerText = `[\n{\n"id": "${data[0].id}",\n"width": ${data[0].width},\n"height": ${data[0].height}\n}\n]`;
  imageInfo.classList.remove("hidden");
  textContainer.innerText = `"url": "${data[0].url}"
} 
*/

btn.addEventListener("click",fetchCat);
