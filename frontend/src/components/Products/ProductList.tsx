import React, { useState, useEffect } from "react"
import Products from "../../models/products"
import ProductCard from "./ProductCard/ProductCard"

const ProductList: React.FC = () => {
  const [products, setProducts] = useState([] as any[])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    Products.all()
      .then((data) => {
        setProducts(data.products)
      })
      .then(() => setIsLoaded(true))
  }, [])
  return (
    <div>
      {isLoaded ? (
        products.map((product: any, index: number) => (
          <ProductCard
            key={index}
            id={product.id}
            title={product.title}
            description={product.description}
            img_url={product.img_url}
            price={product.price / 100}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default ProductList
