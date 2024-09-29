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

let card1 = new Card (0,"../images/newZealand.jpg","New Zealand","Нова́ Зела́ндія (англ. New Zealand, маор. Aotearoa[en]) — суверенна острівна держава у південно-західній частині Тихого океану. Розташована на двох великих островах: Північний (маор. Te Ika-a-Māui) і Південний (маор. Te Waipounamu) та близько 600 прилеглих дрібніших островів. Столиця країни — місто Веллінгтон, найбільше місто — Окленд. Населення Нової Зеландії становить близько 5,395,410 осіб.",15,0)
let card2 = new Card (1,"../images/iceLand.jpg","Iceland","Ісла́ндія, раніше Ісля́ндія[4] (ісл. Ísland [ˈistlant] ( прослухати)) — нордична острівна держава в Європі, розташована у північній частині Атлантичного океану на Серединно-Атлантичному хребті, з населенням близько 364 000 і площею 103 тис. км². Столиця і найбільше місто — Рейк'явік, де, разом із прилеглими районами у південно-західному регіоні країни, проживає близько двох третин населення країни.",30,0)
let card3 = new Card (2,"../images/mexico.jpg","Mexico","Ме́ксика (ісп. México [ˈmexiko] ( прослухати); Ме́хіко, науатль Mēxihco), офіційно Сполу́чені Шта́ти Ме́ксики (ісп. Estados Unidos Mexicanos [esˈtaðos uˈniðoz mexiˈkanos] ( прослухати); науатль Mēxihcatl Tlacetilīlli Tlahtohcāyōtl) — країна в південній частині Північної Америки. Межує на півночі зі Сполученими Штатами Америки; на півдні й на заході омивається Тихим океаном; на південному сході — з Гватемалою.",10,0)

let cards = [card1,card2,card3]
let activeArr = cards

window.addEventListener("load", function() {
    showCards(cards)
})

function showCards(arr) {
    arr.forEach((card) => {
        let item = document.createElement("div")
        item.setAttribute("class", "item")

        let itemImg = document.createElement("img")
        itemImg.src = card.img

        let itemInfo = document.createElement("div")
        itemInfo.setAttribute("class", "itemInfo")

        let itemName = document.createElement("h2")
        itemName.textContent = card.name

        let itemText = document.createElement("p")
        itemText.textContent = card.text

        let itemCost = document.createElement("strong")
        itemCost.textContent = `${card.cost}$`

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
        itemInfo.appendChild(itemText)
        itemInfo.appendChild(itemCost)
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
        showCards(newArr)
        activeArr = newArr
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