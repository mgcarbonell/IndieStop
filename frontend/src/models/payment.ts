import ApiCall from "./apicall"

const StripePayment = new ApiCall(
  process.env.REACT_APP_SERVER_URL as string,
  "stripe"
)
