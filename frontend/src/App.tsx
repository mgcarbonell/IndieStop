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

const App: React.FC = () => {
  const [products, setProducts] = useState<[]>([] as any)
  const { items, total, setItems, quantity, setQuantity, setTotal } =
    useContext(ShoppingCartContext)

  useEffect(() => {
    // const toCart = {
    //   description: "string",
    //   title: "string",
    //   price: 293874,
    //   img_url: "string",
    //   id: 0,
    // }
    // const array = [toCart]
    // setItems(toCart)
    // setTotal(total + toCart.price)
    // setQuantity(+1)
    Products.all().then((data: any) => {
      setProducts(data.products)
    })
  }, [])

  useEffect(() => {
    console.log(`items => `, items)
    console.log(`total => `, total)
    console.log(`quantity => `, quantity)
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
