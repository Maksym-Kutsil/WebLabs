import newZealand from "../images/newZealand.jpg";
import iceLand from "../images/iceLand.jpg";
import mexico from "../images/mexico.jpg";

class Destination {
    constructor(id, img, name, text, cost, lastUpdated) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.text = text;
        this.cost = cost;
        this.lastUpdated = lastUpdated;
    }
}

let destination1 = new Destination(
    0,
    newZealand,
    "New Zealand",
    "Нова́ Зела́ндія (англ. New Zealand, маор. Aotearoa[en]) — суверенна острівна держава у південно-західній частині Тихого океану. Розташована на двох великих островах: Північний (маор. Te Ika-a-Māui) і Південний (маор. Te Waipounamu) та близько 600 прилеглих дрібніших островів. Столиця країни — місто Веллінгтон, найбільше місто — Окленд. Населення Нової Зеландії становить близько 5,395,410 осіб.",
    15,
    "2023-09-01"
);
let destination2 = new Destination(
    1,
    iceLand,
    "Iceland",
    "Ісла́ндія, раніше Ісля́ндія[4] (ісл. Ísland [ˈistlant] ( прослухати)) — нордична острівна держава в Європі, розташована у північній частині Атлантичного океану на Серединно-Атлантичному хребті, з населенням близько 364 000 і площею 103 тис. км². Столиця і найбільше місто — Рейк'явік, де, разом із прилеглими районами у південно-західному регіоні країни, проживає близько двох третин населення країни.",
    30,
    "2023-08-21"
)
let destination3 = new Destination(
    2,
    mexico,
    "Mexico",
    "Ме́ксика (ісп. México [ˈmexiko] ( прослухати); Ме́хіко, науатль Mēxihco), офіційно Сполу́чені Шта́ти Ме́ксики (ісп. Estados Unidos Mexicanos [esˈtaðos uˈniðoz mexiˈkanos] ( прослухати); науатль Mēxihcatl Tlacetilīlli Tlahtohcāyōtl) — країна в південній частині Північної Америки. Межує на півночі зі Сполученими Штатами Америки; на півдні й на заході омивається Тихим океаном; на південному сході — з Гватемалою.",
    10,
    "2023-10-15"
)

let Data = [destination1, destination2, destination3]

export default Data