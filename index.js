let burgerMenu = document.querySelector(".burger")
let navBar = document.querySelector(".nav-bar")
let body = document.querySelector("body")

burgerMenu.addEventListener("click", openMenu)

function openMenu() {
    navBar.classList.toggle("active")
    body.classList.toggle("preventscroll")
}

let closeMenu = document.querySelector(".close")

closeMenu.addEventListener("click", closeOption)

function closeOption(){
    navBar.classList.remove("active")
    body.classList.remove("preventscroll")
}

let arrow = document.querySelector(".arrow")
let dishMenu = document.querySelector(".menu-list")

arrow.addEventListener("click", arrowDown)

function arrowDown(){
    dishMenu.classList.toggle("listactive")
    arrow.classList.toggle("arrowdown")
}


function remove(){
    body.classList.remove("preventscroll")
    navBar.classList.remove("active")
}

function homeBtn(){
    window.location.href = "index.html"
}

function menuBtn(){
    window.location.href = "menu.html"
}

function  homeAboutBtn(){
    window.location.href = "http://127.0.0.1:5500/index.html#about-restaurant1"
}


function dishesBtn(){
    window.location.href = "dishes.html"
}

function discoverBtn(){
    window.location.href = "menu.html"
}

function wineBtn(){
    window.location.href = "wine.html"
}

function beveragesBtn(){
    window.location.href = "beverages.html"
}

function dessertBtn() {
    window.location.href = "dessert.html"
}

function contactBtn(){
    window.location.href = "contact.html"
}

