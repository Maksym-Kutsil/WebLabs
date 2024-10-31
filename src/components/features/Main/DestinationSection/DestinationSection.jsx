import React from "react";
import "./DestinationSection.css"
import vector from "./images/vector.svg"
import destinationImg1 from "./images/destinationSectionImg1.svg"
import destinationImg2 from "./images/destinationSectionImg2.svg"
import destinationImg3 from "./images/destinationSectionImg3.svg"
import destinationImg4 from "./images/destinationSectionImg4.svg"

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
                <div className="container">
                    <img
                        className="card"
                        src={destinationImg1}
                        alt="Indonesia image"
                    />
                    <div className="containerText">
                        <h3>Raja Ampat</h3>
                        <p>Indonesia</p>
                    </div>
                </div>
                <div className="container">
                    <img className="card" src={destinationImg2} alt="China image" />
                    <div className="containerText">
                        <h3>Fanjingshan</h3>
                        <p>China</p>
                    </div>
                </div>
                <div className="container">
                    <img
                        className="card"
                        src={destinationImg3}
                        alt="Switzerland img"
                    />
                    <div className="containerText">
                        <h3>Vevey</h3>
                        <p>Switzerland</p>
                    </div>
                </div>
                <div className="container">
                    <img
                        className="card"
                        src={destinationImg4}
                        alt="Montenegro image"
                    />
                    <div className="containerText">
                        <h3>Skadar</h3>
                        <p>Montenegro</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DestinationSection