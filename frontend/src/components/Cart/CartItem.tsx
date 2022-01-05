import React, { useEffect, useContext } from "react"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"

const CartItem = (item: any) => {
  const count: any = {}
  const { items, total } = useContext(ShoppingCartContext)
  useEffect(() => {
    items?.forEach((item) => {
      if (!count[item.title]) count[item.title] = 1
      else ++count[item.title]
    })
    console.log(`count from use effect `, count)
  }, [])
  return (
    <div key={"key" + item.item.id}>
      <img src={item.item.img_url} alt={`a ${item.item.title} onesie`} />
      <h1>{item.item.title}</h1>
      <p>{count[item.item.title]}</p>
      <p>{total}</p>
    </div>
  )
}

export default CartItem
