//Metodos em JavaScript são funções atreladas aos objetos!

let pessoa = {
    nome: "Isaac",
    idade: 26,
    dizerOla(){
        console.log("Olá, Mundo! Meu nome é " + this.nome + " e minha idade é " + this.idade + ".") //palavra reservada this, serve para referenciar dentro do objeto. como esta no exemplo.
    }
}

console.log(pessoa)

pessoa.dizerOla()