import express from "express"
import cors from "cors"
import morgan from "morgan"

import { getLocation, getWeather } from "./controller.js"

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get("/location", getLocation)
app.get("/weather", getWeather)

export default app
