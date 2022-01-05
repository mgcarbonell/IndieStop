import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { Button } from "@mui/material"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import { Paper } from "@mui/material"
import styled from "@emotion/styled"

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`

const PaymentForm = () => {
  let navigate = useNavigate()
  const [isProcessing, setProcessing] = useState<boolean>(false)
  const [checkoutError, setCheckoutError] = useState<string>("")

  const { total } = useContext(ShoppingCartContext)

  const elements = useElements()
  const stripe = useStripe()

  const handleCardDetailsChange = (e: any) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError("")
  }

  const handleFormSubmit = async (e: any) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }
    setProcessing(true)
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

      const { clientSecret }: any = await response.json()

      console.log(`clientSecret =>`, typeof clientSecret)

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      })

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message as string)
        setProcessing(false)
        return
      }

      const confirmedCardPayment = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: paymentMethodReq?.paymentMethod?.id,
        }
      )

      navigate("/success", { replace: true })
    } catch (err: any) {
      setCheckoutError(err.message)
    }
  }

  return (
    <>
      <Paper className="body" elevation={3}>
        <h1 className="payment-form--title">Check Out</h1>
        <form onSubmit={handleFormSubmit} className="payment-form">
          <CardElementContainer>
            <CardElement id="card-element" onChange={handleCardDetailsChange} />
          </CardElementContainer>
          <Button
            type="submit"
            variant="contained"
            disabled={isProcessing || !stripe}
          >
            {isProcessing ? "Processing... " : `Pay $${total / 100}`}
          </Button>
        </form>
        {checkoutError && <p>{checkoutError}</p>}
      </Paper>
    </>
  )
}

export default PaymentForm
