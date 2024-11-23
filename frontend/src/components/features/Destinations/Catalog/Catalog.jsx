import React, { useContext, useEffect, useState } from "react"
import SingleItem from "./Item.jsx"
import SearchInput from "../../buttons/Searc/SearchInput.jsx"
import { DataContext } from "../../../../providers/DataContext.js"
import "./Catalog.css"
import { getCards } from "../../../api.js"
import ClipLoader from "react-spinners/ClipLoader";



jj
const Items = () => {
    const { data, setData, search, sort, continents, price } = useContext(DataContext);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
        getCards(search, sort, continents, price)
            .then((res) => {
                setData(res)
            })
            .catch((err) => {
                console.error("Error fetching items:", err)
            })
            .finally(() => {
                setLoading(false)
            })
        },150)
    }, [search, sort, continents, price])

    return (
        <section className="items">
            <div className="itemButtons">
                <SearchInput/>
            </div>
            {loading ? (
                <div className="spinerContainer">
                    <ClipLoader/>
                </div>
            ) : (
                <div id="itemContainer">
                    {data.map((item) => (
                        <SingleItem
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            cost={item.cost}
                            lastUpdated={item.lastUpdated}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Items