import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm"
import { CartItem } from "./cartitem"

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany((type) => CartItem, (cartItem) => cartItem.cart)
  cartItems: CartItem[]
}
