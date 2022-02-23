import candiesDal from "../data-access-layer/candies-dal-2.js"


const getAll = () => {
    return candiesDal.getAll()
}

const getById = id => {
    const candies = candiesDal.getAll()
    let requestedCandy = candies.find(candy => candy.id === id)
    return requestedCandy ? requestedCandy : {}
}

const addCandy = newCandy => {
    const candies = candiesDal.getAll()
    const lastId = candies[candies.length - 1].id

    const preparedCandyObj = {
        id: lastId + 1,
        ...newCandy
    }   

    console.log(preparedCandyObj)

    candiesDal.addCandy(preparedCandyObj)
    return preparedCandyObj
}


export default {
    getAll,
    getById,
    addCandy
}
