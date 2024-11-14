import React from "react"
import HeroSection from "./HeroSection/HeroSection"
import LearnMoreSection from "./LearnMoreSection/LearnMoreSection"
import DestinationSection from "./DestinationSection/SingleDestination"
import "./Main.css"

const Main = () => {
    return (
        <main className="main">
            <HeroSection/>
            {/* <LearnMoreSection/> */}
            <DestinationSection/>
        </main>
    )
}

export default Main