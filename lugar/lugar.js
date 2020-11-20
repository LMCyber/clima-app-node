const axios = require('axios')

const getLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion)

    const instance = axios.create({
        baseURL: 'https://community-open-weather-map.p.rapidapi.com/weather?q=' + encodedUrl,
        headers: { 'x-rapidapi-key': '5fd7c495f0msh473b4140a1d0672p1c71c9jsn851fff65e231' }
    });

    const resp = await instance.get()

    if (resp.data.coord.Length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data
    const ciudad = data.name
    const lat = data.coord.lat
    const lng = data.coord.lon

    return {
        ciudad,
        lat,
        lng
    }
}


module.exports = {
    getLatLng
}