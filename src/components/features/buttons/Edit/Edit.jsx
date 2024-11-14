import React, { useContext } from "react"
import "./Edit.css"
import { ModalContext } from "../../../page/HomeLayout/HomeLayout"
import { DataContext } from "../../../page/HomeLayout/HomeLayout"

const Edit = ({ id }) => {
    const { filterData } = useContext(DataContext)
    const {
        setModalValue, setName, setCost, setImg, setCountry, setId
    } = useContext(ModalContext)

    const handleEdit = () => {
        const itemToEdit = filterData.find(item => item.id === id)

        if (itemToEdit) {
            setName(itemToEdit.name)
            setCost(itemToEdit.cost)
            setImg(itemToEdit.img)
            setCountry(itemToEdit.country)
            setId(id)
            setModalValue(true)
        } else {
            console.error("Item not found for editing")
        }
    }

    return <button className="edit" onClick={handleEdit}>Edit</button>;
}

export default Edit