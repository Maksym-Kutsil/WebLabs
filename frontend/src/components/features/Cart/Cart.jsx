import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"
import { updateCard, removeFromCart, setCart } from "../../../redux/Actions/cardActions"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    const { cart } = useSelector((state) => state.cards)
    const dispatch = useDispatch()

    let cartStorage = JSON.parse(localStorage.getItem("cart"))

    if (!cart || cart.length === 0) {
        if (cartStorage) {
            for (let i in cartStorage) {
                dispatch(setCart(cartStorage[i]))
            }
        } else {
            return (
                <div className="notFound">
                    <h1>No destinations found</h1>
                </div>
            )
        }
    }

    const handleDelete = (id, type) => {
        dispatch(removeFromCart(id, type))
        let updatedStore = cart.filter((card) => !(card.id === id && card.type === type))
        localStorage.setItem("cart", JSON.stringify(updatedStore))
        dispatch(updateCard(updatedStore))
    }
    
    const totalCost = cart.reduce((acc, item) => {
        let itemCost
        switch (item.type) {
            case "Buget":
                itemCost = item.cost
                break
            case "Middle":
                itemCost = item.cost * 2
                break
            case "Business":
                itemCost = item.cost * 4
                break
            default:
                itemCost = item.cost
        }
        return acc + itemCost * item.count
    }, 0)    

    return (
        <div className="cartContainer">
            <div className="totalCost">
                <h2>Total Price: ${totalCost}</h2> 
                <Link to="/destinations" className="link">Catalog</Link>
            </div>
            <h1>Your Destinations</h1>
            <div className="cartItems">
                {cart.map((item) => (
                    <CartItem key={`${item.id}${item.type}`} item={item} count={item.count} type={item.type} onDelete={() => handleDelete(item.id,item.type)}/>
                ))}
            </div>
        </div>
    )
}

export default Cart