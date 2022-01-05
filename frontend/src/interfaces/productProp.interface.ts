export default interface IProductCardProps {
  title: string
  description: string
  img_url: string
  price: number
  id: number
}
export default interface IProductProps {
  products: [
    {
      title: string
      description: string
      img_url: string
      price: number
      id: number
    }
  ]
}
