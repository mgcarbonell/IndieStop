import express from "express"
import logger from "../utils/Logger"
import Stripe from "stripe"
import dotrenv from "dotenv"
import e from "express"

dotrenv.config()

// const secret = process.env.STRIPE_SECRET! as string
// const cleanForStripe = secret.replace(/['"]+/g, "")
const stripe = new Stripe(process.env.STRIPE_SECRET! as string, {
  apiVersion: "2020-08-27",
  typescript: true,
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

const createPaymentIntent = async (
  req: express.Request,
  res: express.Response
) => {
  const { amount } = req.body
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    })
    logger.info("Incoming request")
    res.json({ clientSecret: paymentIntent.client_secret }).status(200)
  } catch (err: any) {
    res.status(500).json({ err: { message: err.message } })
  }
}

const config = async (req: express.Request, res: express.Response) => {
  res.json({ publishableKey: process.env.STRIPE_PUBLISHABLE })
}

export default module.exports = {
  postToStripe,
  getPubKey,
  createPaymentIntent,
  config,
}
