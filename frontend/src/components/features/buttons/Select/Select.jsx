import React from "react"
import "./Select.css"

const Select = (props) => {
    return (
        <select defaultValue="">
            <option value="" disabled hidden>
                {props.name}
            </option>
            <option>option1</option>
            <option>option2</option>
            <option>option3</option>
        </select>
    )
}

export default Select