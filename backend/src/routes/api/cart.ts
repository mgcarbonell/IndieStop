import express from "express"
import cartController from "../../controllers/cart"

const router = express.Router()

router.get("", cartController.getCart)
router.post("", cartController.postCart)
router.delete("", cartController.deleteCart)

export default router
