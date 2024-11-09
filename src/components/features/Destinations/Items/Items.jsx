import React  from "react";
import SingleItem from "./SingleItem.jsx"
import Data from "../../../assets/utils/DestinetionData.js";
import SearchInput from "../../buttons/Searc/SearchInput.jsx";
import Search from "../../buttons/Searc/Search.jsx";
import Clear from "../../buttons/Searc/Clear.jsx";
import "./Items.css"

const Items = () => {
    return (
        <section className="items">
            <div className="itemButtons">
                <SearchInput/>
                <Search/>
                <Clear/>
            </div>
            <div id="itemContainer">
                {Data.map((item) => (
                    <SingleItem key={item.id} id={item.id} img={item.img} name={item.name} text={item.text} cost={item.cost} lastUpdated={item.lastUpdated}/>
                ))}
            </div>
        </section>
    )
}

export default Items