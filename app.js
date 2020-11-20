const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true,
    },
}).argv;

// argv.direccion
console.log(argv.direccion)

// clima.getClima(40.75, -74)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLatLng(direccion)
        const temp = await clima.getClima(coord.lat, coord.lng)
        return `El clima de ${coord.ciudad} es de ${temp}`

    } catch (e) {
        return `No se pudo conseguir el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)