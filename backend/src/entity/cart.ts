import { Entity, BaseEntity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { CartItem } from "./cartitem"

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany(() => CartItem, (cartitem) => cartitem.cart_id)
  cartItems: CartItem[]
}
