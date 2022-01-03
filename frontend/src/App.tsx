import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Products from "./models/products"

const App: React.FC = () => {
  const [products, setProducts] = useState<[]>([])
  const [prices, setPrices] = useState<[]>([])

  const getProducts = async () => {
    Products.getAll()
  }

  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  )
}

export default App
