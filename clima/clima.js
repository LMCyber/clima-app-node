const axios = require('axios')

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2ea3b8564dd98fd6d50b025f2b678682&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}