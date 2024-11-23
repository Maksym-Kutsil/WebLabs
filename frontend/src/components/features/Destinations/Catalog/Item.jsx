import React  from "react"
import Edit from "../../buttons/Edit/Edit"
import Remove from "../../buttons/Remove/Remove"
import { Link } from "react-router-dom"

const SingleItem = (props) => {

    return (
        <div className="item">
            <img src={props.img} />
            <div className="itemInfo">
                <h2>{props.name}</h2>
                <strong>{props.cost}$</strong>
                <p className="updated">Last updated:{props.lastUpdated}</p>
                <div className="buttons">
                    <Edit id={props.id}/>
                    <Remove id={props.id}/>
                    <Link to={`/about/${props.id}`} className="link">About</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleItem