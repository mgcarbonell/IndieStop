import { ConnectionOptions } from "typeorm"
import dotenv from "dotenv"

dotenv.config()

export = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string, 10),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "postgres",
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  dropSchema: false,
  entities: ["dist/entity/**/*.js", "src/entity/**/*.{js,ts}"],
  migrations: ["src/migrations/**/*.{js,ts}", "dist/migrations/**/*.{js,ts}"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migrations",
  },
} as ConnectionOptions
