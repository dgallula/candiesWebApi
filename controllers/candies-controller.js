import express from "express";
import candiesBL from "../business-logic/candies-bl.js";

const router = express.Router()
const baseUrl = '/api'


router.get(`${baseUrl}/candies`, (req, res) => {
    let result = candiesBL.getAll()
    res.send(result)
})

router.get(`${baseUrl}/candies/:id`, (req, res) => {
    let id = +req.params.id
    let result = candiesBL.getById(id)
    res.send(result)
})

router.post(`${baseUrl}/candies`, (req, res) => {
    let newCandy = req.body
    let result = candiesBL.addCandy(newCandy)
    res.send(result)
})

export {
    router
}