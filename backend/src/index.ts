import dotenv from "dotenv"
import { app } from "./app"
import "reflect-metadata"
import { Connection, createConnection } from "typeorm"
import ORMConfig from "../ormconfig"
import logger from "./utils/Logger"
dotenv.config()

const PORT: number = parseInt(process.env.PORT as string, 10) || 4000

const server = app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`)
})

const connectToORM = async () => {
  try {
    let connection: Connection
    connection = await createConnection(ORMConfig)
    logger.info(`Connected to Database`)
    await connection.runMigrations()
    await logger.info(`Database Migrations ran`)
  } catch (err: any) {
    logger.error(err)
  }
}
connectToORM()
