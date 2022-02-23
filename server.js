import express from "express";
import { router as candiesController } from "./controllers/candies-controller.js";


const app = express()


app.use(express.json())

app.use('/', candiesController)
app.listen(5000)
console.log("Server is listening on port 5000")