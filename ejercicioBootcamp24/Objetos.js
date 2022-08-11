//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datos = {
    nombre: "Roberto",
    apellido: "Freitas",
    edad: 28,
    altura: 175,
    eresDesarrollador: false
}

//Una variable que obtenga tu edad a partir del objeto anterior

const edad = datos.edad

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const lista = [
    {
        ...datos
    },{
        nombre: "David",
        apellido: "Rojas",
        edad: 29,
        altura: 190,
        eresDesarrollador: false
    },{
        nombre: "Luis",
        apellido: "Bermudez",
        edad: 32,
        altura: 177,
        eresDesarrollador: false
    }
]

//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)
