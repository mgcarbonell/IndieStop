import dotenv from "dotenv"
import { app } from "./app"
import logger from "./utils/Logger"

dotenv.config()

const PORT: number = parseInt(process.env.PORT as string, 10) || 4000

const server = app.listen(PORT, () => {
  logger.info(`You are now listening to the sounds of port: ${PORT}`)
})
