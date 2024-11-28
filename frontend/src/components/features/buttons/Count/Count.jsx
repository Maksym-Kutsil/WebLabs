import React, { useState } from "react"
import { getTotalCost } from "../../../api"
import { useSelector } from "react-redux"
import "./Count.css"

const Count = () => {
    const { search, continents, price } = useSelector((state) => state.cards)

    const  [total, setTotal] = useState(0)

    const Counting  = () => {
        getTotalCost(search,continents,price)
            .then(res => {
                setTotal(res)
            })
    }

    return (
        <>
            <button id="count" onClick={Counting}>Count</button>
            <h3 id="total">Total: {total}$</h3>
        </>
    )
}

export default Count