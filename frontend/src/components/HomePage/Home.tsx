import React, { useEffect, useState } from "react"
import ProductList from "../Products/ProductList"

const HomePage: React.FC = () => {
  return (
    <div className="home_page">
      <ProductList />
    </div>
  )
}

export default HomePage
