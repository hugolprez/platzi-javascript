const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true} //se le indica que el request es hacia otra página

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        var url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

async function obtenerPromesas() {
    var id = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var promesas = id.map(id => obtenerPersonaje(id))
    
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
    
}

obtenerPromesas()