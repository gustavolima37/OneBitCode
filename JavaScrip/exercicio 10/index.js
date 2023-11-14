//Dentro do script, antes de ir adiante, vamos criar um array no escopo mais externo para armazenar as vagas salvas:
const vagas = []

//Depois podemos começar a escrever as funções que vamos ter no programa. A primeira delas é a função de listas as vagas:

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    
    alert(vagasEmTexto)
}

//E então a função de adicionar uma nova vaga:

function novaVaga(){
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga: ")

    const confirmacao = confirm("Deseja criar uma nova vaga com essas informações?\n" + "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: "+ dataLimite)

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("vaga criada.")
    }
}

//Vamos criar também uma função para exibir uma vaga:

function exibirVaga(){
    const indice = prompt("Informe o indice da vaga que deseja exibir: ")

    if (indice >= vagas.length || indice < 0){
        alert("Indice inválido!")
        return 
    }
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice + 
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao + 
        "\nData limite: " + vaga.dataLimite + 
        "\nQuantidade de candidatos: " + vaga.candidatos.length + 
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

//A função de inscrever um candidato em uma vaga:

function inscreverCandidato(){
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o indice da vaga para qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" + "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao){
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada")
    }
}

//A função de excluir uma vaga:

function excluirVaga(){
    const indice = prompt("Informe o indice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" + "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite 
    )

    if (confirmacao){
        vaga.splice(indice, 1)
        alert("Vaga excluida.")
    }
}

//Uma função para exibir o menu e obter a opção escolhida pelo usuário:

function exibirMenu(){
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" + 
        "\n\nEscolha uma das opções:" + 
        "\n1. Listar vagas disponiveis" + 
        "\n2. Criar uma vaga" + 
        "\n3. Visualizar uma vaga" + 
        "\n4. Inscrever um(a) candidato(a)" + 
        "\n5. Excluir uma vaga" + 
        "\n6. Sair"
    )

    return opcao
}

//E por fim vamos criar uma função principal para executar nossa aplicação e então chamar essa mesma função no escopo mais externo, para que ela execute assim que o script for carregado:

function executar(){
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch(opcao){
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida.")
                break
        }
    }while(opcao !== "6")
}

executar()