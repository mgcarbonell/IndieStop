import { Model, Optional } from "sequelize"

interface IUserAttributes {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}

interface IUserCreationAttributes extends Optional<IUserAttributes, "id"> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class User
    extends Model<IUserAttributes, IUserCreationAttributes>
    implements IUserAttributes
  {
    id!: number
    firstName!: string
    lastName!: string
    email!: string
    password!: string
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    static associate(models: any) {
      /* associations go here */
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  )
  return User
}
