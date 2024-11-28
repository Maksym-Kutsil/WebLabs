import React, { useEffect, useState } from "react"
import SingleItem from "./Item.jsx"
import SearchInput from "../../buttons/Searc/SearchInput.jsx"
import { useDispatch, useSelector } from "react-redux"
import { getCards } from "../../../api.js"
import { setData } from "../../../../redux/Actions/cardActions.js"
import ClipLoader from "react-spinners/ClipLoader"
import "./Catalog.css"

const Items = () => {
    const dispatch = useDispatch()
    const { data = [], search, sort, continents, price } = useSelector((state) => state.cards)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getCards(search, sort, continents, price)
            .then((res) => {
                dispatch(setData(res))
            })
            .catch((err) => {
                console.error("Error fetching items:", err)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [search, sort, continents, price])

    return (
        <section className="items">
            <div className="itemButtons">
                <SearchInput />
            </div>
            {loading ? (
                <div className="spinerContainer">
                    <ClipLoader />
                </div>
            ) : (
                <div id="itemContainer">
                    {data?.map((item,index) => (
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