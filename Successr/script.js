const loginbutton = document.querySelector(".Loginbutton")
const signupbutton = document.querySelector(".Signupbutton")

signupbutton.addEventListener("mousedown", () => {
    console.log('Down')
    signupbutton.style.color = "blue";
})

signupbutton.addEventListener("mouseup", () => {
    console.log('Up')
    signupbutton.style.color = "black";
})