import express from "express"
import cartRouter from "./cart"
import productRouter from "./product"
// import userRouter from "./user"

const router = express.Router()

router.use("/cart", cartRouter)
router.use("/product", productRouter)

export default router
