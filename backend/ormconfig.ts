import { ConnectionOptions } from "typeorm"
import dotenv from "dotenv"

dotenv.config()

export = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string, 10),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  dropSchema: false,
  entities: ["dist/models/**/*.js"],
  migrattions: ["src/migrations/*.ts"],
} as ConnectionOptions
