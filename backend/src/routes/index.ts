import express from "express"

const routes = express.Router()
const apiRoutes = require("./api")

routes.use("/api", apiRoutes)

export { routes }
