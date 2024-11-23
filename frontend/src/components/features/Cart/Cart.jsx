import React, { useContext } from "react"
import CartItem from "./CartItem"
import { DataContext } from "../../../providers/DataContext"
import "./Cart.css"

const Cart = () => {
    const { cart, setCart } = useContext(DataContext)

    if (!cart || cart.length === 0) {
        return (
            <div className="notFound">
                <h1>No destinations found</h1>
            </div>
        )
    }

    const handleDelete = (id) => {
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
    }

    return (
        <div className="cartContainer">
            <h1>Your Destinations</h1>
            <div className="cartItems">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    )
}

export default Cart