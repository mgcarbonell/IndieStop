export interface ICartItems {
  id: number
  title: string
  cartItem: { quantity: number }
}

export interface IStripeKey {
  secret: string
  publishable: string
}
