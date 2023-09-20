let pokemon = "Charmander"

function evoluir(){
    pokemon = "Charmeleon"
}

console.log(pokemon) //chamando a variavel global
evoluir() //aplicando a função
console.log(pokemon) //chamando a variavel interna da função

function criarAnimal(){
    let animal = "Gato"
}

criarAnimal()
console.log(animal) //vai dar erro, pois a variavel animal, nao teve sua declaração global, apenas na função.

//a variavel global fica disponivel pra ser usada, interna ou externa no escopo, mas a variavel interna, nao fica disponivel externamente.

