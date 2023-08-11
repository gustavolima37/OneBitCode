//Funções no Array do JavaScript

const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//push: Adicionar Elementos no final do array
let tamanho = arr.push('Boromir')
console.log(arr)
console.log(tamanho)

//unshift: adiciona o elemento no inicio do array
tamanho = arr.unshift('Teste')
console.log(arr)
console.log(tamanho)

// pop: Remover o elemento no final do array
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift: Remover o elemento no inicio do array
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//includes: Pesquisa por um elemento no array
const inclui = arr.includes('Gandalf')
//retorna true ou false
console.log(inclui)

//indexOf: Pesquisa pelo indice do elemento.
const indice = arr.indexOf('Gandalf')
console.log(indice)

//Cortar(dividir) e Concatenar(juntar)
//slice (cortar)
const hobbits = arr.slice(0,4)
//cortar os elementos, começando pelo indice 0 ate o 4 e jogando na variavel hobbits, o ultimo elemento nao conta.
const outros = arr.slice(-4)
//recorta os elementos de tras pra frente, começando por -1.(o ultimo elemento.)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: concatenar arrays e adicionar elementos.
const sociedade = hobbits.concat(outros, 'Boromir')
console.log(sociedade)

// splice: sobstituição de elementos. serve pra remover um grupo do array e subtituir por outros.
//devolve uma alista de elementos, mesmo que seja apenas 1 elemento.
const elementosRemovidos = sociedade.splice(indice, 1, 'Gandalf, o Cinzento')
console.log(sociedade)
console.log(elementosRemovidos)

// Interar sobre os Elementos no array
// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}