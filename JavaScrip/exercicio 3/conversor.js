const medida
const medida = prompt("Digite um numero em metros, para converter em: \na) milímetro \nb) centímetro \nc) decímetro \nd) decâmetro \ne) hectômetro \nf) quilômetro " )

const medidaNumerica = parseFloat(medida)

switch (medidaNumerica) {
    case "a":
        alert(medidaNumerica + " em milimetro é: " + (medidaNumerica / 1000))
        break
    case "b":
        alert(medidaNumerica + " em milimetro é: " + (medmedidaNumericaida / 1000))
        break 
    case "c":
        alert(medidaNumerica + " em milimetro é: " + (medidaNumerica / 1000))
        break
    case "d":
        alert(medidaNumerica + " em milimetro é: " + (medidaNumerica / 1000))
        break 
    case "e":
        alert(medidaNumerica + " em milimetro é: " + (medidaNumerica / 1000))
        break 
    case "f":
        alert(medidaNumerica + " em milimetro é: " + (medidaNumerica / 1000))
        break 
    default:
        alert("Digite um numero valido!")
}