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

let card1 = new Card (0,"../images/newZealand.jpg","New Zealand","Нова́ Зела́ндія (англ. New Zealand, маор. Aotearoa[en]) — суверенна острівна держава у південно-західній частині Тихого океану. Розташована на двох великих островах: Північний (маор. Te Ika-a-Māui) і Південний (маор. Te Waipounamu) та близько 600 прилеглих дрібніших островів. Столиця країни — місто Веллінгтон, найбільше місто — Окленд. Населення Нової Зеландії становить близько 5,395,410 осіб.",15,"20/03/2023")
let card2 = new Card (1,"../images/iceLand.jpg","Iceland","Ісла́ндія, раніше Ісля́ндія[4] (ісл. Ísland [ˈistlant] ( прослухати)) — нордична острівна держава в Європі, розташована у північній частині Атлантичного океану на Серединно-Атлантичному хребті, з населенням близько 364 000 і площею 103 тис. км². Столиця і найбільше місто — Рейк'явік, де, разом із прилеглими районами у південно-західному регіоні країни, проживає близько двох третин населення країни.",30,"13/04/2020")
let card3 = new Card (2,"../images/mexico.jpg","Mexico","Ме́ксика (ісп. México [ˈmexiko] ( прослухати); Ме́хіко, науатль Mēxihco), офіційно Сполу́чені Шта́ти Ме́ксики (ісп. Estados Unidos Mexicanos [esˈtaðos uˈniðoz mexiˈkanos] ( прослухати); науатль Mēxihcatl Tlacetilīlli Tlahtohcāyōtl) — країна в південній частині Північної Америки. Межує на півночі зі Сполученими Штатами Америки; на півдні й на заході омивається Тихим океаном; на південному сході — з Гватемалою.",10,"27/04/2006")

let cards = [card1,card2,card3]

module.exports.getUserCards = function (req, res) {
    res.status(200).json(cards)
}


module.exports.createCard = function (req, res) {
    const { img, name, text, cost } = req.body
    let now = new Date()
    let newDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
    const newCard = {
        id: cards.length,
        img,
        name,
        text,
        cost,
        lastUpdated: newDate
    }

    cards.push(newCard)
    res.status(201).json(newCard)
}

module.exports.updateCard = function (req, res) {
    const { id } = req.params
    const {  name, text, cost } = req.body

    const cardIndex = cards.findIndex(card => card.id == id)
    if (cardIndex === -1) {
        return res.status(404).json({ message: 'Card not found' })
    }

    let now = new Date()
    let newDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`

    const updatedCard = {
        ...cards[cardIndex],
        name,
        text,
        cost,
        lastUpdated: newDate
    };

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
    const { cards: filteredCards } = req.query

    const cardsToCount = filteredCards ? JSON.parse(filteredCards) : cards

    const totalCost = cardsToCount.reduce((sum, card) => sum + card.cost, 0)
    res.status(200).json({ totalCost })
}


module.exports.searchCards = function (req, res) {
    const { query } = req.query

    const filteredCards = cards.filter(card => 
        card.name.toLowerCase().includes(query.toLowerCase())
    )

    res.status(200).json(filteredCards)
}

module.exports.sortCards = function (req, res) {
    try {
        const { sort } = req.query
        let sortedCards

        switch (sort) {
            case 'priceUp':
                sortedCards = cards.sort((a, b) => a.cost - b.cost)
                break
            case 'priceDown':
                sortedCards = cards.sort((a, b) => b.cost - a.cost); // Descending order by price
                break
            case 'nameUp':
                sortedCards = cards.sort((a, b) => a.name.localeCompare(b.name))
                break
            case 'nameDown':
                sortedCards = cards.sort((a, b) => b.name.localeCompare(a.name))
                break
            default:
                return res.status(400).json({ error: 'Invalid sort option' })
        }

        res.json(sortedCards)
    } catch (error) {
        console.error("Error sorting cards:", error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}