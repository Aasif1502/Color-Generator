const main1 = document.querySelector(".main1")
const h31 = document.querySelector(".h31")
const button1 = document.querySelector(".button1")
const main2 = document.querySelector(".main2")
const h32 = document.querySelector(".h32")
const button2 = document.querySelector(".button2")
const main3 = document.querySelector(".main3")
const h33 = document.querySelector(".h33")
const button3 = document.querySelector(".button3")
const main4 = document.querySelector(".main4")
const h34 = document.querySelector(".h34")
const button4 = document.querySelector(".button4")
 
function showClr1() {
    const randomNumber = Math.floor(Math.random() *16777215)
    const randomClr = `#${randomNumber.toString(16)}`
    main1.style.backgroundColor =  randomClr
    h31.innerHTML =  randomClr
    navigator.clipboard.writeText(randomClr)
}
function showClr2() {
    const randomNumber = Math.floor(Math.random() *16777215)
    const randomClr = `#${randomNumber.toString(16)}`
    main2.style.backgroundColor =  randomClr
    h32.innerHTML =  randomClr
    navigator.clipboard.writeText(randomClr)
}
function showClr3() {
    const randomNumber = Math.floor(Math.random() *16777215)
    const randomClr = `#${randomNumber.toString(16)}`
    main3.style.backgroundColor =  randomClr
    h33.innerHTML =  randomClr
    navigator.clipboard.writeText(randomClr)
}
function showClr4() {
    const randomNumber = Math.floor(Math.random() *16777215)
    const randomClr = `#${randomNumber.toString(16)}`
    main4.style.backgroundColor =  randomClr
    h34.innerHTML =  randomClr
    navigator.clipboard.writeText(randomClr)
}

button1.addEventListener("click", () => {
    showClr1();
} )
button2.addEventListener("click", () => {
    showClr2();
} )
button3.addEventListener("click", () => {
    showClr3();
} )
button4.addEventListener("click", () => {
    showClr4();
} )