/*
function on() {
    document.getElementById("overlay").style.display = "block"; 
}

function off() {
    document.getElementById("overlay").style.display = "none";
} */



let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
