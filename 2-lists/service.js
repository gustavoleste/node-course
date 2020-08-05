const axios = require('axios')
const URL = `https://swapi.dev/api/people`

const getPeople = async name => {
    const url = `${URL}/?search=${name}`
    const response = await axios.get(url)
    return response.data.results
}

module.exports = getPeople