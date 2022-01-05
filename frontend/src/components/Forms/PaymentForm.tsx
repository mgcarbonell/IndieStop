import React, { useState, useEffect, useContext } from "react"
import Payment from "../../models/payment"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { Button } from "@mui/material"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"

const PaymentForm = () => {
  const elements = useElements()
  const stripe = useStripe()
  const { total } = useContext(ShoppingCartContext)
  const { items } = useContext(ShoppingCartContext)
  const [name, setName] = useState<string>("")
  const [disabled, setDisabled] = useState(true)
  const [success, setSuccess] = useState<boolean>(false)

  const handleFormSubmit = async (e: any) => {
    e.preventDefault()
    console.log("CLICK")
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const { data: clientSecret }: any = await Payment.createPaymentIntent({
      total,
    })
    console.log(clientSecret)
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
  }

  const handleNameChange = async (event: any) => {
    setName(event.target.value)
  }

  return (
    <>
      <h1>Check Out</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Cardholder Name</label>
        <input
          placeholder={"Please enter the Cardholder name."}
          type={"text"}
          id={"name"}
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="card-element">Card</label>
        <CardElement id="card-element" />
        <Button type="submit">Pay Now</Button>
      </form>
    </>
  )
}

export default PaymentForm

// import React, { useState, useContext } from "react"
// import { Navigate } from "react-router-dom"
// import Payment from "../../models/payment"
// import { ShoppingCartContext } from "../../context/ShoppingCartContext"
// import IFormProps from "../../interfaces/form.interface"
// import {
//   CardElement,
//   injectStripe,
//   ReactStripeElements,
// } from "react-stripe-elements"

// interface ICheckoutFormProps
//   extends IFormProps,
//     ReactStripeElements.InjectedStripeProps {}

// const CheckoutForm: React.FC<ICheckoutFormProps> = (
//   props: ICheckoutFormProps
// ) => {
//   const { total } = useContext(ShoppingCartContext)
//   const [name, setName] = useState<string>("")
//   const [success, setSuccess] = useState<boolean>(false)

//   const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setName(e.target.value)
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     try {
//       let stripe = props.stripe?.createToken({ name: name })
//       Payment.post(stripe).then((res) => {
//         if (res.ok) {
//           setSuccess(true)
//           localStorage.removeItem("items")
//         }
//       })
//     } catch (err: any) {
//       console.log(err)
//     }
//   }
//   return (
//     <>
//       {success ? (
//         <div className="success">
//           <h1>Thank you for your purchase!</h1>
//           <h3>Reidrecting...</h3>
//           <h4>
//             If you have not been redirected please click <a href="/">here.</a>
//           </h4>
//           {setTimeout(() => {
//             return <Navigate to="/" />
//           }, 3000)}
//         </div>
//       ) : (
//         <div className="container">
//           <form onSubmit={handleSubmit}>
//             <label>Name</label>
//             <input
//               type="text"
//               className="input-name"
//               value={name}
//               onChange={handleNameChange}
//             />
//             <label>Amount</label>
//             <input type="number" className="input-value" value={total} />
//             <label>CC Number -- Exp. Date -- CVC</label>
//             <CardElement id="card-element" />
//             <button className="btn-submit">Submit Payment</button>
//           </form>
//         </div>
//       )}
//     </>
//   )
// }

// export default injectStripe(CheckoutForm)
