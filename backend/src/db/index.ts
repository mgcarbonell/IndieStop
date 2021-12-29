import { Sequelize } from "sequelize"
import config from "../config"

const username = config.db.username as string
const password = config.db.password as string
const database = config.db.database as string
const host = config.db.host as any

const sequelizeConnection = new Sequelize(database, username, password, {
  host: host,
  dialect: "postgres",
})

export default sequelizeConnection
