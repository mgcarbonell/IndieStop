import React, { useEffect, useState, useContext } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Products from "./models/products"
import Navbar from "./components/Navbar/Navbar"
import ProductList from "./components/Products/ProductList"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import { ShoppingCartContext } from "./context/ShoppingCartContext"
// import IProductCardProps from "./interfaces/productProp.interface"

const getLSItems = () => {
  let d = window.localStorage.getItem("items")
  return d
}

const App: React.FC = () => {
  const [products, setProducts] = useState<[]>([] as any)
  const { items, total, setItems, setQuantity, setTotal } =
    useContext(ShoppingCartContext)

  useEffect(() => {
    if (items?.length === 0) {
      // console.log("there is nothing in the cart")
      let itemsFromStorage = getLSItems()?.split("")
      // console.log(`itemsFromStorage`, itemsFromStorage)

      if (itemsFromStorage !== null) {
        itemsFromStorage?.forEach((i) => {
          Products.getById(i).then((data) => {
            setItems((items: any) => [...items, data.product])
            setQuantity(itemsFromStorage!.length)
            setTotal(total + data.product.price)
          })
        })
      }
    }
    Products.all().then((data: any) => {
      setProducts(data.products)
    })
  }, [])

  useEffect(() => {
    // console.log(`items => `, items)
    // console.log(`total => `, total)
    // console.log(`quantity => `, quantity)
  }, [items])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
