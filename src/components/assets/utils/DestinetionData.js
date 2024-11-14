import img1 from "../../assets/images/destinationSectionImg1.svg"
import img2 from "../../assets/images/destinationSectionImg2.svg"
import img3 from "../../assets/images/destinationSectionImg3.svg"
import img4 from "../../assets/images/destinationSectionImg4.svg"
import img5 from "../../assets/images/destinationSectionImg5.jpg"

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
    img1,
    "Raja Ampat",
    700,
    "2023-09-01",
    "Asia",
    "Indonesia",
    0
);
let destination2 = new Destination(
    1,
    img2,
    "Fanjingshan",
    2000,
    "2023-08-21",
    "Asia",
    "China",
    1
)
let destination3 = new Destination(
    2,
    img3,
    "Vevey",
    1500,
    "2023-10-15",
    "Europe",
    "Switherland",
    2
)
let destination4 = new Destination(
    3,
    img4,
    "Skadar",
    1000,
    "2022-08-13",
    "Europe",
    "Albania",
    3
)
let destination5 = new Destination(
    4,
    img5,
    "Rio De Janeiro",
    1500,
    "2021-06-06",
    "South America",
    "Brasil",
    4
)

let Data = [destination1, destination2, destination3, destination4,destination5]

export default Data