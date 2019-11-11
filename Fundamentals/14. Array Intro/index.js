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

for (persona of personas) {
    console.log(`${persona.name} mide ${persona.hight}`)
}