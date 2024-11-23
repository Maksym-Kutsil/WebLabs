import React, { createContext, useState } from "react"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [dataValue, setDataValue] = useState()
    const [search, setSearch] = useState("")
    const [continents, setContinents] = useState("")
    const [price, setPrice] = useState("")
    const [sort, setSort] = useState([])
    const [data, setData] = useState([])
    const [about, setAbout] = useState()
    const [cart, setCart] = useState()

    return (
        <DataContext.Provider value={{
            dataValue, setDataValue,
            search, setSearch,
            continents, setContinents,
            price, setPrice,
            sort, setSort,
            about, setAbout,
            cart, setCart,
            data, setData,
        }}>
            {children}
        </DataContext.Provider>
    )
}