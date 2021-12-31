import { Product } from "../entity/product"
import express from "express"
import logger from "src/utils/Logger"

const getAllProducts = async (req: express.Request, res: express.Response) => {
  try {
    const products = await Product.find()
    await res.json(products).status(200)
  } catch (err: any) {
    logger.error(err)
    res.sendStatus(500)
  }
}

const getSingleProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const productId: number = parseInt(req.params.id, 10)
    await Product.findOne({ id: productId }).then((product) => {
      if (product) {
        res.json(product).status(200)
      } else {
        res.sendStatus(404)
      }
    })
  } catch (err: any) {
    logger.error(err)
    res.sendStatus(500)
  }
}

export default module.exports = {
  getAllProducts,
  getSingleProduct,
}