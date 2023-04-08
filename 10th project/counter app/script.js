const decrementBtn = document.getElementById("decrementBtn")
const incrementBtn = document.getElementById("incrementBtn")
const restBtn = document.getElementById("restBtn")
const displayValue = document.getElementById("displayValue")

decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText)
    if(value > 0) {
        displayValue.innerText = value -1
    } else {
        alert ("Negative value not allowed")
    }
})

incrementBtn.addEventListener ("click", () => {
    const value = Number (displayValue.innerText)
    if(value >= 10) {
        alert ("10+ values are not allowed")
    } else {
        displayValue.innerText = value +1
    }
})

restBtn.addEventListener("click", () => {
    displayValue.innerText = 0
})