var hugo = {
    nombre: 'Hugo',
    edad: 17
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeedad(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

imprimirSiEsMayorDeedad(hugo)