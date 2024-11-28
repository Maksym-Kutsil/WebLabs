import React, { useState, useEffect } from "react"
import "./DestinationSection.css"
import vector from "../../../assets/icons/vector.svg"
import SingleDistination from "./SingleDestination"
import { useDispatch, useSelector } from "react-redux"
import { setData } from "../../../../redux/Actions/cardActions"
import { Link } from "react-router-dom"
import { getCards } from "../../../api"

const DestinationSection = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.cards)
  const [displayedData, setDisplayedData] = useState([])

  useEffect(() => {
    getCards()
      .then((res) => {
        dispatch(setData(res))
        setDisplayedData(res.slice(0, 4))
      })
      .catch((err) => {
        console.error("Error fetching cards:", err)
      })
  }, [dispatch])

  const showAll = () => {
    setDisplayedData((prevDisplayedData) => {
      const nextDestinations = data.slice(0, prevDisplayedData.length + 4)
      return nextDestinations;
    })
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
        {displayedData.map(({ name, country, img, id }) => (
          <SingleDistination key={id} name={name} country={country} img={img} />
        ))}
      </div>
      <div className="showMoreBtn">
        <button onClick={showAll}>Show more</button>
      </div>
    </section>
  )
}

export default DestinationSection