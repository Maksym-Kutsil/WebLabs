import React from "react";
import "./Sort.css";

const Sort = (props) => {
    return (
        <select name="sort" className="sort">
            {props.values.map((value, index) => (
                <option key={index} value={value}>{value}</option>
            ))}
        </select>
    )
}

export default Sort
