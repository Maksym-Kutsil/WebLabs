import React , { useState , useMemo } from "react";
import Header from "../../features/Header/Header";
import Footer from "../../features/Footer/Footer";
import "./HomeLayout.css"
import Data from "../../assets/utils/DestinetionData";
import { Outlet } from "react-router-dom";

export const ModalContext = React.createContext()
export const DataContext = React.createContext()

const HomeLayout = () => {
    const [modalValue, setModalValue] = useState(false)
    const [name, setName] = useState("")
    const [cost, setCost] = useState("")
    const [lastUpdated, setLastUpdated] = useState("")
    const [img, setImg] = useState("")
    const [country, setCountry] = useState("")
    const [id, setId] = useState()
    const [cart, setCart] = useState()

    const [about, setAbout] = useState()
    const [dataValue, setDataValue] = useState(Data)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [priceFilter, setPriceFilter] = useState('')
    const [sort, setSort] = useState([])

    const filterData = useMemo(() => {
        const sortedData = [...dataValue];
        
        switch (sort) {
            case "A-Z":
                sortedData.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "Z-A":
                sortedData.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "0-99":
                sortedData.sort((a, b) => a.cost - b.cost);
                break;
            case "99-0":
                sortedData.sort((a, b) => b.cost - a.cost);
                break;
        }
        
        if (!search.length && !filter && !priceFilter) return sortedData
    
        return sortedData.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase().trim()) &&
            (!filter || item.continent === filter) && (!priceFilter || item.cost >= priceFilter)
        )
    }, [search, dataValue, filter, sort, priceFilter])
    
    const onClearSearch = () => {
        setSearch('')
    }

    return (
        <DataContext.Provider value={{ dataValue, setDataValue , filterData , setSearch , onClearSearch , search , filter , setFilter , priceFilter, setPriceFilter , sort, setSort, about, setAbout , cart, setCart}}>
        <ModalContext.Provider value={{ modalValue , setModalValue , name , setName , cost ,setCost , id, setId , img, setImg , lastUpdated, setLastUpdated, country, setCountry}}>
            <Header />
            <Outlet />
            <Footer />
        </ModalContext.Provider>
        </DataContext.Provider>
    )
}

export default HomeLayout