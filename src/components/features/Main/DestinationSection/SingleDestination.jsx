import React from "react";

const SingleDistination = (props) => {
    return (
        <div className="container">
            <img
                className="card"
                src={props.img}
                alt="Indonesia image"
            />
            <div className="containerText">
                <h3>{props.city}</h3>
                <p>{props.country}</p>
            </div>
        </div>
    )
}

export default SingleDistination