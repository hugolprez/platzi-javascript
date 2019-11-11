var hugo = {
    nombre: 'Hugo',
    edad: 21
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad({edad}) {
    return edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeedad(persona) {
    if(esMayorDeEdad(persona))
        console.log(`${persona.nombre} es mayor de edad`)
    else
        console.log(`${persona.nombre} no es mayor de edad`)
}

imprimirSiEsMayorDeedad(hugo)