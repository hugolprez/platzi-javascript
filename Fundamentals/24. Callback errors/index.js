const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true} //se le indica que el request es hacia otra página

function obtenerPersonaje(id, callback) {
    var lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $
        .get(lukeUrl, opts, callback)
        .fail(() => {
            console.log(`Sucedió un error. No se puede obtener el personaje ${id}.`)
        })
}

obtenerPersonaje(1, function(personaje) {
    console.log(`HOla, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function(personaje) {
        console.log(`HOla, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje) {
            console.log(`HOla, yo soy ${personaje.name}`)
            
            obtenerPersonaje(4, function(personaje) {
                console.log(`HOla, yo soy ${personaje.name}`)
            })
        })
    })
})
