const imoveis = []
let opcao = ''

do {
    opcao = prompt(
        'Imoveis cadastrados: ' + imoveis.length + '\nEscolha uma das opções:' +
        '\n1. Cadastrar imovel\n2. Mostrar imoveis cadastrados\n3. Sair'
    )

    switch (opcao) {
        case '1':
            const novoImovel = prompt('Digite o nome do proprietário, quantidade de quartos, banheiros e se possui garagem: ')
            imoveis.push(novoImovel)
            break;
        case '2':
            
            break

        case '3':
            alert('Encerrando...')
            break
    
        default:
            alert('Opção inválida!!')
            break;
    }

}while(opcao !== '3')