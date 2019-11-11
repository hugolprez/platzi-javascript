var maria = {
    name: 'Maria',
    hight: 1.70
}
var carla = {
    name: 'Carla',
    hight: 1.72
}
var ana_maria = {
    name: 'Ana Maria',
    hight: 1.55
}
var fernanda = {
    name: 'Fernanda',
    hight: 1.78
}

var personas = [maria, carla, ana_maria, fernanda]
var personasAltas = []

const ALTURA_MINIMA = 1.7
const esAlta = ({ hight }) => hight > ALTURA_MINIMA
const esBaja = persona => !esAlta(persona)

personasAltas = personas.filter(esAlta)
personasBajas = personas.filter(esBaja)

console.log('---- PERSONAS ALTAS')
console.log(personasAltas)
console.log('---- PERSONAS BAJAS')
console.log(personasBajas)

//TAMBIEN ES FUNCIONAL DE LA SIGUIENTE MANERA
/*var personasAltas = personas.filter(function (persona) {
    return persona.hight > ALTURA_MINIMA
})*/