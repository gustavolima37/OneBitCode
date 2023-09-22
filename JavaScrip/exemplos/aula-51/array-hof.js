//Metodos de arrays

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

//Metodo Map (serve para fazer transformação em array), pegar esse array personagens e tranformar em um outro array em outro.
//(itera sobre cada elemento de um array e cria um novo array baseado nele.) 

//exemplo de map sem usar o metodo map

//const nomes = []

//for (let i = 0; i < personagens.length; i++){
//    nomes.push(personagens[i].nome)
//}

//exemplo usando o map

const nomes = personagens.map(function(personagem){
    return personagem.nome
})

console.log(nomes)

//Filter (filtrar elementos no array existentes e cria outro array)

//ex sem o filter

//const orcs = []

//for (let i = 0; i < personagens.length; i++){
//    if (personagens[i].raca === "Orc"){
//        orcs.push(personagens[i])
//    }
//}

//ex com filter

const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"
})

console.log(orcs)

//Reduce (tambem cria outro array, porem mais elaborado.)
//esse metodo, transforma o array em outra coisa, seja um objeto, numero, um array, um string, uma soma...

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0) //o zero, é o valor inicial do valorAcumulado, pra poder somar assim que fizer as verificações!

console.log(nivelTotal)

//separando o array principal, em outro array separado por raças.

const racas = personagens.reduce(function(valorAcumulado, personagem){
    if (valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    }else{
        valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado
}, {})

console.log(racas)

//metodo Sort

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
    return a.nivel - b.nivel
  })