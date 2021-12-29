import dotenv from "dotenv"
import { app } from "./app"
import sequelizeConnection from "./db"
import logger from "./utils/Logger"

dotenv.config()

const PORT: number = parseInt(process.env.PORT as string, 10) || 4000

sequelizeConnection
  .sync({ logging: true, force: true })
  .then(() => {
    logger.info(`Sequelize sync successful!`)

    app.listen(PORT, () => {
      logger.info(`You are now listening to the sounds of port: ${PORT}`)
    })
  })
  .catch((err: any) => {
    logger.error(`Error: ${err}`)
  })
