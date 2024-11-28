import "./Edit.css"
import { setUpdate, setModal } from "../../../../redux/Actions/cardActions"
import { useDispatch, useSelector } from "react-redux"

const Edit = ({ id }) => {
    const { data } = useSelector((state) => state.cards)
    const dispatch = useDispatch()

    const handleEdit = () => {
        const itemToUpdate = data.filter(item => item.id == id)
        dispatch(setUpdate(itemToUpdate[0]))
        dispatch(setModal(true))
    }

    return <button className="edit" onClick={handleEdit}>Edit</button>;
}

export default Edit