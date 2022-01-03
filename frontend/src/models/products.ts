import ApiCall from "./apicall"
// import IServerApi from "../interfaces/serverapi.interface"

class ProductsCall extends ApiCall {
  constructor() {
    super(process.env.REACT_APP_SERVER_URL as string, "products")
  }
}

const Products: ProductsCall = new ProductsCall()

export default Products
