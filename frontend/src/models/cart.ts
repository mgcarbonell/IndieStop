// import ApiCall from "./apicall"

export default class Cart {
  public static apiUrl = process.env.REACT_APP_SERVER_URL as string
  static post = async (data: any): Promise<any> => {
    const response = await fetch(`${Cart.apiUrl}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const json = await response.json()
    return json
  }

  static delete = async (id: any): Promise<any> => {
    const response = await fetch(`${Cart.apiUrl}/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
    const json = await response.json()
    return json
  }
}
// class CartCall extends ApiCall {
//   constructor() {
//     super(process.env.REACT_APP_SERVER_URL as string, "cart")
//   }
// }
// const Cart: CartCall = new CartCall()

// export default Cart
