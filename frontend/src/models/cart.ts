import ApiCall from "./apicall"

class CartCall extends ApiCall {
  constructor() {
    super(process.env.REACT_APP_SERVER_URL as string, "cart")
  }
}
const Cart: CartCall = new CartCall()

export default Cart
