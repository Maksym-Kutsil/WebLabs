import React from "react"
import "./Cart.css"

const CartItem = ({ item, onDelete }) => {
    return (
        <div className="cartItem">
            <img src={item.img} alt={item.name} className="cartItemImage" />
            <div className="cartItemDetails">
                <h2>{item.name}</h2>
                <p>Country: {item.country}</p>
                <p>Continent: {item.continent}</p>
                <p>Last Updated: {item.lastUpdated}</p>
                <p className="cost">Cost: ${item.cost}</p>
            </div>
            <div className="deleteContainer">
                <button className="delete" onClick={() => onDelete(item.id)}>Delete</button>
            </div>
        </div>
    )
}

export default CartItem