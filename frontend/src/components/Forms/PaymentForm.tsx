import React, { useState, useEffect, useContext } from "react"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { Button } from "@mui/material"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"

const PaymentForm = () => {
  const [isProcessing, setProcessingTo] = useState<boolean>(false)
  const [checkoutError, setCheckoutError] = useState()

  const { total } = useContext(ShoppingCartContext)

  const elements = useElements()
  const stripe = useStripe()

  const handleFormSubmit = async (e: any) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }

    const cardElement = elements.getElement(CardElement)!

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

      const clientSecret: any = await response.json()

      console.log(`clientSecret =>`, clientSecret)

      const paymentMethodReq: any = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      })

      const confirmCardPayment: any = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: paymentMethodReq.paymentMethod.id!,
        }
      )
      console.log(confirmCardPayment)
    } catch (err: any) {
      setCheckoutError(err.message)
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
