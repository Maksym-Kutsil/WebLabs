import { getCards, addCard, updateCard, deleteCard , createCard } from './api.js'

class Card {
    constructor(id,img, name, text, cost, lastUpdated) {
        this.id = id
        this.img = img
        this.name = name
        this.text = text
        this.cost = cost
        this.lastUpdated = lastUpdated
    }
}

let activeArr = []
const itemContainer = document.getElementById("itemContainer")

getCards()
    .then(data => {
        activeArr = data;
        showCards(activeArr)
    })

function showCards(arr) {
    clear()

    arr.forEach((card) => {
        let item = document.createElement("div")
        item.setAttribute("class", "item")
        item.setAttribute("data-id", card.id)

        let itemImg = document.createElement("img")
        itemImg.src = card.img

        let itemInfo = document.createElement("div")
        itemInfo.setAttribute("class", "itemInfo")

        let itemName = document.createElement("h2")
        itemName.textContent = card.name

        let nameEdit = document.createElement("textarea")
        nameEdit.setAttribute("class", "editArea")

        let itemText = document.createElement("p")
        itemText.textContent = card.text

        let textEdit = document.createElement("textarea")
        textEdit.setAttribute("class", "editAreaText")

        let itemCost = document.createElement("strong")
        itemCost.textContent = `${card.cost}$`

        let costEdit = document.createElement("textarea")
        costEdit.setAttribute("class", "editArea")

        let updated = document.createElement("span")
        updated.textContent = `Last updated: ${card.lastUpdated}`

        let buttons = document.createElement("div")
        buttons.setAttribute("class", "buttons")

        let edit = document.createElement("button")
        edit.textContent = "Edit"
        edit.setAttribute("class", "edit")

        let remove = document.createElement("button")
        remove.textContent = "Remove"
        remove.setAttribute("class", "remove")

        item.appendChild(itemImg)
        itemInfo.appendChild(itemName)
        itemInfo.appendChild(nameEdit)
        itemInfo.appendChild(itemText)
        itemInfo.appendChild(textEdit)
        itemInfo.appendChild(itemCost)
        itemInfo.appendChild(costEdit)
        itemInfo.appendChild(updated)

        buttons.appendChild(edit)
        buttons.appendChild(remove)

        item.appendChild(itemInfo)
        item.appendChild(buttons)
        itemContainer.appendChild(item)

        remove.addEventListener("click", function () {
            deleteCard(card.id).then( (res) => {
                getCards()
                .then(data => {
                    activeArr = data
                    showCards(activeArr)
                    searching()
                })
            })
        })

        edit.addEventListener("click", function () {
            if (edit.textContent === "Edit") {
                edit.textContent = "Save"
                nameEdit.value = itemName.textContent
                textEdit.value = itemText.textContent
                costEdit.value = itemCost.textContent.slice(0, -1)
                itemName.style.display = "none"
                itemText.style.display = "none"
                itemCost.style.display = "none"
                nameEdit.style.display = "block"
                textEdit.style.display = "block"
                costEdit.style.display = "block"
            } else {
                edit.textContent = "Edit"

                let updatedCard = {
                    name: nameEdit.value,
                    text: textEdit.value,
                    cost: parseFloat(costEdit.value)
                }

                nameEdit.style.display = "none"
                textEdit.style.display = "none"
                costEdit.style.display = "none"
                itemName.style.display = "block"
                itemText.style.display = "block"
                itemCost.style.display = "block"
                updated.textContent = `Last updated: ${new Date().toLocaleDateString()}`

                updateCard(card.id, updatedCard).then(() =>
                    getCards()
                    .then(data => {
                    activeArr = data
                    showCards(activeArr)
                    searching()
                    })
                )
            }
        })
    })
}

function clear() {
    while (itemContainer.firstChild) {
        itemContainer.removeChild(itemContainer.firstChild)
    }
}

let count = document.getElementById("count")
let total = document.getElementById("total")

count.addEventListener("click", function () {
    let result = 0
    activeArr.forEach(card => {
        console.log(card.cost)
        result += card.cost
    })
    total.textContent = `Total: ${result}$`
})

let sort = document.getElementById("sort")

sort.addEventListener("input" , function () {
    sorting()
})

function sorting () {
    switch (sort.value) {
        case "priceUp":
            clear()
            activeArr.sort((a, b) => a.cost - b.cost)
            showCards(activeArr)
            break
        case "priceDown":
            clear()
            activeArr.sort((a, b) => b.cost - a.cost)
            showCards(activeArr)
            break
        case "nameUp":
            clear()
            activeArr.sort((a, b) => a.name.localeCompare(b.name))
            showCards(activeArr)
            break
        case "nameDown":
            clear()
            activeArr.sort((a, b) => b.name.localeCompare(a.name))
            showCards(activeArr)
            break
    }
}

let searchInput = document.getElementById("searchInput")
let search = document.getElementById("search")
let clearInput = document.getElementById("clear")

clearInput.addEventListener("click", function () {
    clearSearch()
})

function clearSearch () {
    let arr = []
    searchInput.value = ""
    getCards()
        .then(res => {
            res.forEach(card => {
                arr.push(card)
            })
            activeArr = arr
            sorting()
        })
    total.innerText = `Total: 0$`
}

search.addEventListener("click", function () {
    searching()
})

function searching () {
    if (searchInput.value.length > 0) {
        let newArr = []   
        let input = searchInput.value.toLowerCase().trim()
        activeArr.forEach(card => {
            if (card.name.toLowerCase().includes(input)) {
                newArr.push(card)
            }
        })
        activeArr = newArr
        showCards(activeArr)
        sorting()
    }
}

searchInput.addEventListener("input", function () {
    if (searchInput.value.length === 0) {
        clearSearch()
    }
})


let create = document.getElementById("create")
let createImg = document.getElementById("createImg")
let createName = document.getElementById("createName")
let createText = document.getElementById("createText")
let createPrice = document.getElementById("createPrice")
let imagePreview = ""


createImg.addEventListener("change", function () {
    let customText = document.getElementById("customText")

    if (createImg.files && createImg.files[0]) {
        let reader = new FileReader()
        reader.onload = function (e) {
            imagePreview = e.target.result
            customText.textContent = "Choosen"
        }
        reader.readAsDataURL(createImg.files[0])
    }
})

create.addEventListener("click", function () {
    if (imagePreview != "" && createName.value != "" && createText.value != "" && createPrice.value != "") {
        let now = new Date()
        let namePatern = /^[A-Za-z\s]+$/
        let pricePatern = /^\d+$/
        let modalText = document.getElementById("modalText")
        let closeBtn = document.getElementById("closeBtn")
        
        if (namePatern.test(createName.value) && pricePatern.test(createPrice.value)) {
            let cards = activeArr
            clear()
            let newCard = new Card(
                cards.length,
                imagePreview,
                createName.value,
                createText.value,
                +createPrice.value,
                `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
            )
            cards.push(newCard)
            searchInput.value = ""
            total.innerText = `Total: 0$`

            cards.forEach((card, i) => {
                card.id = i
            })
            createImg.value = ""
            createName.value = ""
            createText.value = ""
            createPrice.value = ""
            imagePreview = ""
            customText.textContent = "Choose img"   
            activeArr = cards
            createCard(newCard).then(() =>
                getCards()
                .then(data => {
                activeArr = data
                showCards(activeArr)
                searching()
                })
            ) 
        } else {
            openModal()
            modalText.textContent = "Дані введені в невірному форматі"
            closeBtn.addEventListener("click", closeModal)
            document.body.style.overflowY = "hidden"
        }
    } else {
        openModal()
        modalText.textContent = "Введіть всі дані"
        closeBtn.addEventListener("click", closeModal)
        document.body.style.overflowY = "hidden"
    }
})

function openModal () {
    let modal = document.getElementById("modal")
    modal.style.display = "flex"
    document.body.classList.add("no-scroll")
}

function closeModal () {
    let modal = document.getElementById("modal")
    modal.style.display = "none"
    document.body.style.overflowY = "auto"
    document.body.classList.remove("no-scroll")
}