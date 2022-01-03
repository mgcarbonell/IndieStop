// import ApiCall from "./apicall"
// import IServerApi from "../interfaces/serverapi.interface"
export default class Products {
  public static apiUrl = process.env.REACT_APP_SERVER_URL as string
  static all = async (): Promise<any> => {
    const response = await fetch(`${Products.apiUrl}/product`)
    const data = await response.json()
    return data
  }

  static show = async (id: string): Promise<any> => {
    const response = await fetch(`${Products.apiUrl}/product/${id}`)
    const data = await response.json()
    return data
  }

  static updateQty = async (id: string, qty: number): Promise<any> => {
    const response = await fetch(`${Products.apiUrl}/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ qty }),
    })
    const data = await response.json()
    return data
  }
}
