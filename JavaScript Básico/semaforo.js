// Utilizando os conceitos que estudamos, 
// vamos criar um programa que funcionará como um sinal de transito.

let semaforo = 'verde'

if (semaforo === 'vermelho') {
    console.log('Pare')
} else if (semaforo === 'Amarelo') {
    console.log('Atenção')
} else if (semaforo === 'verde') {
    console.log('Siga')
} else {
    console.log('Digite uma das cores do semaforo')
}