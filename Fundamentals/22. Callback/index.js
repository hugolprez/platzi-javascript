const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = {crossDomain: true} //se le indica que el request es hacia otra página

const onLukeResponse = function(luke) {
    console.log(`HOla yo soy, ${luke.name}`)
}

$.get(lukeUrl, opts, onLukeResponse)

// ESTA ES UNA FROMA DE HACER UN GET, LA OTRA ES A TRAVES DE UNA FUN COMO PARAMETRO
/*$.get(lukeUrl, opts, function() {
    console.log(arguments)
})*/