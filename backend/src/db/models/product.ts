import { Model, Optional } from "sequelize"

interface IProductAttributes {
  id: number
  name: string
  quantity: number
  description: string
  price: number
}

interface IProductCreationAttributes
  extends Optional<IProductAttributes, "id"> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class Product
    extends Model<IProductAttributes, IProductCreationAttributes>
    implements IProductAttributes
  {
    id!: number
    name!: string
    quantity!: number
    description!: string
    price!: number
    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    static associate(models: any) {
      /* associations go here */
      Product.hasMany(models.CartItem, {
        foreignKey: "prodId",
      })
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  )
  return Product
}
