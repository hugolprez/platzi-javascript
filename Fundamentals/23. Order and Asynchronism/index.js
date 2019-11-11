const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true} //se le indica que el request es hacia otra página

function obtenerPersonaje(id, callback) {
    var lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(lukeUrl, opts, function(luke) {
        console.log(`HOla, yo soy ${luke.name}`)

        if (callback) {
            callback()
        }
    })
}

//No funciona el Sincronismo debido a que se está ejecutando obtenerPersonaje(2) primero,
//para elloes necesario colocar la función en modo delcaración.
//obtenerPersonaje(1, obtenerPersonaje(2))


/*A lo siguiente se le conoce como CallbackHell. Sin embargo es un desorden.*/
obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4)
        })
    })
})
