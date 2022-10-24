const container = document.querySelector(".etch-grid")
const button = document.querySelector(".button")
const range = document.getElementById("range")
const color = document.getElementById("color")
const colorP = document.querySelector(".color-p")
const backgroundP = document.querySelector(".background-p")
const background = document.getElementById("background")
const box = document.querySelectorAll(".grid-box")
const title = document.querySelector(".title h1")
const gridNumber = document.querySelector(".settings p")
const rainbowMode = document.querySelector(".rainbow-mode")
const eraseMode = document.querySelector(".erase-mode")
const reset = document.querySelector(".reset")

let currentMode = "default"

titleNumber = 0;

window.onload = function() {
    gridBox(1)
  };

range.addEventListener("change", () => {
    gridBox(range.value)
    gridNumber.textContent = num + " x " + num

})

///settings options to change colours/add eraser

color.addEventListener("click", (e) => {
    currentMode = "default"
    colorP.classList.add("chosen")
    rainbowMode.classList.remove("chosen")
    eraseMode.classList.remove("chosen")
    }) 

background.addEventListener("change", () => {
    container.style.backgroundColor = background.value
})


colorP.addEventListener("click", (e) => {
    currentMode = "default"
    e.target.classList.add("chosen")
    rainbowMode.classList.remove("chosen")
    eraseMode.classList.remove("chosen")
    }) 

rainbowMode.addEventListener("click", (e) => {
currentMode = "rainbow"
e.target.classList.add("chosen")
colorP.classList.remove("chosen")
eraseMode.classList.remove("chosen")
}) 

eraseMode.addEventListener("click", (e) => {
currentMode = "erase"
e.target.classList.add("chosen")
colorP.classList.remove("chosen")
rainbowMode.classList.remove("chosen")
}) 

reset.addEventListener("click", (e) => {
    gridBox(range.value)
}
) 

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


function gridBox (num) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
}
    for (let i = 0; i < num*num; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-box")
        newDiv.addEventListener('mouseover', changeColor)
        newDiv.addEventListener('mousedown', changeColor)
        container.appendChild(newDiv);
    }

    container.style.gridTemplateColumns = "repeat(" + num + ", 1fr)"
    container.style.gridTemplateRows = "repeat(" + num + ", 1fr)"
    gridNumber.textContent = num + " x " + num
}

function changeColor(e) {
    if (currentMode === "default") {
    if (e.type === 'mouseover' && !mouseDown) return
    
      e.target.style.backgroundColor = color.value
    } else if (currentMode === "rainbow") {
        if (e.type === 'mouseover' && !mouseDown) return
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === "erase") {
        if (e.type === 'mouseover' && !mouseDown) return
        e.target.style.backgroundColor = background.value
    }
  }
