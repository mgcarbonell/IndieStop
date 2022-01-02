import ApiCall from "./apicall"

const Cart = new ApiCall(process.env.REACT_APP_SERVER_URL as string, "cart")

export default Cart
