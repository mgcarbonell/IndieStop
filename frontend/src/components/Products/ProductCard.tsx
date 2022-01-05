import React, { useContext, useEffect } from "react"
import { Card, CardContent, CardMedia, Fab, Typography } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"
import IProductCardProps from "../../interfaces/productProp.interface"
import { CartType } from "../../interfaces/cart.interface"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
// import Cart from "../../models/cart"

const ProductCard = ({
  title,
  description,
  img_url,
  price,
  id,
  products,
}: IProductCardProps) => {
  // const prodId = { id }

  // const addToCart = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   Cart.post(prodId)
  // }

  // let cart = localStorage.getItem("items") || "[{}]"
  // cart = JSON.parse(cart)

  // const addToCart = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   const toCart = { description, title, price, img_url, id }
  //   console.log(`items`, items)
  //   console.log(`toCart`, toCart)
  // setItems([...items, tocart])
  // setItems((items) => [...items, tocart])
  // setItems((items) => [...items, toCart])
  // setTotal(total + price * 100)
  // setQuantity(cart.length - 1)
  // localStorage.setItem("items", JSON.stringify(items))
  // }

  // useEffect(() => {
  //   // console.log("items => ", items)
  // }, [items])

  // useEffect(() => {
  //   setQuantity(cart.length - 1)
  //   return () => {
  //     setQuantity(0)
  //   }
  // }, [items, cart, setQuantity])

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
          <Fab
            color="primary"
            aria-label="add to cart"
            onClick={() => console.log("CLICK")}
          >
            <AddShoppingCart />
          </Fab>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
