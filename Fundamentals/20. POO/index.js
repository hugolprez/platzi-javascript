class Person {
    constructor(name, last_name) {
        this.name = name
        this.last_name = last_name
    }

    saludar() {
        console.log(`Hola mi nombre es ${this.name} ${this.last_name}`)
    }
}

class Desarrollador extends Person {
    constructor(name, last_name, language) {
        super(name, last_name)
        this.language = language
    }

    saludar() {
        console.log(`Soy ${this.name} ${this.last_name} y programo en ${this.language}`)
    }
}
