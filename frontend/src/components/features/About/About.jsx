import React, {  useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { DataContext } from "../../../providers/DataContext"
import { Link } from "react-router-dom"
import "./About.css"

const About = () => {
    const { id } = useParams()
    const { data, about, setAbout ,cart , setCart } = useContext(DataContext)

    useEffect(() => {
        if (id) {
            const foundItem = data.find(item => item.id === parseInt(id))
            setAbout(foundItem || null)
        }
    }, [data, id, setAbout])

    if (!about) {
        return (
            <div className="notFound">
                <h1>Item not found</h1>
            </div>
        )
    }

    const addDestination = () => {
        if (about && cart) {
            const isItemInCart = cart.some(item => item.id === about.id)
            
            if (!isItemInCart) {
                setCart([...cart, about])
            }
        } else if (about) {
            setCart([about])
        }
    }
    
    return (
        <div className="container">
            <div className="imgContainer">
                <img src={about.img} alt={about.name} />
            </div>
            <div className="textContainer">
                <h1>{about.name}</h1>
                <h2>{about.country}</h2>
                <h2>{about.continent}</h2>
                <h2>{about.lastUpdated}</h2>
                <h2 className="cost">{about.cost}$</h2>
                <div className="buttonsContainer">
                    <Link to="/destinations" className="link">Catalog</Link>
                    <button className="add" onClick={addDestination}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default About