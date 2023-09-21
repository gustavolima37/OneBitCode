//Funções de alta ordem (High-Order Functions)
//Uma HOF(High-Order Function) é uma função que recebe outra função com parêmetro.

function calcular(a, b, operacao){
    console.log("Realizando uma operação.")
    const resultado = operacao(a,b) //uma função dentro de outra.
    return resultado
}

function somar(x,y){
    console.log("Realizando uma soma.")
    return x + y
}

console.log(calcular(3,5, somar))

console.log(calcular(8,4, function(x,y){
    console.log("Realizando uma subtração.")
    return x - y
}))

//Mostrando cada elemento pela função exibirElemento numa lista.
function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista)
}

//CallBacks = metodos do array
lista.forEach(exibirElemento) 