// co Author = require("../models/author");


// Показать список всех авторов.
exports.getUserCards = function (req, res) {
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
  res.send(JSON.stringify(cards));
};
