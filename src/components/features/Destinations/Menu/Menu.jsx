import React from "react";
import Count from "../../buttons/Count/Count";
import Sort from "../../buttons/Sort/Sort";
import Create from "../../buttons/Create/Create";
import "./Menu.css"

const Menu = () => {
    return (
        <section className="menu">
            <Create />
            <h1 className="headline">Manage distination</h1>
            <div className="sortContainer">
                <h3>Sort by:</h3>
                <Sort values={["Sort","A-Z","Z-A","0-99","99-0"]}/>
            </div>
            <h2>Count price</h2>
            <Count/>
            <h2>Filters:</h2>
            <Sort values={["Continents","Asia","America","Africa"]}/>
            <Sort values={["Rate",1,2,3,4,5]}/>
        </section>
    )
}

export default Menu