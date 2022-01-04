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
  subtotal,
}) => {
  // for stripe //
  const unit_amount = { subtotal }
  return (
    <div>
      <Card>
        <CardMedia component="img" image={img_url} alt={`A ${title} onesie`} />
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
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
