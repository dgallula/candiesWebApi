import { candies } from "../database/database.js";
import * as fs from 'fs'
import path from 'path'


const databasePath= path.resolve('') +'/database/database.json'


const getAll = () => {
    const data = fs.readFileSync(databasePath,
            {encoding:'utf8', flag:'r'});

    return data
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