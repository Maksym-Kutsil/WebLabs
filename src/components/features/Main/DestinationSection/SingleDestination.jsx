import React, { useState } from "react"
import "./DestinationSection.css"
import vector from "../../../assets/icons/vector.svg"
import SingleDistination from "./DestinationSection"
import { DataContext } from "../../../page/HomeLayout/HomeLayout"
import { Link } from "react-router-dom"

const DestinationSection = () => {
  const { filterData } = React.useContext(DataContext)

  const [displayedData, setDisplayedData] = useState(filterData.slice(0, 4))

  const showAll = () => {
    const nextDestinations = filterData.slice(0, displayedData.length + 4)
    setDisplayedData(nextDestinations)
  }

  return (
    <section className="destenationSection">
      <div className="destenationTop">
        <h2>Featured destinations</h2>
        <Link to="/destinations">
          View all
          <img className="vector" src={vector} alt="Vector" />
        </Link>
      </div>
      <div className="destenationBottom">
        {displayedData.map(({ name, country, img, key }) => (
          <SingleDistination key={key} name={name} country={country} img={img} />
        ))}
      </div>
      <div className="showMoreBtn">
        <button onClick={showAll}>Show more</button>
      </div>
    </section>
  )
}

export default DestinationSection