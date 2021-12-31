import dotenv from "dotenv"
import express, { Application, Request, Response, NextFunction } from "express"
import cors from "cors"
import helmet from "helmet"
import router from "./routes"

dotenv.config()

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors())

app.use(router)

app.get("/api/v1/health", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({ live: true }).status(200)
  } catch (err) {
    res.send({ live: false }).status(500)
  }
})

export { app }
