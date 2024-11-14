import React, { useContext } from "react"
import CloseImg from "../../assets/icons/closeBtn.png"
import { ModalContext } from "../../page/HomeLayout/HomeLayout"
import { DataContext } from "../../page/HomeLayout/HomeLayout"
import "./Modal.css"

const Modal = () => {
    const { filterData, setDataValue } = useContext(DataContext)
    const { modalValue, setModalValue, name, setName, cost, setCost, country, setCountry, id, img, setImg, setLastUpdated } = useContext(ModalContext)

    const Close = () => {
        setModalValue(false)
    }

    const handleEdit = () => {
        console.log(filterData)
        const now = new Date()
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

        if (id >= 0) {
            setLastUpdated(formattedDate)
            setDataValue(prevData =>
                prevData.map(item =>
                    item.id === id
                        ? { ...item, name, cost: parseFloat(cost), img, country, lastUpdated: formattedDate }
                        : item
                )
            )
        } else {
            const newItem = {
                id: filterData.length, 
                name,
                cost: parseFloat(cost),
                img,
                country,
                lastUpdated: formattedDate,
            }
            setDataValue(prevData => [...prevData, newItem])
        }

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