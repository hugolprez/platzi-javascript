var hugo = {
    nombre: 'Hugo',
    edad: 21
}

const MAYORIA_DE_EDAD = 18

//Se puede utilizar VAR en lugar de CONST
const esMayorDeEdad = ({edad}) => {
    return edad >= MAYORIA_DE_EDAD
}

//Con ARROW FUNCTION sería
//const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeedad(persona) {
    if(esMayorDeEdad(persona))
        console.log(`${persona.nombre} es mayor de edad`)
    else
        console.log(`${persona.nombre} no es mayor de edad`)
}

imprimirSiEsMayorDeedad(hugo)