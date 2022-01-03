import ApiCall from "./apicall"

class StripeCall extends ApiCall {
  constructor() {
    super(process.env.REACT_APP_SERVER_URL as string, "stripe")
  }
}
const StripePayment: StripeCall = new StripeCall()

export default StripePayment
