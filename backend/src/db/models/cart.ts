import { Model, Optional, Sequelize } from "sequelize"
// import User from "./user"
// import CartItem from "./cart_item"
// import Product from "./product"

interface ICartAttributes {
  id: number
}

interface ICartCreationAttributes extends Optional<ICartAttributes, "id"> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class Cart
    extends Model<ICartAttributes, ICartCreationAttributes>
    implements ICartAttributes
  {
    id!: number
    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    static associate(models: any) {
      // Cart.belongsTo(models.User, {
      //   foreignKey: "userId",
      // })
      Cart.hasMany(models.CartItem, {
        foreignKey: "cartId",
      })
    }
  }
  Cart.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  )
  return Cart
}
