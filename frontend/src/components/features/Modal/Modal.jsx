import React, { useContext } from "react"
import CloseImg from "../../assets/icons/closeBtn.png"
import { ModalContext } from "../../../providers/ModalContext"
import { DataContext } from "../../../providers/DataContext"
import { createCard , updateCard } from "../../api"
import "./Modal.css"

const Modal = () => {
    const {  data, setData , search, sort , continents , price } = useContext(DataContext)
    const { modalValue, setModalValue, name, setName, cost, setCost, country, setCountry, id, img, setImg, continent, setContinent } = useContext(ModalContext)

    const Close = () => {
        setModalValue(false)
    }

    const handleEdit = () => {
        const now = new Date()
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
    
        const newItem = {
            id: id >= 0 ? id : data.length,
            img,
            name,
            cost: parseFloat(cost),
            lastUpdated: formattedDate,
            continent,
            country,
            key: id >= 0 ? id : data.length,
        }
    
        let updatedData
        if (id >= 0) {
            updatedData = data.map(item => item.id === id ? newItem : item)
            updateCard(id, newItem)
        } else {
            updatedData = [...data, newItem]
            createCard(newItem)
        }
    
        if (search) {
            updatedData = updatedData.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase().trim())
            )
        }
    
        if (continents) {
            updatedData = updatedData.filter(item =>
                item.continent.toLowerCase() === continents.toLowerCase().trim()
            )
        }
    
        if (price) {
            updatedData = updatedData.filter(item =>
                item.cost >= +price
            )
        }
    
        if (sort) {
            switch (sort) {
                case '0-99':
                    updatedData = updatedData.sort((a, b) => a.cost - b.cost)
                    break
                case '99-0':
                    updatedData = updatedData.sort((a, b) => b.cost - a.cost)
                    break
                case 'A-Z':
                    updatedData = updatedData.sort((a, b) => a.name.localeCompare(b.name))
                    break
                case 'Z-A':
                    updatedData = updatedData.sort((a, b) => b.name.localeCompare(a.name))
                    break
            }
        }
    
        setData(updatedData)
    
        setModalValue(false)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setImg(imageUrl)
        }
    }

    return (
        modalValue && (
            <div id="modal">
                <div className="modal">
                    <button id="closeBtn" onClick={Close}>
                        <img src={CloseImg} alt="close button" />
                    </button>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Destination name"
                    />
                    <input
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Country"
                    />
                    <input
                        type="number"
                        id="cost"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        placeholder="Cost"
                    />
                    <select 
                        name="continents" 
                        id="continents" 
                        value={continent}
                        onChange={(e) => setContinent(e.target.value)}>
                        <option value="Continent" defaultValue>Continent</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="South America">South America</option>
                    </select>
                    <label htmlFor="img">Choose an image</label>
                    <input
                        type="file"
                        id="img"
                        onChange={handleImageChange}
                    />
                    <button className="save" onClick={handleEdit}>Save</button>
                </div>
            </div>
        )
    )
}

export default Modal