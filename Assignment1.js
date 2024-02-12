let greeting = document.getElementById("greeting");
let personName = document.getElementById("name");
let submit = document.getElementById("submit");
let learnMore = document.getElementById("learnButton");
let learn = document.getElementById("learn");
let pic = document.querySelector(".profilePic");
let moveElement = document.getElementById("moveElement");
let colorChange = document.getElementById("colorChange");
let classHover = document.getElementById("GrayScaleHover")
learnMore.addEventListener("click", function() {
    learn.innerHTML = "I had the incredible opportunity to adopt a charming cat into my life. This feline companion quickly became a beloved member of my family, bringing joy, comfort, and endless entertainment into my home. From the moment I first laid eyes on this cat, I was captivated by its striking appearance. With soft, fluffy fur and mesmerizing green eyes, it exuded an air of elegance and grace. Its sleek body and agile movements showcased its natural hunting instincts, reminding me of the wild spirit that lay within. Although initially cautious, my new feline friend soon warmed up to its new surroundings. It explored every nook and cranny of its new home, cautiously inspecting each piece of furniture, climbing up shelves, and investigating every mysterious sound. Its curiosity was boundless, and I marveled at its ability to find hidden spots and squeeze into the tiniest of spaces. As we spent more time together, I discovered the unique personality of my adopted cat. It possessed a calm and composed demeanor, often choosing to observe its surroundings from a cozy spot, occasionally offering a gentle purr    or a playful flick of its tail. Yet, when it was in the mood for some fun, it would zoom around the house, chasing imaginary prey or pouncing on toys with impressive agility."
});
submit.addEventListener("click", function() {
    greeting.innerHTML = "Hello " + personName.value + "!";
});
pic.addEventListener("mouseover", function() {
    pic.src = "./Imgs/cat.png";
});
moveElement.addEventListener("mouseover", function() {
    if(moveElement.style.float == "right"){
        moveElement.style.float = "left";
    }
    else{
    moveElement.style.float = "right";
    }
});
classHover.addEventListener("mouseover", function(){
    classHover.style.filter = "grayscale(0%)"
})
classHover.addEventListener("mouseleave", () => {
    classHover.style.filter = "grayscale(100%)"
})
let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
let i = 0;
setInterval(function() {
    colorChange.style.color = colors[i];
    i++;
    if(i == colors.length){
        i = 0;
    }
}, 3000);