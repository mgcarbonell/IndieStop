import { Sequelize, Model, Optional, DataTypes } from "sequelize"
import sequelizeConnection from "../index"

interface IUserAttributes {
  id: number
  username: string
  email: string
  password: string
}

interface IUserCreationAttributes extends Optional<IUserAttributes, "id"> {}

class User
  extends Model<IUserAttributes, IUserCreationAttributes>
  implements IUserAttributes
{
  id!: number
  username!: string
  email!: string
  password!: string

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
    username: {
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
  },
  {
    sequelize: sequelizeConnection,
    tableName: "User",
  }
)

export default User
