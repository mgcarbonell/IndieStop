import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Products from "./models/products"
import IProductResponse from "./interfaces/productResponse.interface"

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
          <Route path="/checkout" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
