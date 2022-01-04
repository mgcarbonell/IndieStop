import React, { useState, useEffect } from "react"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"
import { Button } from "@mui/material"
import IProductCardProps from "../../interfaces/productProp.interface"
// { description, title, img_url, price, stock }

const ProductCard: React.FC<IProductCardProps> = ({
  title,
  description,
  img_url,
  price,
  id,
}) => {
  const prodId = { id }
  const addToCart = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("add to cart " + prodId.id)
  }
  return (
    <div>
      <Card>
        <CardMedia>
          <img src={img_url} alt={`A ${title} onesie`} />
        </CardMedia>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <Typography variant="h6" component="h2">
            ${price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCart />}
            onClick={addToCart}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
