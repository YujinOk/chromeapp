const images = ["0.png", "1.png", "2.png", "3.png", "4.png", "5.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

// creating <img> and add them into html using JS
// const bgImage = document.createElement("img");
const bgImage = document.querySelector("#weather");

bgImage.style.minHeight = "800px";
bgImage.style.height = "100%";
bgImage.style.display = "flex";
bgImage.style.justifyContent = "center";
bgImage.style.alignItems = "center";
bgImage.style.flexDirection = "column";
// console.log(bgImage);
// bgImage.src = `img/${chosenImage}`;
bgImage.style.backgroundImage = `url("img/${chosenImage}")`;
bgImage.style.backgroundSize = "cover";
// document.body.appendChild(bgImage);
