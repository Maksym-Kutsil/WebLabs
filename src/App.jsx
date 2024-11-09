import React from "react"
import HomeLayout from "./components/page/HomeLayout/HomeLayout"
import Main from "./components/features/Main/Main"
import Destinations from "./components/features/Destinations/Destinations"
import { Routes , Route } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Main/>}/>
        <Route path="/destinations" element={<Destinations/>}/>
      </Route>
    </Routes>
  )
}

export default App