import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"
import { CartItem } from "./cartitem"

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column("varchar", { nullable: false, length: 255, unique: true })
  title!: string

  @Column("numeric", { nullable: false, precision: 10, scale: 2 })
  price!: number

  @Column("text", { nullable: false })
  description!: string

  @Column("text", { nullable: false })
  img_url!: string

  @Column("smallint", { nullable: false })
  stock!: number

  @CreateDateColumn({ name: "created_at" })
  created_at!: Date

  @UpdateDateColumn({ name: "updated_at" })
  updated_at!: Date

  @OneToMany(() => CartItem, (cartItem) => cartItem.product_id)
  cartItem: CartItem[]
}
