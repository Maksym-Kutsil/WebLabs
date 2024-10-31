import React from "react";
import "./DestinationSection.css"
import vector from "./images/vector.svg"
import destinationImg1 from "./images/destinationSectionImg1.svg"
import destinationImg2 from "./images/destinationSectionImg2.svg"
import destinationImg3 from "./images/destinationSectionImg3.svg"
import destinationImg4 from "./images/destinationSectionImg4.svg"
import SingleDistination from "./SingleDestination";

const DestinationSection = () => {
    return (
        <section className="destenationSection">
            <div className="destenationTop">
                <h2>Featured destinations</h2>
                <a href="#">
                    View all
                    <img className="vector" src={vector} alt="Vector" />
                </a>
            </div>
            <div className="destenationBottom">
                <SingleDistination city="Raja Ampat" country="Indonesia" img={destinationImg1}/>
                <SingleDistination city="Fanjingshan" country="China" img={destinationImg2}/>
                <SingleDistination city="Vevey" country="Switherland" img={destinationImg3}/>
                <SingleDistination city="Skadar" country="Montenegro" img={destinationImg4}/>
            </div>
        </section>
    )
}

export default DestinationSection