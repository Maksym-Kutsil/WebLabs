import React, { useState } from "react"
import { DataContext } from "../../../page/HomeLayout/HomeLayout"
import "./Count.css"

const Count = () => {
    const { filterData } = React.useContext(DataContext)
    const  [total, setTotal] = useState(0)

    const Counting  = () => {
        const totalCost = filterData.reduce((sum, destination) => sum + destination.cost, 0)
        setTotal(totalCost)
        
    }

    return (
        <>
            <button id="count" onClick={Counting}>Count</button>
            <h3 id="total">Total: {total}$</h3>
        </>
    )
}

export default Count