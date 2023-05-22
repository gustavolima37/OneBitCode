const carro1 = prompt("Digite o nome do carro:")
const velocidade1 = prompt("Digite a velocidade do carro:")

const carro2 = prompt("Digite o nome do segundo carro:")
const velocidade2 = prompt("Digite a velocidade desse carro:")

if (velocidade1 > velocidade2) {
    alert(carro1 + " é mais rápido do que " + carro2)
} else if (velocidade2 > velocidade1) {
    alert(carro2 + " é mais rápido do que " + carro1)
} else {
    alert(carro1 + " e " + carro2 + " possuem velocidades iguais.")
}