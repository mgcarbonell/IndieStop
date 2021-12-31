import { Cart } from "src/entity/cart"
import { CartItem } from "src/entity/cartitem"
import { Product } from "src/entity/product"
import express from "express"
import logger from "src/utils/Logger"

const getCart = async (req: express.Request, res: express.Response) => {
  const product: CartItem[] = []
  await CartItem.find({ relations: ["product_id"] }).then((citem) => {
    citem.forEach((item) => {
      product.push({
        id: item.id,
        title: item.product_id.title,
        cartItem: { quantity: item.quantity },
      })
    })
  })
}
