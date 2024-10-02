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

let itemContainer = document.getElementById("itemContainer")

let card1 = new Card (0,"../images/newZealand.jpg","New Zealand","Нова́ Зела́ндія (англ. New Zealand, маор. Aotearoa[en]) — суверенна острівна держава у південно-західній частині Тихого океану. Розташована на двох великих островах: Північний (маор. Te Ika-a-Māui) і Південний (маор. Te Waipounamu) та близько 600 прилеглих дрібніших островів. Столиця країни — місто Веллінгтон, найбільше місто — Окленд. Населення Нової Зеландії становить близько 5,395,410 осіб.",15,"20/03/2023")
let card2 = new Card (1,"../images/iceLand.jpg","Iceland","Ісла́ндія, раніше Ісля́ндія[4] (ісл. Ísland [ˈistlant] ( прослухати)) — нордична острівна держава в Європі, розташована у північній частині Атлантичного океану на Серединно-Атлантичному хребті, з населенням близько 364 000 і площею 103 тис. км². Столиця і найбільше місто — Рейк'явік, де, разом із прилеглими районами у південно-західному регіоні країни, проживає близько двох третин населення країни.",30,"13/04/2020")
let card3 = new Card (2,"../images/mexico.jpg","Mexico","Ме́ксика (ісп. México [ˈmexiko] ( прослухати); Ме́хіко, науатль Mēxihco), офіційно Сполу́чені Шта́ти Ме́ксики (ісп. Estados Unidos Mexicanos [esˈtaðos uˈniðoz mexiˈkanos] ( прослухати); науатль Mēxihcatl Tlacetilīlli Tlahtohcāyōtl) — країна в південній частині Північної Америки. Межує на півночі зі Сполученими Штатами Америки; на півдні й на заході омивається Тихим океаном; на південному сході — з Гватемалою.",10,"27/04/2006")

let cards = [card1,card2,card3]
let activeArr = cards

window.addEventListener("load", function() {
    showCards(activeArr)
})

function showCards(arr) {
    arr.forEach((card) => {
        let item = document.createElement("div")
        item.setAttribute("class", "item")

        let itemImg = document.createElement("img")
        itemImg.src = card.img

        let imgEdit = document.createElement("input")
        imgEdit.setAttribute("type", "file")
        imgEdit.setAttribute("class", "editAreaText")
        imgEdit.setAttribute("id", "forLabel")

        let imgLabel = document.createElement("label")
        imgLabel.textContent = "Change image"
        imgLabel.setAttribute("for", "forLabel")
        imgLabel.setAttribute("class", "imgEdit")

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
        item.appendChild(imgEdit)
        item.appendChild(imgLabel)
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
            if (arr[card.id] == undefined) {
                arr.splice(arr.length - 1, 1)
            } else {
                arr.splice(card.id, 1)
            }
            arr.forEach((card, index) => {
                card.id = index
            })
            itemContainer.removeChild(item)
        })

        edit.addEventListener("click", function () {
            if (edit.textContent == "Edit") {
                edit.textContent = "Save"

                nameEdit.textContent = itemName.textContent
                textEdit.textContent = itemText.textContent
                costEdit.textContent = itemCost.textContent

                nameEdit.style.display = "block"
                textEdit.style.display = "block"
                costEdit.style.display = "block"

                itemName.style.display = "none"
                itemText.style.display = "none"
                itemCost.style.display = "none"

                imgLabel.style.display = "flex"

                let imagePreview = ""

                imgEdit.addEventListener("change", function () {
                    if (imgEdit.files && imgEdit.files[0]) {
                        let reader = new FileReader()
                        reader.onload = function (e) {
                            imagePreview = e.target.result
                            itemImg.src = imagePreview
                        }
                        reader.readAsDataURL(imgEdit.files[0])
                        imgLabel.textContent = "Changed"
                    }
                })
            } else {
                edit.textContent = "Edit"

                let costEditFormated = costEdit.value.slice(0,-1)
                console.log(costEditFormated)

                activeArr[card.id].name = nameEdit.value
                activeArr[card.id].text = textEdit.value
                activeArr[card.id].cost = +costEditFormated

                itemName.textContent = nameEdit.value
                itemText.textContent = textEdit.value
                itemCost.textContent = costEdit.value

                nameEdit.style.display = "none"
                textEdit.style.display = "none"
                costEdit.style.display = "none"
                imgLabel.style.display = "none"

                itemName.style.display = "block"
                itemText.style.display = "block"
                itemCost.style.display = "block"

                let now = new Date()

                updated.textContent = `Last updated: ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
                activeArr[card.id].updated = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`

                sortCards(activeArr)
            }
        })
    })
}

function clear () {
    while(itemContainer.firstChild) {
        itemContainer.removeChild(itemContainer.firstChild)
    }
}

let sort = document.getElementById("sort")

sort.addEventListener("input", function() {
    sortCards(activeArr)
    activeArr.forEach((card,i) => {
        card.id = i
    })
})

function sortCards (activeArr) {
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

let count = document.getElementById("count")
let total = document.getElementById("total")

count.addEventListener("click", function () {
    let res = 0
    activeArr.forEach(card => {
        res += card.cost
    })
    total.innerText = `Total: ${res}$`
})

let searchInput = document.getElementById("searchInput")
let search = document.getElementById("search")
let clearInput = document.getElementById("clear")

clearInput.addEventListener("click", function () {
    searchInput.value = ""
    clear()
    showCards(cards)
    activeArr = cards
    sortCards(activeArr)
    total.innerText = `Total: 0$`
})

function clearSearch () {
    searchInput.value = ""
    clear()
    showCards(cards)
    activeArr = cards
    sortCards(activeArr)
    total.innerText = `Total: 0$`
}

search.addEventListener("click", function () {
    if (searchInput.value.length > 0) {
        clear()
        total.innerText = `Total: 0$`
        let newArr = []
        let input = searchInput.value.toLowerCase().trim()
        cards.forEach(card => {
            if (card.name.toLowerCase().includes(input)) {
                newArr.push(card)
            }
        })
        activeArr = newArr
        activeArr.forEach((card,i) => {
            card.id = i
        })
        showCards(activeArr)
        sortCards(activeArr)
    }
})

searchInput.addEventListener("input", function () {
    if (searchInput.value.length == 0) {
        searchInput.value = ""
        clear()
        showCards(cards)
        activeArr = cards
        sortCards(activeArr)
        total.innerText = `Total: 0$`
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
            clear()
            let newCard = new Card(
                cards.length,
                imagePreview,
                createName.value,
                createText.value,
                +createPrice.value,
                `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
            )
            activeArr = cards
            cards.push(newCard)
            showCards(cards)
            sortCards(activeArr)
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