import { Cart } from "../entity/cart"
import { CartItem } from "../entity/cartitem"
import { Product } from "../entity/product"
import express from "express"
import logger from "../utils/Logger"

/**
 * I think I can find a way to fix the getCart function
 * I would just need to make sure to create a cart instance
 * and then push the cart item into the cart instance or
 * create a user, tie the user to the cart, and cart_item
 */

const createCart = async (req: express.Request, res: express.Response) => {
  const newCart = await Cart.create()
  newCart.save()
  return newCart
}

const getCart = async (req: express.Request, res: express.Response) => {
  const product: any[] = []
  try {
    await CartItem.find({ relations: ["product_id"] }).then((citem) => {
      citem.forEach((item) => {
        product.push({
          id: item.id,
          // title: item.product_id.title,
          // cartItem: { quantity: item.quantity },
        })
        logger.info(product)
        res.json({ product: product }).status(200)
      })
    })
  } catch (err: any) {
    logger.error(err)
    res.sendStatus(500)
  }
}

const postCart = async (req: express.Request, res: express.Response) => {
  const prodId: number = req.body.id
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
  createCart,
}
