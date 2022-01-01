/* we need price_data {} and quantity: item.quantity
  price_data: {
    "currency": "usd",
    product_data: {
      name: 
    }
    unit_amount: PRICE NEEDS TO BE IN CENTS! CENTS!
  }

*/
import express from "express"
import logger from "../utils/Logger"
import Stripe from "stripe"

interface IStripeKey {
  secret: string
  publishable: string
}

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

// const postStripe = async (req: express.Request, res: express.Response) => {
//   const headers: HeadersInit = {
//     "Authorization": `Bearer ${stripeKey.secret}`,
