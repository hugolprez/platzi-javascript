var rene = {
    nombre: 'René',
    apellido: 'Sanchez',
    altura: 1.75,
    libros: 182
};

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    libros: 91
};

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    libros: 182
};

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    libros: 90
};

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    libros: 132
};

var dario = {
    nombre: 'Dario',
    apellido: 'Jaurez',
    altura: 1.71,
    libros: 78
};

var personas = [rene,alan,martin,vicky,paula];

var reducer = ( acum, {libros} ) => acum + libros

var cantidad = personas.reduce(reducer, 0)

console.log(`La cantidad de libros son ${cantidad}`)