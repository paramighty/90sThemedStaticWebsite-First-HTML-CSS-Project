/*
function on() {
    document.getElementById("overlay").style.display = "block"; 
}

function off() {
    document.getElementById("overlay").style.display = "none";
} */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})