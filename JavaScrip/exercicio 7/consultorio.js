let fila = [] //gerenciar os pacientes
let opcao = '' //para o menu interativo

do { //acrescentar o paciente de forma ordenada
    let pacientes = ''
    for (let i = 0; i < fila.length; i++){
        pacientes += (i+1) + 'º - ' + fila[i] + '\n'
    }

    opcao = prompt( //menu interativo
        'Pacientes:\n' + pacientes +
        '\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair'
    )

    switch (opcao) { //opções para adicionar, remover paciente.
        case '1':
            const novoPaciente = prompt('Qual é o nome do paciente?')
            fila.push(novoPaciente)
            break;
        case '2':
            const pacienteConsultado = fila.shift()
            if (pacienteConsultado){
                alert(pacienteConsultado + ' Foi removido da fila.')
            }else{
                alert('Não há pacientes na fila!')
            }         
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida!!')
            break;
    }
}while (opcao !== '3')