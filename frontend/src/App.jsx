import React from "react"
import HomeLayout from "./components/page/HomeLayout/HomeLayout"
import Main from "./components/features/Main/Main"
import Destinations from "./components/features/Destinations/Destinations"
import About from "./components/features/About/About"
import Cart from "./components/features/Cart/Cart"
import { Routes , Route } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Main/>}/>
        <Route path="/destinations" element={<Destinations/>}/>
        <Route path="/about/:id" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Route>
    </Routes>
  )
}

export default App