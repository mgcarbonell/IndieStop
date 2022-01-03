import React, { useState, useEffect } from "react"
import ProductCard from "./ProductCard/ProductCard"
import IProductResponse from "../../interfaces/productResponse.interface"

const ProductList = () => {
  const [products, setProducts] = useState<Array<IProductResponse>>([])
  return (
    <div>
      <ProductCard />
    </div>
  )
}

export default ProductList
