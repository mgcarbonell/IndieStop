import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "../components/HomePage/Home"
import Cart from "../components/Cart/Cart"
import Checkout from "../components/CheckoutPage/Checkout"

const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  )
}

export default RouteConfig
