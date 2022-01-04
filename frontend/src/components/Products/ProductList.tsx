import React, { useState, useEffect } from "react"
import Products from "../../models/products"
import ProductCard from "../ProductCard/ProductCard"

const ProductList: React.FC = (props) => {
  const [products, setProducts] = useState([] as any[])
  const [prices, setPrices] = useState([] as number[])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    Products.all()
      .then((data) => setProducts(data.products))
      .then(() => setIsLoaded(true))
  }, [])
  return (
    <div>
      {isLoaded ? (
        products.map((product: any, index: number) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            img_url={product.img_url}
            price={product.price / 100}
            subtotal={prices[index]}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default ProductList
