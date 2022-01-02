import ApiCall from "./apicall"

const GetProducts = new ApiCall(
  process.env.REACT_APP_SERVER_URL as string,
  "product"
)

export default GetProducts