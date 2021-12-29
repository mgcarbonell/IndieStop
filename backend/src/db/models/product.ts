import { Model, Optional, DataTypes } from "sequelize"
import sequelizeConnection from "../index"

interface IProductAttributes {
  id: number
  name: string
  quantity: number
  description: string
  price: number
}

interface IProductCreationAttributes
  extends Optional<IProductAttributes, "id"> {}

class Product
  extends Model<IProductAttributes, IProductCreationAttributes>
  implements IProductAttributes
{
  public id!: number
  public name!: string
  public quantity!: number;
  public description!: string;
  public price!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  quantity: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
}, {
  sequelize: sequelizeConnection,
  tableName: "Products",
})

export default Product