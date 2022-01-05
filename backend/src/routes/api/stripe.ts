import express from "express"
import stripeController from "../../controllers/stripe"

const router = express.Router()

router.get("", stripeController.getPubKey)
router.get("/config", stripeController.config)
router.post("", stripeController.postToStripe)
router.post("/create-payment-intent", stripeController.createPaymentIntent)

export default router
