// import ApiCall from "./apicall"

export default class Payment {
  public static apiUrl = process.env.REACT_APP_SERVER_URL as string
  static post = async (data: any): Promise<any> => {
    const response = await fetch(`${Payment.apiUrl}/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const json = await response.json()
    return json
  }
}

// class StripeCall extends ApiCall {
//   constructor() {
//     super(process.env.REACT_APP_SERVER_URL as string, "stripe")
//   }
// }
// const StripePayment: StripeCall = new StripeCall()

// export default StripePayment
