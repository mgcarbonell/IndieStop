import React, { createContext, useState } from "react"
import ICart from "../interfaces/cart.interface"

export const ShoppingCartContext = createContext({} as ICart)

export const ShoppingCartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState([] as any[])
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        setItems,
        quantity,
        setQuantity,
        total,
        setTotal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
