function dobro(x) {
    alert(`O dobro de ${x} é: ${x*2}`)
}

//dobro(2);
//dobro(7);

//dobro()

//Quando declarar um parametro e caso, quando chamar, nao por valor nenhum, sera atribuido o valor: nome(parametro) =(recebe) "mundo"(valor)
function dizerOla(nome = "mundo"){
    alert("Olá, " + nome + "!")
}

//dizerOla("Gustavo") //com parametro
//dizerOla() //sem parametro
//se nao declarar o parametro, dará underfined!

function soma(a, b){
    alert(`O resultado da soma é ${a + b}`)
}

//soma(7, 6)
//soma(1, 1)

function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome, //mesmo que nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

//dica, se usar um parametro opicional(ex: tipo), colocar por ultimo e nao antes de parametros obrigatorios!
function novoUsuario(nome, tipo = "admin", email, senha){
    const usuario = {
        nome, //mesmo que nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

criarUsuario("Gustavo", "gusta@gmail.com", "123")
novoUsuario("Gustavo", "gusta@gmail.com", "123")

//usando função com varios parametros...
function muitosParametros(nome, telefone, endereco, aniversario, email, senha){
    //...
}
//melhorando a função utilizando um parametro e depois adicionando objeto
function objetoComoParametro(usuario){
    //...
    usuario.nome
    usuario.email
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

//ou podemos usar objetos para adicionar os parametros na função

const dadosUsuario = {
    nome: "Guga",
    telefone: "123456",
    endereco: "rua boi",
    aniversario: "04/11",
    email: "guga@gg.com",
    senha: "123",
}

objetoComoParametro(dadosUsuario)