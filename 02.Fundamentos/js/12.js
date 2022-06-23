//funciones - Funciones Declaration

function OperacionSumar(){
    console.log (2 + 2)
}
OperacionSumar()

/* Funciones Optimizadas con parametros */
function OperacionSumarOptimizado(numero1 = 0, numero2 = 0){ /* Se inicializan en 0 para que cuando sea llamada la funcion sin parametros tenga un valor por defecto */
    console.log (numero1 + numero2)
}
OperacionSumarOptimizado(10, 30)
OperacionSumarOptimizado()
OperacionSumarOptimizado(10)


// Funciones que retornan valores
function sumar(numero1 = 0, numero2 = 0){ /* Se inicializan en 0 para que cuando sea llamada la funcion sin parametros tenga un valor por defecto */
    return (numero1 + numero2)
}
const resultado = sumar(10,20)
console.log(resultado)

function sumarArray(numero1 = 0, numero2 = 0){ /* Se inicializan en 0 para que cuando sea llamada la funcion sin parametros tenga un valor por defecto */
    return [numero1 + numero2, 'Hola @mariomegu']
}
const [resultado2, HolaString] = sumarArray(100,20)
console.log(resultado2)
console.log(HolaString)