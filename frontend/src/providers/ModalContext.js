import React, { createContext, useState } from "react"

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
    const [modalValue, setModalValue] = useState(false)
    const [name, setName] = useState("")
    const [cost, setCost] = useState("")
    const [lastUpdated, setLastUpdated] = useState("")
    const [img, setImg] = useState("")
    const [country, setCountry] = useState("")
    const [id, setId] = useState()
    const [continent, setContinent] = useState()

    return (
        <ModalContext.Provider value={{
            modalValue, setModalValue,
            name, setName,
            cost, setCost,
            id, setId,
            img, setImg,
            lastUpdated, setLastUpdated,
            country, setCountry,
            continent, setContinent,
        }}>
            {children}
        </ModalContext.Provider>
    )
}