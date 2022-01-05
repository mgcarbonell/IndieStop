export default interface ICart {
  items?: any[]
  quantity: number
  total: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  setTotal: React.Dispatch<React.SetStateAction<number>>
  // setItems: React.Dispatch<React.SetStateAction<[{}]>>
  setItems: any
}

export type CartType = {
  items?: any[]
  quantity: number
  total: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  setTotal: React.Dispatch<React.SetStateAction<number>>
  setItems: React.Dispatch<React.SetStateAction<[]>>
}
