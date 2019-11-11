const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true} //se le indica que el request es hacia otra página

const onLukeResponse = function(luke) {
    console.log(`HOla, yo soy ${luke.name}`)
}

function obtenerPersonaje(id) {
    var lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(lukeUrl, opts, onLukeResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)