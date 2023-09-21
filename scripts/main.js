const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/anayami-profile.jpg") {
    myImage.setAttribute("src", "images/silly-goose.jpg");
  } else {
    myImage.setAttribute("src", "images/anayami-profile.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Please, follow me on Patreon, ${myName}`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Please, follow me on Patreon, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};