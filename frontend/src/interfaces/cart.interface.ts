import React from "react"
import IProductCardProps from "./productProp.interface"

export default interface ICart {
  items: IProductCardProps[]
  quantity: number
  total: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  setTotal: React.Dispatch<React.SetStateAction<number>>
  setItems: React.Dispatch<React.SetStateAction<IProductCardProps[]>>
}
