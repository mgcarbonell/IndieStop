import dotenv from "dotenv"
import { app } from "./app"
import logger from "./utils/Logger"
dotenv.config()

const PORT: number = parseInt(process.env.PORT as string, 10) || 4000

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Server started on port ${PORT}`)
    })
    logger.info(`Database connected`)
  })
  .catch((err: Error) => {
    logger.error(err)
  })
