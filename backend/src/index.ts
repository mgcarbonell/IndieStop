import dotenv from "dotenv"
import express, { Application, Request, Response } from "express"
import cors from "cors"
import helmet from "helmet"
import logger from "./utils/Logger"

dotenv.config()

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet({ contentSecurityPolicy: false }))

app.get("/api/v1/health")
