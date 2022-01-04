import React, { useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import Payment from "../../models/payment"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import IFormProps from "../../interfaces/form.interface"
import {
  CardElement,
  injectStripe,
  ReactStripeElements,
} from "react-stripe-elements"

interface ICheckoutFormProps
  extends IFormProps,
    ReactStripeElements.InjectedStripeProps {}

const CheckoutForm: React.FC<ICheckoutFormProps> = (
  props: ICheckoutFormProps
) => {
  const { total } = useContext(ShoppingCartContext)
  const [name, setName] = useState<string>("")
  const [success, setSuccess] = useState<boolean>(false)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      let stripe = props.stripe?.createToken({ name: name })
      Payment.post(stripe).then((res) => {
        if (res.ok) {
          setSuccess(true)
          localStorage.removeItem("items")
        }
      })
    } catch (err: any) {
      console.log(err)
    }
  }
  return (
    <>
      {success ? (
        <div className="success">
          <h1>Thank you for your purchase!</h1>
          <h3>Reidrecting...</h3>
          <h4>
            If you have not been redirected please click <a href="/">here.</a>
          </h4>
          {setTimeout(() => {
            return <Navigate to="/" />
          }, 3000)}
        </div>
      ) : (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              className="input-name"
              value={name}
              onChange={handleNameChange}
            />
            <label>Amount</label>
            <input type="number" className="input-value" value={total} />
            <label>CC Number -- Exp. Date -- CVC</label>
            <CardElement id="card-element" />
            <button className="btn-submit">Submit Payment</button>
          </form>
        </div>
      )}
    </>
  )
}

export default injectStripe(CheckoutForm)
