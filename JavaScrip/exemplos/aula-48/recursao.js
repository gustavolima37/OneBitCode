//Função recursiva, uma função que chama ela mesma.

//função recursiva, chamando ela mesma, ate que o numero dividido, tenha resto diferente de 0!
function dividir(num){
    console.log(num)
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

//dividir(2)

function dobrar(num){
    console.log(num)
    dobrar(num*2)
}

//fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4
function fatorial(num){
    console.log("Número: " + num)
    if (num === 0){ //caso base (pra poder parar a função)
        return 1
    } else if(num === 1){
        return 1
    } else{
        console.log(num + " * !" + (num - 1))
        return num * fatorial(num -1)
    }
}

console.log(fatorial(5))