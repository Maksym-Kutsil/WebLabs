import React from "react"
import Count from "../../buttons/Count/Count"
import Sort from "../../buttons/Sort/Sort"
import { useDispatch } from "react-redux"
import { setSort , setContinents, setPrice, setUpdate, setModal } from "../../../../redux/Actions/cardActions"
import "./Menu.css"

const Menu = () => {
    const dispatch = useDispatch()

    const sortRef = React.useRef(null);
    const filterContinentRef = React.useRef(null)
    const filterPriceRef = React.useRef(null)

    const handleSort = () => {
        const query = sortRef.current.value
        if (query !== "Sort") {
            dispatch(setSort(query))
        } else {
            dispatch(setSort(""))
        }
    }

    const continentFilter = () => {
        const query = filterContinentRef.current.value
        if (query !== "Continents") {
            dispatch(setContinents(query))
        } else {
            dispatch(setContinents(""))
        }
    }
    
    const handlePriceFilter = () => {
        const query = filterPriceRef.current.value
        if (query !== "Price") {
            dispatch(setPrice(query))
        } else {
            dispatch(setPrice(""))
        }
    }

    const handleCreate = () => {
        dispatch(setUpdate(""))
        dispatch(setModal(true))
    }


    return (
        <section className="menu">
            <button className="addNewDestination" onClick={handleCreate}>Add new destination</button>
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