let header = document.getElementById("header")
let boorger = document.getElementById("boorger")
let navList = document.getElementById("navList")
let navContainer = document.getElementById("navContainer")
let headerNav = document.getElementById("headerNav")
let line1 = document.getElementById("line1")
let line2 = document.getElementById("line2")
let line3 = document.getElementById("line3")
let clicked = false

function burgerToCross () {
    line1.style.transform = "translateX(-5.5px) rotate(-45deg)"
    line1.style.width = "37.5px"
    line2.style.width = 0
    line3.style.transform = "translateX(-5.5px) rotate(45deg)"
    line3.style.width = "37.5px"
}

function crossToBurger () {
    line1.style.transform = "rotate(0) translateX(0)"
    line1.style.width = "30px"
    line2.style.width = "30px"
    line2.style.transition = "0.5s"
    line3.style.transform = "rotate(0) translateX(0)"
    line3.style.width = "30px"
}

function checkScreenWidth() {
    let width = window.innerWidth
    if (width > 840) {
        headerNav.appendChild(navList)
        navList.style.display = "flex"
        navList.style.flexDirection = "row"
        navList.style.alignItems = "center"
        clicked = false
        crossToBurger()
    } else if (width <= 840 && clicked != true) {
        navList.style.display = "none"
    }
}

window.addEventListener('resize', checkScreenWidth)

boorger.addEventListener("click", function () {
    if (navContainer.children.length == 0) {
        navList.style.display = "flex"
        navList.style.flexDirection = "column"
        navList.style.alignItems = "end"
        navContainer.style.display = "flex"
        header.setAttribute("class", "headerOpen")
        document.body.style.overflow = "hidden"
        burgerToCross()
        navContainer.appendChild(navList)
        clicked = true

    } else {
        navContainer.style.display = "none"
        while (navContainer.firstChild) {
            navContainer.removeChild(navContainer.firstChild)
        }
        crossToBurger()
        document.body.style.overflow = "auto"
        header.setAttribute("class", "header")
        clicked = false
    }
})