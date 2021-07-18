// Vamos criar uma função que calcula o IMC de uma pessoa, 
// dado a altura em m e a massa em kg.

function imc(peso, altura) {
    let valorIMC = (peso / (altura * altura).toFixed(2))

    if(valorIMC >= 40) {
        console.log(`Seu IMC é ${valorIMC}, você esta com Obesidade Grau III`)
    }
    if(valorIMC >= 35) {
        console.log(`Seu IMC é ${valorIMC}, você esta com Obesidade Grau II`)
    }
    if(valorIMC >= 30) {
        console.log(`Seu IMC é ${valorIMC}, você esta com Obesidade Grau I`)
    }
    if(valorIMC >= 25) {
        console.log(`Seu IMC é ${valorIMC}, você esta com Sobrepeso`)
    }
    if(valorIMC < 18.5) {
        console.log(`Seu IMC é ${valorIMC}, você esta com Peso Normal`)
    }
    else{
        console.log(`Seu IMC é ${valorIMC}, você esta Abaixo do Peso`)
    }
}

imc(90, 1.79)