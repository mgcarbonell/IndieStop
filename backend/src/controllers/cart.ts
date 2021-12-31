import { Cart } from "src/entity/cart"
import { CartItem } from "src/entity/cartitem"
import { ICartItems } from "./interfaces"
import { Product } from "src/entity/product"
import express from "express"
import logger from "src/utils/Logger"

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
    await CartItem.find({ relations: ["product_id"], where: { product_id: { id: prodId } } })
      .then(avaiProd => {
        if (avaiProd.length === 0) {
          Product.findOne({ where: { id: prodId } })
        }
      })
    } catch (err: any) {
      logger.error(err)
      res.sendStatus(500)
    }
  }
}
