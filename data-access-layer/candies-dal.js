import { candies } from "../database/database.js";

const getAll = () => {
    return candies
}

const resetAll = newCandies => {
    candies = [...newCandies]
}

const addCandy = preparedCandyObj => {
    candies.push(preparedCandyObj)
}


export default {
    getAll,
    resetAll,
    addCandy
}