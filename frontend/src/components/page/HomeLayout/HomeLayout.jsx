import React from "react"
import Header from "../../features/Header/Header"
import Footer from "../../features/Footer/Footer"
import "./HomeLayout.css"
import { Outlet } from "react-router-dom"
import { ModalProvider } from "../../../providers/ModalContext"
import { DataProvider } from "../../../providers/DataContext"

export const ModalContext = React.createContext()
export const DataContext = React.createContext()

const HomeLayout = () => {


    return (
        <DataProvider>
            <ModalProvider>
                <Header />
                <Outlet />
                <Footer />
            </ModalProvider>
        </DataProvider>
    )
}

export default HomeLayout