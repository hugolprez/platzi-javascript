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

// pasar de metros a centimetros
/* al utilizar parentecis en las llaves {} se le indica un return implicito.
    por lo tanto no es necesario agregar la palabra RETURN. Es neceario copiar el objeto
    con los tres punto(...), sino se hace, entonces modificariamos los objetos del array
    PERONAS.*/ 
var pasarAlturaACentimetros = (persona) => ({
    ...persona,
    hight: persona.hight * 100
})

var personasCms = personas.map(pasarAlturaACentimetros)

console.log(personasCms)