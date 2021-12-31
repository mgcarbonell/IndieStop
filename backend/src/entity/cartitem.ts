import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from "typeorm"
import { Cart } from "./cart"
import { Product } from "./product"

@Entity()
export class CartItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column("int", { nullable: false })
  quantity: number

  @ManyToOne(() => Cart, (cart) => cart.cartItem, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "cart_id" })
  cart_id: Cart

  @ManyToOne(() => Product, (prod) => prod.cartItem, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  product_id: Product
}
