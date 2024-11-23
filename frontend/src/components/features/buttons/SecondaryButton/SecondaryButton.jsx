import React from "react"
import "./SecondaryButton.css"

const SecondaryButton = (props) => {
    return (
        <a href="#" className="registerBtn">
            {props.name}
        </a>
    )
}

export default SecondaryButton