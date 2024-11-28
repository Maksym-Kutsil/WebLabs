import { deleteCard } from "../../../api"
import { useDispatch, useSelector } from "react-redux"
import { setData } from "../../../../redux/Actions/cardActions"
import "./Remove.css"

const Remove = (props) => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.cards.data)

    const handleRemove = () => {
        deleteCard(props.id).then(() => {
            const updatedData = data.filter(card => card.id !== props.id)
            dispatch(setData(updatedData))
        })
    }
    
    return (
        <button className="remove" onClick={handleRemove}>
            Remove
        </button>
    )
}

export default Remove