let n1 = 10
let n2 = 200

let resultadoSomar = somar(n1, n2)
let resultadoSubtrair = subtrair(n1, n2)
let resultadoDividir = dividir(n1, n2)
let resultadoMultiplicar = multiplicar(n1, n2)

function somar(n1, n2){
    return n1 + n2
}

function subtrair(n1, n2){
    return n1 - n2
}

function dividir(n1, n2){
    return n1 / n2
}

function multiplicar(n1, n2){
    return n1 * n2
}
console.log(resultadoSomar)
console.log(resultadoSubtrair)
console.log(resultadoDividir)
console.log(resultadoMultiplicar)