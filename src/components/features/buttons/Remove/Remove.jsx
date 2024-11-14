import React from "react"
import { DataContext } from "../../../page/HomeLayout/HomeLayout"
import "./Remove.css"

const Remove = (props) => {
    const { dataValue, setDataValue } = React.useContext(DataContext)

    const handleRemove = () => {
        const filteredArr = dataValue.filter(item => item.id !== props.id)
        filteredArr.forEach((element,index) => {
            element.id = index
        })
        setDataValue(filteredArr)
    }

    return (
        <button className="remove" onClick={handleRemove}>Remove</button>
    )
}

export default Remove