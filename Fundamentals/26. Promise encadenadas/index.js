const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true} //se le indica que el request es hacia otra página

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        var lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        
        $
            .get(lukeUrl, opts, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })  
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)
    })
    .catch(onError)

//Esta es otra forma de hacer el catch
/*    .catch(function(id) {

    })*/
