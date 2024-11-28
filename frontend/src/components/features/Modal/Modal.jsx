import React, { useState, useEffect } from "react"
import CloseImg from "../../assets/icons/closeBtn.png"
import { createCard, updateCard } from "../../api"
import { useDispatch, useSelector } from "react-redux"
import { setModal, setUpdate, updateCard as updateReduxCard, createCard as createReduxCard } from "../../../redux/Actions/cardActions"
import "./Modal.css"

const Modal = () => {
    const dispatch = useDispatch()
    const { update, modal, data } = useSelector((state) => state.cards)

    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [cost, setCost] = useState("")
    const [continent, setContinent] = useState("")
    const [img, setImg] = useState("")

    useEffect(() => {
        if (update) {
            setName(update.name)
            setCountry(update.country)
            setCost(update.cost)
            setContinent(update.continent)
            setImg(update.img)
        }
    }, [update])

    const Close = () => {
        dispatch(setModal(false))
    }

    const handleSave = () => {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`

        const newCard = {
            id: update ? update.id : data.length,
            name,
            country,
            cost: parseFloat(cost),
            continent,
            img,
            lastUpdated: formattedDate,
        }

        if (update) {
            updateCard(newCard.id, newCard).then(() => {
                dispatch(updateReduxCard(update.id, newCard))
                dispatch(setUpdate(""))
            })
        } else {
            createCard(newCard).then(() => {
            dispatch(createReduxCard(newCard))
            })
        }

        Close()
    }

    return (
        modal && (
            <div id="modal">
                <div className="modal">
                    <button id="closeBtn" onClick={Close}>
                        <img src={CloseImg} alt="close button" />
                    </button>
                    <input
                        type="text"
                        id="name"
                        placeholder="Destination name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        id="country"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <input
                        type="number"
                        id="cost"
                        placeholder="Cost"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    />
                    <select
                        name="continents"
                        id="continents"
                        value={continent}
                        onChange={(e) => setContinent(e.target.value)}
                    >
                        <option value="" disabled>
                            Continent
                        </option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="South America">South America</option>
                    </select>
                    <label htmlFor="img">Choose an image</label>
                    <input
                        type="file"
                        id="img"
                        onChange={(e) =>
                            e.target.files[0] && setImg(URL.createObjectURL(e.target.files[0]))
                        }
                    />
                    <button className="save" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        )
    )
}

export default Modal
