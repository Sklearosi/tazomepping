let burgerMenu = document.querySelector(".burger")
let navBar = document.querySelector(".nav-bar")

burgerMenu.addEventListener("click", showMenu)

function showMenu() {
    navBar.classList.toggle("active")
}


let offeringMenu = document.querySelector(".offering1")

offeringMenu.addEventListener("click", goToOfferingMenu)

function goToOfferingMenu() {
    window.location.href = "offering.html"
}

let mainMenu = document.querySelector(".main")

mainMenu.addEventListener("click", goToMainMenu)

function goToMainMenu(){
    window.location.href = "index.html"
}

let projectMenu = document.querySelector(".projects1")

projectMenu.addEventListener("click", goToProjects)

function goToProjects(){
    window.location.href = "projects.html"
}

let projectButton = document.querySelector(".project-btn")

projectButton.addEventListener("click", afterButton)

function afterButton(){
    window.location.href = "projects.html"
}

function infoButton(){
    window.location.href = "info.html"
}

function contactsButton(){
    window.location.href = "contacts.html"
}






