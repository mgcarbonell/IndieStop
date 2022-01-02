import React, { useState, useEffect } from "react"

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [products, setProducts] = useState<[]>([])
  const [prices, setPrices] = useState<[]>([])
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}

export default App
