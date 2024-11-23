import React, { useState , useContext } from "react"
import { DataContext } from "../../../../providers/DataContext"
import { getTotalCost } from "../../../api"
import "./Count.css"

const Count = () => {
    const {  search , continents , price } = useContext(DataContext)
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