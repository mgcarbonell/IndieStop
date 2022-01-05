import React, { useContext, useEffect } from "react"
import { Card, CardContent, CardMedia, Fab, Typography } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"
import IProductCardProps from "../../interfaces/productProp.interface"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
// import Cart from "../../models/cart"

const getLSItems = () => {
  let d = window.localStorage.getItem("items")
  return d
}

const ProductCard = ({
  title,
  description,
  img_url,
  price,
  id,
  products,
}: IProductCardProps) => {
  const { items, total, setItems, quantity, setQuantity, setTotal } =
    useContext(ShoppingCartContext)

  const addToCart = (e: React.FormEvent) => {
    e.preventDefault()
    const toCart = { description, title, price, img_url, id }
    setItems((items: any) => [...items, toCart])
    setTotal(total + price * 100)
    setQuantity(quantity + 1)
    let storage = window.localStorage.getItem("items")
    if (storage === null) {
      window.localStorage.setItem("items", JSON.stringify(id))
    } else {
      window.localStorage.setItem("items", storage + JSON.stringify(id))
    }
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
          <Fab color="primary" aria-label="add to cart" onClick={addToCart}>
            <AddShoppingCart />
          </Fab>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
