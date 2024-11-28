import React from "react"
import Header from "../../features/Header/Header"
import Footer from "../../features/Footer/Footer"
import "./HomeLayout.css"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {


    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

export default HomeLayout