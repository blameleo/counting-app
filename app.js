let count = 0
let incr = document.getElementById("viewer")
let saveBtn = document.getElementById("save-btn")
let prevEntry = document.getElementById("saved")

function incrementBtn() {
    count += 1
    incr.innerText = count
}

function save() {

    
    if (count == 0) {
        prevEntry.innerText = "Previous entry : "
    } 
    else {
        prevEntry.innerText += count + " - "
        incr.innerText = 0
        count = 0
    }
}