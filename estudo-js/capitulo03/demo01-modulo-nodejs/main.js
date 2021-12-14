const Matematica = require('./matematica')
    //console.log(Matematica.somar(6, 2))
const readline = require ('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Insira o primeiro valor \n', valor1 => {
    terminal.question('Insira o segundo valor \n', valor2 => {
        console.log(
            `
            Multiplicando valores: ${Matematica.multiplicar(valor1, valor2)}
            Somando valores ${Matematica.somar(valor1, valor2)}
            `
        )
    })
})

