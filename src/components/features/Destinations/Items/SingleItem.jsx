import React from "react";
import Edit from "../../buttons/Edit/Edit";
import Remove from "../../buttons/Remove/Remove";

const SingleItem = (props) => {
    return (
        <div className="item">
            <img src={props.img} />
            <div className="itemInfo">
                <h2>{props.name}</h2>
                <p className="cardText">{props.text}</p>
                <strong>{props.cost}$</strong>
                <p className="updated">Last updated:{props.lastUpdated}</p>
                <div className="buttons">
                    <Edit/>
                    <Remove/>
                </div>
            </div>
        </div>
    )
}

export default SingleItem