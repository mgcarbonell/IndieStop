import express from "express"
import logger from "../utils/Logger"
import Stripe from "stripe"
import { IStripeKey } from "./interfaces"

class ApiKey implements IStripeKey {
  public secret: string
  public publishable: string

  constructor(secret: string, publishable: string) {
    this.secret = secret
    this.publishable = publishable
  }
}

const stripeKey = new ApiKey(
  process.env.STRIPE_SECRET_KEY as string,
  process.env.STRIPE_PUBLIC_KEY as string
)

const stripe = new Stripe(stripeKey.secret, {
  apiVersion: "2020-08-27",
})

const charge = (token: string, amount: number) => {
  return stripe.charges.create({
    amount: amount,
    currency: "usd",
    source: token,
    description: "Test Charge",
  })
}

const postToStripe = async (req: express.Request, res: express.Response) => {
  const clientUrl = process.env.CLIENT_URL as string

  try {
    let data = await charge(req.body.token.name, req.body.token.amount)
    logger.info(data)
    res.send(data).status(200)
  } catch (err: any) {
    logger.error(err)
    res.status(500).json({ error: err.message })
  }
}

const getPubKey = async (req: express.Request, res: express.Response) => {
  try {
    const publishableKey = process.env.STRIPE_PUBLIC_KEY
    res.send(publishableKey).status(200)
  } catch (err: any) {
    logger.info(err)
    res.status(500).json({ error: err.message })
  }
}

export default module.exports = {
  postToStripe,
  getPubKey,
}
