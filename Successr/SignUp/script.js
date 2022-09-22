const addtitlebutton = document.querySelector(".Addtitlebutton")
const titleboxes = document.querySelector('.Titles')

let boxes_created = 0

function create_new_title_box() {
    if (boxes_created < 8) {
        let classname = 'title' + boxes_created
        let inputbox = document.createElement('input')

        inputbox.setAttribute('class', classname)

        inputbox.style.position = 'absolute'
        inputbox.style.top = (26.7 + (boxes_created * 3)) + '%'
        inputbox.style.left = '50%'
        inputbox.style.transform = 'translate(-50%,0%)'
        inputbox.style.width = '50%'

        titleboxes.appendChild(inputbox)

        boxes_created++
    } else {
        // add here make max 8 appear when it exists
    }
}

addtitlebutton.addEventListener("mousedown", () => {
    console.log('add title')
    addtitlebutton.style.backgroundColor = "#293132";
    create_new_title_box()
})

addtitlebutton.addEventListener("mouseup", () => {
    console.log('Up')
    addtitlebutton.style.backgroundColor = "#3772ff";
})
