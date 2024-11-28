import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setSearch } from "../../../../redux/Actions/cardActions"
import "./Search.css"

const SearchInput = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        const inputValue = event.target.value
        setValue(inputValue)
        if (!inputValue.trim()) {
            dispatch(setSearch(""))
        }
    }

    const handleSearch = () => {
        dispatch(setSearch(value.trim()))
    }

    return (
        <div className="searchContainer">
            <input
                type="text"
                placeholder="Search..."
                id="searchInput"
                value={value}
                onInput={handleInputChange}
            />
            <button id="search" onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}

export default SearchInput