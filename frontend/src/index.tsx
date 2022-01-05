import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import App from "./App"

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
)
ReactDOM.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <Elements stripe={stripePromise}>
        <Router>
          <App />
        </Router>
      </Elements>
    </ShoppingCartProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
