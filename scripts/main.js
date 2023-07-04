const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/NI-smaller.png") {
        myImage.setAttribute("src", "images/into-nada.png");
    } else {
        myImage.setAttribute("src", "images/NI-smaller.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt("Please Enter Your Name");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Never Order, ${myName}`;
    }    
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Never Order, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
