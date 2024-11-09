import React from "react";
import "./HeroSection.css";
import SecondaryButton from "../../buttons/SecondaryButton/SecondaryButton";
import Select from "../../buttons/Select/Select";
import heroImage from "../../../assets/images/heroImage.svg"

const HeroSection = () => {
    return (
        <section className="heroSection">
            <div className="heroContent">
                <h1>
                    Explore and <br /> Travel
                </h1>
                <h3>
                    Holiday finder <br />
                    ____
                </h3>
                <form className="selectsContainer">
                    <div className="selectionsTop">
                        <Select name="Location"/>
                        <Select name="Activity"/>
                    </div>
                    <div className="selectionsBottom">
                        <Select name="Grade"/>
                        <Select name="Date"/>
                    </div>
                    <SecondaryButton name="Explore"/>
                </form>
            </div>
            <img className="heroImg" src={heroImage} alt="section1" />
        </section>
    )
}

export default HeroSection