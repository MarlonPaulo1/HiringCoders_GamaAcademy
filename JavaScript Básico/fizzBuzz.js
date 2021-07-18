// FizzBuzz
// Divisivel por 3 => 'Fizz'
// Divisivel por 5 => 'Buzz'
// Divisivel por 3 e 5 => 'FizzBuzz'
// Se não for um número => 'Não é um número'
// Se não for divisivel nem por 3 e nem por 5 => Entrada

function fizzBuzz(entrada) {
    if(entrada !== Number(entrada)) {
        console.log('Não é um número')
    }else if (entrada % 3 === 0 && entrada % 5 === 0) {
        console.log('FizzBuzz')
    } else if (entrada % 3 === 0){
        console.log('Fizz')
    }else if (entrada % 5 === 0) {
        console.log('Buzz')
    }else {
        console.log(entrada)
    }
}

fizzBuzz(true)