import ApiCall from "./apicall"

const getProducts = new ApiCall(
  process.env.REACT_APP_SERVER_URL as string,
  "product"
)

export default getProducts
