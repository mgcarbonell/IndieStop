import express from "express"
import cartRouter from "./cart"
import productRouter from "./product"
import stripeRouter from "./stripe"
// import userRouter from "./user"

const router = express.Router()

router.use("/cart", cartRouter)
router.use("/product", productRouter)
router.use("/payment", stripeRouter)

export default router
