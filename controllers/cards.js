class Destination {
    constructor(id, img, name, cost, lastUpdated, continent, country, key) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.cost = cost;
        this.lastUpdated = lastUpdated;
        this.continent = continent
        this.country = country
        this.key = key
    }
}

let destination1 = new Destination(
    0,
    "http://localhost:8080/images/destinationSectionImg1.jpg",
    "Raja Ampat",
    700,
    "2023-09-01",
    "Asia",
    "Indonesia",
    0
);
let destination2 = new Destination(
    1,
    "http://localhost:8080/images/destinationSectionImg2.jpg",
    "Fanjingshan",
    2000,
    "2023-08-21",
    "Asia",
    "China",
    1
)
let destination3 = new Destination(
    2,
    "http://localhost:8080/images/destinationSectionImg3.jpg",
    "Vevey",
    1500,
    "2023-10-15",
    "Europe",
    "Switherland",
    2
)
let destination4 = new Destination(
    3,
    "http://localhost:8080/images/destinationSectionImg4.jpg",
    "Skadar",
    1000,
    "2022-08-13",
    "Europe",
    "Albania",
    3
)
let destination5 = new Destination(
    4,
    "http://localhost:8080/images/destinationSectionImg5.jpg",
    "Rio De Janeiro",
    1500,
    "2021-06-06",
    "South America",
    "Brasil",
    4
)

let cards = [destination1, destination2, destination3, destination4,destination5]


module.exports.getUserCards = function (req, res) {
    const { search, sort, continents, price } = req.query

    let filteredCards = cards

    if (search) {
        filteredCards = filteredCards.filter(card => 
            card.name.toLowerCase().includes(search.toLowerCase().trim())
        )
    }

    if (sort) {
        switch (sort) {
            case '0-99':
                filteredCards = filteredCards.sort((a, b) => a.cost - b.cost)
                break
            case '99-0':
                filteredCards = filteredCards.sort((a, b) => b.cost - a.cost)
                break
            case 'A-Z':
                filteredCards = filteredCards.sort((a, b) => a.name.localeCompare(b.name))
                break
            case 'Z-A':
                filteredCards = filteredCards.sort((a, b) => b.name.localeCompare(a.name))
                break
            case 'Sort':
                break
            default:
                return res.status(400).json({ error: 'Invalid sort option' })
        }
    }

    if (continents) {
        filteredCards = filteredCards.filter(card => 
            card.continent.toLowerCase().includes(continents.toLowerCase().trim())
        )
    }

    if (price) {
        filteredCards = filteredCards.filter(card => 
            card.cost >= price
        )
    }

    res.status(200).json(filteredCards)
}



module.exports.createCard = function (req, res) {
    const { id, img, name, cost, lastUpdated, continent, country, key } = req.body
    let now = new Date()
    let newDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
    const newCard = {
        id,
        img,
        name,
        cost,
        lastUpdated: newDate,
        continent,
        country,
        key
    }

    cards.push(newCard)
    res.status(201).json(newCard)
}

module.exports.updateCard = function (req, res) {
    const { id } = req.params
    const {  img, name, cost, lastUpdated, continent, country } = req.body

    const cardIndex = cards.findIndex(card => card.id == id)
    if (cardIndex === -1) {
        return res.status(404).json({ message: 'Card not found' })
    }

    let now = new Date()
    let newDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`

    const updatedCard = {
        ...cards[cardIndex],
        img,
        name,
        cost,
        lastUpdated: newDate,
        continent,
        country,
    }

    cards[cardIndex] = updatedCard
    res.status(200).json(updatedCard)
}

module.exports.deleteCard = function (req, res) {
    const { id } = req.params

    const cardIndex = cards.findIndex(card => card.id == id)
    if (cardIndex === -1) {
        return res.status(404).json({ message: 'Card not found' })
    }

    cards.splice(cardIndex, 1)
    res.status(204).send()
}

module.exports.getTotalCost = function (req, res) {
    const { search, continents, price } = req.query

    let filteredCards = cards
    if (search) {
        filteredCards = filteredCards.filter(card => 
            card.name.toLowerCase().includes(search.toLowerCase().trim())
        )
    }

    if (continents) {
        filteredCards = filteredCards.filter(card => 
            card.continent.toLowerCase().includes(continents.toLowerCase().trim())
        )
    }

    if (price) {
        filteredCards = filteredCards.filter(card => 
            card.cost >= price
        )
    }

    const totalCost = filteredCards.reduce((sum, card) => sum + card.cost, 0)
    res.status(200).json(totalCost)
}