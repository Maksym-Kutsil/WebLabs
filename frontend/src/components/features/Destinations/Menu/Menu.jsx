import React, { useContext } from "react"
import Count from "../../buttons/Count/Count"
import Sort from "../../buttons/Sort/Sort"
import { DataContext } from "../../../../providers/DataContext"
import { ModalContext } from "../../../../providers/ModalContext"
import "./Menu.css"

const Menu = () => {
    const { setSort, setContinents , setPrice } = useContext(DataContext)
    const { setModalValue, setName, setCost, setImg, setLastUpdated, setContinent } = useContext(ModalContext)

    const sortRef = React.useRef(null);
    const filterContinentRef = React.useRef(null)
    const filterPriceRef = React.useRef(null)

    const handleSort = () => {
        const query = sortRef.current.value
        if (query) {
            setSort(query)
        }
        else {
            setSort("")
        }
    }

    const continentFilter = () => {
        const query = filterContinentRef.current.value;
        if (query !== "Continents") {
            setContinents(query);
        } else {
            setContinents("")
        }
    }
    


    const handlePriceFilter = () => {
        const query = filterPriceRef.current.value
        if (query !== "Price") {
            setPrice(+query)
        } else {
            setPrice("")
        }
    }

    const openCreateModal = () => {
        setName("")
        setCost("")
        setImg("")
        setLastUpdated("")
        setContinent("")
        setModalValue(true)
    }

    return (
        <section className="menu">
            <button className="addNewDestination" onClick={openCreateModal}>Add new destination</button>
            <h1 className="headline">Manage destination</h1>
            <div className="sortContainer">
                <h3>Sort by:</h3>
                <Sort ref={sortRef} values={["Sort", "A-Z", "Z-A", "0-99", "99-0"]} sort={handleSort} />
            </div>
            <h2>Count price</h2>
            <Count />
            <h2>Filters:</h2>
            <Sort ref={filterContinentRef} values={["Continents", "Europe", "Asia", "South America"]} sort={continentFilter}/>
            <Sort ref={filterPriceRef} values={["Price", 500, 1000, 1500, 2000]} sort={handlePriceFilter} />
        </section>
    )
}

export default Menu