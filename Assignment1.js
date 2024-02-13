// Get references to HTML elements
let greeting = document.getElementById("greeting");
let personName = document.getElementById("name");
let submit = document.getElementById("submit");
let learnMore = document.getElementById("learnButton");
let learn = document.getElementById("learn");
let pic = document.querySelector(".profilePic");
let moveElement = document.getElementById("moveElement");
let colorChange = document.getElementById("colorChange");
let classHover = document.getElementById("GrayScaleHover");

// Event listener for "Learn More" button
learnMore.addEventListener("click", function() {
    // Update the content of the 'learn' element with a cat-related story
    learn.innerHTML = "I had the incredible opportunity to adopt a charming cat into my life. This feline companion quickly became a beloved member of my family, bringing joy, comfort, and endless entertainment into my home. ...";
});

// Event listener for "Submit" button
submit.addEventListener("click", function() {
    // Update the content of the 'greeting' element with a personalized greeting
    greeting.innerHTML = "Hello " + personName.value + "!";
});

// Event listener for mouseover on the 'pic' element
pic.addEventListener("mouseover", function() {
    // Change the source of the image to a cat image when the mouse is over it
    pic.src = "./Imgs/cat.png";
});

// Event listener for mouseover on the 'moveElement' element
moveElement.addEventListener("mouseover", function() {
    // Toggle the float style of 'moveElement' between left and right
    if (moveElement.style.float == "right") {
        moveElement.style.float = "left";
    } else {
        moveElement.style.float = "right";
    }
});

// Event listeners for mouseover and mouseleave on the 'classHover' element
classHover.addEventListener("mouseover", function(){
    // Remove grayscale filter on mouseover
    classHover.style.filter = "grayscale(0%)";
});

classHover.addEventListener("mouseleave", () => {
    // Apply grayscale filter on mouseleave
    classHover.style.filter = "grayscale(100%)";
});

// Array of colors for the color change effect
let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
let i = 0;

// Interval function for changing the color of 'colorChange' element
setInterval(function() {
    colorChange.style.color = colors[i];
    i++;
    if (i == colors.length) {
        i = 0;
    }
}, 3000);
