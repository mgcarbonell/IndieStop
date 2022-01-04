import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "../components/HomePage/Home"
import Cart from "../components/Cart/Cart"
import Checkout from "../components/CheckoutPage/Checkout"

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default RouteConfig
