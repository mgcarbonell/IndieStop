import React, { useState, useEffect, useContext } from "react"
import Payment from "../../models/payment"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { Button } from "@mui/material"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"

const PaymentForm = () => {
  const { total } = useContext(ShoppingCartContext)

  const elements = useElements()
  const stripe = useStripe()

  const handleFormSubmit = async (e: any) => {
    e.preventDefault()
    console.log("CLICK")
    if (!stripe || !elements) {
      return
    }
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/stripe/create-payment-intent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: total,
          }),
        }
      )
      const data = await response.json()
      console.log(data)
    } catch (err: any) {
      console.log(err)
    }
  }
  // const amount = total
  // const { error: backError, clientSecret } = await Payment.post({
  //   paymentMethodType: "card",
  //   currency: "usd",
  //   amount: { total },
  //   name: { name },
  // })

  // if (backError) {
  //   console.log(backError)
  //   return
  // }

  // const cardElement = elements.getElement(CardElement)
  // if (cardElement) {
  //   const { error: stripeError, paymentIntent } =
  //     await stripe.confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: cardElement,
  //         billing_details: {
  //           name: e.target.name.value,
  //         },
  //       },
  //     })
  //   if (paymentIntent) {
  //     console.log("Payment Successful")
  //   }
  //   if (stripeError) {
  //     return <div>{stripeError}</div>
  //   }
  // }

  const handleNameChange = async (event: any) => {
    setName(event.target.value)
  }

  return (
    <>
      <h1>Check Out</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="card-element">Card</label>
        <CardElement id="card-element" />
        <Button type="submit">Pay Now</Button>
      </form>
    </>
  )
}

export default PaymentForm
