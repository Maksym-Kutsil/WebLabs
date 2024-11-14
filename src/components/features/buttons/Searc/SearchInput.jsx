import React from "react"
import { DataContext } from "../../../page/HomeLayout/HomeLayout"
import "./Search.css"

const SearchInput = () => {
    const { setSearch , search } = React.useContext(DataContext)

    const handleSearch = (event) => {
        const query = event.target.value
        setSearch(query)
    }

    return (
        <input
            type="text"
            placeholder="Search..."
            id="searchInput"
            value={search}
            onChange={handleSearch}
        />
    )
}

export default SearchInput