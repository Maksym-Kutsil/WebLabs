import React, { useContext } from "react"
import Count from "../../buttons/Count/Count"
import Sort from "../../buttons/Sort/Sort"
import { DataContext } from "../../../page/HomeLayout/HomeLayout"
import { ModalContext } from "../../../page/HomeLayout/HomeLayout"
import "./Menu.css"

const Menu = () => {
    const { setFilter, setSort, setPriceFilter } = useContext(DataContext)
    const { setModalValue, setName, setCost, setImg, setLastUpdated } = useContext(ModalContext)

    const sortRef = React.useRef(null);
    const filterContinentRef = React.useRef(null)
    const filterPriceRef = React.useRef(null)

    const handleSort = () => {
        const query = sortRef.current.value
        setSort(query)
    }

    const handleContenentFilter = () => {
        const query = filterContinentRef.current.value;
        if (query !== "Continents") {
            setFilter(query)
        } else {
            setFilter("")
        }
    }

    const handlePriceFilter = () => {
        const query = filterPriceRef.current.value
        if (query !== "Price") {
            setPriceFilter(+query)
        } else {
            setPriceFilter("")
        }
    }

    const openCreateModal = () => {
        setName("")
        setCost("")
        setImg("")
        setLastUpdated("")
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
            <Sort ref={filterContinentRef} values={["Continents", "Europe", "Asia", "South America"]} sort={handleContenentFilter} />
            <Sort ref={filterPriceRef} values={["Price", 500, 1000, 1500, 2000]} sort={handlePriceFilter} />
        </section>
    )
}

export default Menu