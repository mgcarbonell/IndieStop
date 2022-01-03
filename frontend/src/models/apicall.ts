import IServerApi from "../interfaces/serverapi.interface"

class ApiCall implements IServerApi {
  public url: string
  public call: string
  constructor(apiUrl: string, apiEndPoint: string) {
    this.url = apiUrl
    this.call = apiEndPoint
  }

  async getAll() {
    const response = await fetch(`${this.url}/${this.call}`)
    const data = await response.json()
    return data
  }
  async getById(id: number) {
    const response = await fetch(`${this.url}/${this.call}:${id}`)
    const data = await response.json()
    return data
  }

  async post(data: any) {
    const response = await fetch(`${this.url}/${this.call}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const json = await response.json()
    return json
  }

  async postToStripe(amount: any, token: any) {
    const response = await fetch(`${this.url}/${this.call}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, token }),
    })
    const json = await response.json()
    return json
  }

  async delete(id: any) {
    const response = await fetch(`${this.url}/${this.call}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
    const json = await response.json()
    return json
  }

  async updateQty(id: any, qty: number) {
    const response = await fetch(`${this.url}/${this.call}/:${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, qty }),
    })
    const json = await response.json()
    return json
  }
}

export default ApiCall
