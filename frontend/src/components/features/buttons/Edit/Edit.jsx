import React, { useContext } from "react"
import "./Edit.css"
import { ModalContext } from "../../../../providers/ModalContext"
import { DataContext } from "../../../../providers/DataContext"

const Edit = ({ id }) => {
    const {
        setModalValue, setName, setCost, setImg, setCountry, setId ,setContinent
    } = useContext(ModalContext)
    const { data } =  useContext(DataContext)

    const handleEdit = () => {
        const itemToEdit = data.find(item => item.id === id)

        if (itemToEdit) {
            setName(itemToEdit.name)
            setCost(itemToEdit.cost)
            setImg(itemToEdit.img)
            setCountry(itemToEdit.country)
            setContinent(itemToEdit.continent)
            setId(id)
            setModalValue(true)
        } else {
            console.error("Item not found for editing")
        }
    }

    return <button className="edit" onClick={handleEdit}>Edit</button>;
}

export default Edit