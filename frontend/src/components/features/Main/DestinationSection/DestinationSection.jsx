import React, { useState , useEffect, useContext } from "react"
import "./DestinationSection.css"
import vector from "../../../assets/icons/vector.svg"
import SingleDistination from "./SingleDestination"
import { DataContext } from "../../../../providers/DataContext"
import { getCards } from "../../../api"
import { Link } from "react-router-dom"

const DestinationSection = () => {
    const { data, setData , search, sort , continents , price } = useContext(DataContext)
    const [displayedData, setDisplayedData] = useState([])

    useEffect(() => {
        getCards(search,sort,continents,price)
        .then(res => {
            setData(res)
            setDisplayedData(res.slice(0, 4))
        })
    },[search,sort,continents,price])
    
    
    
    const showAll = () => {
      const nextDestinations = data.slice(0, displayedData.length + 4)
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