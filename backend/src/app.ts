import express, { Application, Request, Response, NextFunction } from "express"
import helmet from "helmet"
import cors from "cors"
import bodyParser from "body-parser"

const app: Application = express()
const port: number = parseInt(process.env.PORT, 10) || 4000

app.use(helmet({ contentSecurityPolicy: false }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
