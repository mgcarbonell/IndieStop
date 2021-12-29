import { Sequelize, Model, Optional, DataTypes } from "sequelize"
import sequelizeConnection from "../index"

interface IUserAttributes {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  isAdmin: boolean
}

interface IUserCreationAttributes extends Optional<IUserAttributes, "id"> {}

class User
  extends Model<IUserAttributes, IUserCreationAttributes>
  implements IUserAttributes
{
  id!: number
  firstName!: string
  lastName!: string
  email!: string
  password!: string
  isAdmin!: boolean

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {}
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "User",
  }
)

export default User
