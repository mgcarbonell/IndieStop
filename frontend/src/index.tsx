import React from "react"
import ReactDOM from "react-dom"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import App from "./App"

const stripe = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY! as string)

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripe}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
)
