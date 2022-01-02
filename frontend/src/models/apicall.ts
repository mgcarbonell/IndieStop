import IServerApi from "../../interfaces/serverapi.interface"

class ApiCall implements IServerApi {
  public url: string
  public call: string
  constructor(url: string, call: string) {
    this.url = url
    this.call = call
  }

  static async getAll(url: string, call: string) {
    const response = await fetch(`${url}/${call}`)
    const data = await response.json()
    return data
  }
  static async getById(url: string, call: string, id: number) {
    const response = await fetch(`${url}/${call}:${id}`)
    const data = await response.json()
    return data
  }

  static async post(url: string, call: string, data: any) {
    const response = await fetch(`${url}/${call}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json()
    return json
  }
  static async delete(url: string, call: string, id: any) {
    const response = await fetch(`${url}/${call}`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    })
    const json = await response.json()
    return json
  }
  static async updateQty(url: string, call: string, id: any, qty: number) {
    const response = await fetch(`${url}/${call}/:${id}`, {
      method: "PUT",
      body: JSON.stringify({ id, qty }),
    })
    const json = await response.json()
    return json
  }
}

export default ApiCall
