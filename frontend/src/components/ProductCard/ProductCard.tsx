import React, { useContext, useEffect } from "react"
import { Card, CardContent, CardMedia, Fab, Typography } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"
import { Button } from "@mui/material"
import IProductCardProps from "../../interfaces/productProp.interface"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
// import Cart from "../../models/cart"

const ProductCard: React.FC<IProductCardProps> = ({
  title,
  description,
  img_url,
  price,
  id,
}) => {
  // const prodId = { id }

  // const addToCart = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   Cart.post(prodId)
  // }
  const { quantity, items, total, setItems, setQuantity, setTotal } =
    useContext(ShoppingCartContext)

  let cart = localStorage.getItem("items") || "[{}]"
  cart = JSON.parse(cart)

  const addToCart = (e: React.FormEvent) => {
    e.preventDefault()
    setItems([...items, { description, title, price, img_url, id }])
    setTotal(total + price)
    setQuantity(quantity + 1)
    localStorage.setItem("items", JSON.stringify(items))
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
          <Fab color="primary" aria-label="add to cart">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddShoppingCart />}
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          </Fab>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
