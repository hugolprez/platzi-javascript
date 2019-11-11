class Person {
    constructor(name, last_name) {
        this.name = name
        this.last_name = last_name
    }

    saludar(fn) {
        var {name, last_name} = this
        console.log(`Hola mi nombre es ${name} ${last_name}`)

        if(fn) {
            fn(name, last_name)
        }
    }
}

class Desarrollador extends Person {
    constructor(name, last_name, language) {
        super(name, last_name)
        this.language = language
    }

    saludar(fn) {
        var {name, last_name, language} = this
        console.log(`Soy ${name} ${last_name} y programo en ${language}`)
        if (fn) {
            fn(name, last_name, true)
        }
    }
}

function responderSaludo(name, last_name, is_dev) {
    console.log(`Hola ${name} ${last_name}`)
    if (is_dev) {
        console.log(`ohhh.. santo cielos, eres un desarrollador.`)
    }
}

var hugo = new Desarrollador('Hugo', 'Pérez', 'JavaScript')
hugo.saludar(responderSaludo)

var leo = new Person('Leonel', 'González')
leo.saludar(responderSaludo)