import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm"
import { CartItem } from "./cartitem"

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column("varchar", { nullable: false, length: 255 })
  title!: string

  @Column("numeric", { nullable: false, precision: 10, scale: 2 })
  price!: number

  @Column("text", { nullable: false })
  description!: string

  @Column("text", { nullable: false })
  imgUrl!: string

  @Column("smallint", { nullable: false })
  stock!: number

  @OneToMany(() => CartItem, (cartItem) => cartItem.product_id)
  cartItems!: CartItem[]
}
