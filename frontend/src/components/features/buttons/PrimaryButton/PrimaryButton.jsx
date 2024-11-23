import React from "react"
import "./PrimaryButton.css"

const PrimaryButton = (props) => {
    return (
        <a href="#" className="loginBtn">
            {props.name}
        </a>
    )
}

export default PrimaryButton