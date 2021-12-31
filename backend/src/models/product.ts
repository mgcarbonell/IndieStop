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
}
