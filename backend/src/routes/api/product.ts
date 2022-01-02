import express from "express"
import productsController from "../../controllers/product"

const router = express.Router()

router.get("", productsController.getAllProducts)
router.get("/:id", productsController.getProductById)
router.put("/:id", productsController.updateProdudctQty)

export default router
