import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import App from "./App"

const stripe = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY! as string)

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripe}>
      <Router>
        <App />
      </Router>
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
)
