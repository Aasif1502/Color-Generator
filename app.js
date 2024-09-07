const main = document.querySelector(".main")
const h3 = document.querySelector("h3")
const button = document.querySelector("button")
  
function showClr() {
    
    const randomNumber = Math.floor(Math.random() *16777215)
    const randomClr = `#${randomNumber.toString(16)}`
    main.style.backgroundColor =  randomClr
    h3.innerHTML =  randomClr
    navigator.clipboard.writeText(randomClr)
}

button.addEventListener("click", () => {
    showClr();
} )