import React, { forwardRef } from "react"
import "./Sort.css"

const Sort = forwardRef(function Sort(props, ref) {
        return (
            <select name="sort" className="sort" ref={ref} onInput={props.sort}>
                {props.values.map((value, index) => (
                    <option key={index} value={value}>{value}</option>
                ))}
            </select>
        )
    }
)

export default Sort
