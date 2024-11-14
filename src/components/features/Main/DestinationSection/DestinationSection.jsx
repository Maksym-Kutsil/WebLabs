import React from "react"

const SingleDistination = (props) => {
    return (
        <div className="destinationContainer">
            <img
                className="card"
                src={props.img}
                alt="Indonesia image"
            />
            <div className="containerText">
                <h3>{props.name}</h3>
                <p>{props.country}</p>
            </div>
        </div>
    )
}

export default SingleDistination