import React from "react"
import Menu from "./Menu/Menu"
import Items from "./Catalog/Catalog"
import "./Destinations.css"
import Modal from "../Modal/Modal"


const Destinations = () => {
    return (
        <main>
                <Modal/>
                <Menu/>
                <Items/>
        </main>
    )
}

export default Destinations