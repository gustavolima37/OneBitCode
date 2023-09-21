//função anonima, podemos atribuir uma função a uma variavel, assim nao precisando mostrar a função mas a variavel com valor de função.
function somar(a, b){
    return a + b
}

let operacao = somar

console.log(operacao(4, 5))

//ou declarando a função na variavel direto.

operacao = function (a, b){
    return a - b
}

console.log(operacao(4, 5))

//função anonima, nao precisa receber nome, mas podemos adicionar ela numa variavel.

//atenção quando usar função anonima...
//caso ela seja declarada com variavel antes da declaração, dara erro...

//modo certo:
olaMundo()

function olaMundo(){
    console.log("Olá, Mundo!")
}

//modo errado, pois esta chamando a função antes de sua declaração, pois a função foi criada numa variavel.
 
//oiMundo()

 const oiMundo = function(){
    console.log("Oi, Mundo!")
 }

 //modo certo

 const oiMundo2 = function(){
    console.log("Oi, Mundo2")
 }

 oiMundo2() //o certo é chamar depois de criar a função anonima, pois foi feita declarando uma variavel na função.