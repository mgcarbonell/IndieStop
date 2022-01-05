import express from "express"
import stripeController from "../../controllers/stripe"

const router = express.Router()

router.post("/create-payment-intent", stripeController.createPaymentIntent)
router.get("/config", stripeController.config)
router.get("", stripeController.getPubKey)
router.post("", stripeController.postToStripe)

export default router
