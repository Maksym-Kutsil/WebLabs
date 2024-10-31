import React from "react";
import "./LearnMoreSection.css"
import learnMoreSectionImg from "./images/learnMoreSectionImg.svg"

const LearnMoreSection = () => {
    return (
        <section className="learnMoreSection">
            <img className="learnMoreImg" src={learnMoreSectionImg} alt="section2" />
            <div className="learnMoreContent">
                <h2>
                    A new way to explore the <br /> world{" "}
                </h2>
                <p>
                    For decades travellers have reached for Lonely Planet books when looking
                    to plan and execute their perfect trip, but now, they can also let Lonely
                    Planet Experiences lead the way
                </p>
                <a href="#" className="learnMoreButton">
                    Learn more
                </a>
            </div>
        </section>
    )
}

export default LearnMoreSection