import React from "react"
import SingleItem from "./Item.jsx"
import SearchInput from "../../buttons/Searc/SearchInput.jsx"
import { DataContext } from "../../../page/HomeLayout/HomeLayout.jsx"
import "./Catalog.css"

const Items = () => {
    const { filterData } = React.useContext(DataContext)

    return (
        <section className="items">
            <div className="itemButtons">
                <SearchInput />
            </div>
            <div id="itemContainer">
                {filterData.map((item) => (
                    <SingleItem
                        key={item.key}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        cost={item.cost}
                        lastUpdated={item.lastUpdated}
                    />
                ))}
            </div>
        </section>
    )
}

export default Items