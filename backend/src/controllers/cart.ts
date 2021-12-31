import { Cart } from "../entity/cart"
import { CartItem } from "../entity/cartitem"
import { ICartItems } from "./interfaces"
import { Product } from "../entity/product"
import express from "express"
import logger from "../utils/Logger"

const getCart = async (req: express.Request, res: express.Response) => {
  const product: ICartItems[] = []
  try {
    await CartItem.find({ relations: ["product_id"] }).then((citem) => {
      citem.forEach((item) => {
        product.push({
          id: item.id,
          title: item.product_id.title,
          cartItem: { quantity: item.quantity },
        })
        res.json({ products: product }).status(200)
      })
    })
  } catch (err: any) {
    logger.error(err)
    res.sendStatus(500)
  }
}

const postCart = async (req: express.Request, res: express.Response) => {
  const prodId: number = parseInt(req.body.productId, 10)
  try {
    await CartItem.find({
      relations: ["product_id"],
      where: { product_id: { id: prodId } },
    }).then((availableProduct) => {
      if (availableProduct.length === 0) {
        Product.findOne({ where: { id: prodId } })
          .then((prod) => {
            Cart.find({ select: ["id"] })
              .then((cart) => {
                const defQuantity = 1
                const cartitem = new CartItem()
                cartitem.quantity = defQuantity
                cartitem.cart_id = cart[cart.length - 1]
                cartitem.product_id = prod as Product
                cartitem.save()
                res.json({ cartitem }).status(201)
              })
              .catch(logger.error)
          })
          .catch(logger.error)
      } else {
        const updateQuantity = availableProduct[0].quantity + 1
        CartItem.update(
          { id: availableProduct[0].id },
          { quantity: updateQuantity }
        )
        res.json({ quantity: updateQuantity }).status(201)
      }
    })
  } catch (err: any) {
    logger.error(err)
    res.sendStatus(500)
  }
}

const deleteCart = async (req: express.Request, res: express.Response) => {
  const prodId: number = parseInt(req.body.productId, 10)
  try {
    await CartItem.delete({ id: prodId })
    res.json({ message: "Product deleted" }).status(200)
  } catch (err: any) {
    logger.error(err)
    res.sendStatus(500)
  }
}

export default module.exports = {
  getCart,
  postCart,
  deleteCart,
}
