import React from "react";
import "./HeroSection.css";
import heroImage from "./images/heroImage.svg"

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
                        <select defaultValue="">
                            <option value="" disabled hidden>
                                Location
                            </option>
                            <option>option1</option>
                            <option>option2</option>
                            <option>option3</option>
                        </select>
                        <select defaultValue="">
                            <option value="" disabled hidden>
                                Activity
                            </option>
                            <option>option1</option>
                            <option>option2</option>
                            <option>option3</option>
                        </select>
                    </div>
                    <div className="selectionsBottom">
                        <select defaultValue="">
                            <option value="" disabled hidden>
                                Grade
                            </option>
                            <option>option1</option>
                            <option>option2</option>
                            <option>option3</option>
                        </select>
                        <select defaultValue="">
                            <option value="" disabled hidden>
                                Date
                            </option>
                            <option>option1</option>
                            <option>option2</option>
                            <option>option3</option>
                        </select>
                    </div>
                    <button type="button" className="heroButton">
                        Explore
                    </button>
                </form>
            </div>
            <img className="heroImg" src={heroImage} alt="section1" />
        </section>
    )
}

export default HeroSection