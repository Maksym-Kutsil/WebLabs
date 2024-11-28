import React from "react"
import "./Cart.css"
import { useSelector, useDispatch } from "react-redux"
import { updateCart, removeFromCart } from "../../../redux/Actions/cardActions"

const CartItem = ({ item, onDelete }) => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cards)

    const price = (() => {
        switch (item.type) {
            case "Buget":
                return item.cost
            case "Middle":
                return item.cost * 2
            case "Business":
                return item.cost * 4
            default:
                return item.cost
        }
    })()

    const increment = () => {
        const updatedCart = cart.map((element) =>
            element.id === item.id && element.type === item.type
                ? { ...element, count: +element.count < 5 ? +element.count + 1 : +element.count }
                : element
        )
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        dispatch(updateCart(updatedCart))
    }

    const decrement = () => {
        if (item.count > 1) {
            const updatedCart = cart.map((element) =>
                element.id === item.id && element.type === item.type
                    ? { ...element, count: element.count - 1 }
                    : element
            )
            localStorage.setItem("cart", JSON.stringify(updatedCart))
            dispatch(updateCart(updatedCart))
        } else {
            handleRemove(item.id, item.type)
        }
    }

    const handleRemove = (id, type) => {
        dispatch(removeFromCart(id, type))
        let updatedStore = cart.filter((card) => !(card.id === id && card.type === type))
        localStorage.setItem("cart", JSON.stringify(updatedStore))
        dispatch(updateCart(updatedStore))
    }

    return (
        <div className="cartItem">
            <img src={item.img} alt={item.name} className="cartItemImage" />
            <div className="cartItemDetails">
                <h2>{item.name}</h2>
                <p>Country: {item.country} (${price})</p>
                <p>Continent: {item.continent}</p>
                <p>Last Updated: {item.lastUpdated}</p>
                <p>Type: {item.type}</p>
                <p className="cost">Cost: ${price * item.count}</p>
            </div>
            <div className="deleteContainer">
                <p className="count">{item.count}</p>
                <button className="operators" onClick={increment}>
                    +
                </button>
                <button className="operators" onClick={decrement}>
                    -
                </button>
                <button className="delete" onClick={() => onDelete(item.id, item.type)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default CartItem
