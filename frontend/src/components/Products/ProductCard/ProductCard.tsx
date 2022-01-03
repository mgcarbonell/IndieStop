import React, { useState, useEffect } from "react"
import IProductResponse from "../../../interfaces/productResponse.interface"
import { AddShoppingCart } from "@mui/icons-material"
import { Button } from "@mui/material"
// { description, title, img_url, price, stock }
const ProductCard = () => {
  return (
    <div>
      <div>Product Data</div>
      <Button>
        <AddShoppingCart />
      </Button>
    </div>
  )
}

export default ProductCard
