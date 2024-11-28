import React, { useEffect, useRef } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setAbout, setCart } from "../../../redux/Actions/cardActions"
import { Link } from "react-router-dom"
import "./About.css"

const About = () => {
    const selectValueRef = useRef("")
    const countValueRef = useRef("")

    const dispatch = useDispatch()
    const { id } = useParams()
    const { data, about } = useSelector((state) => state.cards)

    useEffect(() => {
        if (id) {
            const foundItem = data.find(item => item.id === parseInt(id))
            
            if (foundItem) {
                dispatch(setAbout(foundItem))
            } else {
                dispatch(setAbout(null))
            }
        }
    }, [id, data])

    if (!about) {
        return (
            <div className="notFound">
                <h1>Item not found</h1>
            </div>
        )
    }

    const AddToCart = () => {
        const selectValue = selectValueRef.current.value;
        const countValue = parseInt(countValueRef.current.value, 10);
    
        if (!selectValue || countValue <= 0) {
            alert("Please select a valid type and quantity.");
            return;
        }
    
        const foundItem = data.find((item) => item.id === parseInt(id))
    
        if (foundItem) {
            const itemToAdd = {
                ...foundItem,
                type: selectValue,
                count: countValue,
            }
    
            const existingCart = JSON.parse(localStorage.getItem("cart")) || []
    
            const isItemInCart = existingCart.some(
                (item) => item.id === itemToAdd.id && item.type === itemToAdd.type
            )
    
            if (!isItemInCart) {
                const updatedCart = [...existingCart, itemToAdd]
                localStorage.setItem("cart", JSON.stringify(updatedCart))
                dispatch(setCart(itemToAdd))
                alert("Item added to cart!")
            } else {
                alert("This item is already in the cart with the selected type.")
            }
        }
    };
        
    
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
                    <select name="" id="" ref={selectValueRef}>
                        <option value="Buget">Buget</option>
                        <option value="Middle">Middle</option>
                        <option value="Business">Business</option>
                    </select>
                    <select name="" id="" ref={countValueRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="buttonsContainer">
                    <Link to="/destinations" className="link">Catalog</Link>
                    <button className="add" onClick={AddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default About