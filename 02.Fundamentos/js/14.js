//Arrow Funtion

const sumar = (numero1, numero2) => { //cambia la sintaxis resumiendo las palabras function por =>
    console.log (numero1+ numero2)
}
sumar(2323,234324)


//Forma resumida
const sumar2 = (numero1 = 0, numero2 = 0) => numero1 + numero2 //se da por implicito que el return es necesario, si el código es de una sola linea no es necesario escribir {}
const resultado2 = sumar2(34687348736, 824876348)
console.log(resultado2)


const sumarArrow = () => 2+2 //El código se hace mucho mas compacto
const resultadoArrow = sumarArrow()
console.log(resultadoArrow)

