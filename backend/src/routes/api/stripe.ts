import express from "express"
import stripeController from "../../controllers/stripe"

const router = express.Router()

router.post("", stripeController.postToStripe)

export default router
