import React from "react";
import "./DestinationSection.css"
import vector from "../../../assets/icons/vector.svg"
import destinationImg1 from "../../../assets/images/destinationSectionImg1.svg"
import destinationImg2 from "../../../assets/images/destinationSectionImg2.svg"
import destinationImg3 from "../../../assets/images/destinationSectionImg3.svg"
import destinationImg4 from "../../../assets/images/destinationSectionImg4.svg"
import SingleDistination from "./SingleDestination";
import SecondaryButton from "../../buttons/SecondaryButton/SecondaryButton";
import { Link } from "react-router-dom";

let data = [
    {
        city: "Raja Ampat",
        country: "Indonesia",
        img: destinationImg1
    },
    {
        city: "Fanjingshan",
        country: "Fanjingshan",
        img: destinationImg2
    },
    {
        city: "Vevey",
        country: "Switherland",
        img: destinationImg3
    },
    {
        city: "Skadar",
        country: "Montenegro",
        img: destinationImg4
    }
]

const DestinationSection = () => {
    return (
        <section className="destenationSection">
            <div className="destenationTop">
                <h2>Featured destinations</h2>
                <Link to="/destinations">
                    <a href="#">
                        View all
                        <img className="vector" src={vector} alt="Vector" />
                    </a>
                </Link>
            </div>
            <div className="destenationBottom">
                {data.map(({ city, country, img }) => (
                    <SingleDistination key={city} city={city} country={country} img={img} />
                ))}
            </div>
            <div className="showMoreBtn">
                <SecondaryButton name={"Show more"} />
            </div>
        </section>
    )
}

export default DestinationSection