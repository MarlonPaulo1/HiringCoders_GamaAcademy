let elementos = []
let topo = -1
const MAX = 10

function push(num) {
    if (topo < MAX) {
        topo = topo + 1
        elementos[topo] = num
    }
    else {
        console.log('Pilha esta cheia')
    }
}

function estaVazia() {
    return topo == -1
}

function pop() {
    if (topo != -1) {
        let num = elementos[topo]
        topo = topo - 1
        return num
    }
    else {
        console.log('Pilha esta vazia!')
    }
}

// ------------ parte do codigo que usa pilha -----------
//push(10)
//push(20)
//push(30)


//console.log(elementos)

//console.log(pop())
//console.log(pop())
//console.log(pop())

let numDecimal = 10
let resto

console.log('Hora de empilhar...')
while (numDecimal != 0) {
    resto = parseInt(numDecimal % 2)
    push(resto)
    console.log(resto)
    numDecimal = parseInt(numDecimal / 2)
}


console.log('Desempilhando todooooooooooooo.......')
while (!estaVazia()) {
    console.log(pop())
}