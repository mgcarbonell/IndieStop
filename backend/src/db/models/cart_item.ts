import { Model, Optional, DataTypes } from "sequelize"

interface ICartItemsAttributes {
  id: number
  quantity: number
  cartId: number
  prodId: number
}

interface ICartItemsCreationAttributes
  extends Optional<ICartItemsAttributes, "id"> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class CartItems
    extends Model<ICartItemsAttributes, ICartItemsCreationAttributes>
    implements ICartItemsAttributes
  {
    id!: number
    quantity!: number
    cartId!: number
    prodId!: number
    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    static associate(models: any) {
      /* associations go here */
      CartItems.belongsTo(models.Cart)
      CartItems.belongsTo(models.Product)
    }
  }
  CartItems.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      prodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CartItems",
    }
  )
  return CartItems
}
