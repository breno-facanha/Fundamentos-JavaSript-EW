const readline = require ('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// CALLBACK
// terminal.question('Qual seu nome?\n', nome => {
//     terminal.question('Qual seu telefone?\n', telefone =>{
//         console.log(
//             `
//             nome: ${nome}
//             telefone: ${telefone}
//             `
//         )
//         terminal.close()
//     })
// })

function questionAsync(texto) {
    return new Promise((resolve, reject) =>{
        terminal.question(`${texto}\n`, resolve)
    })

}

let nome = ''
let telefone = ''

Promise.resolve()
    .then(() => questionAsync('Qual é o seu nome ?'))
    .then(respostaNome => {
        if(!respostaNome){
            throw new Error('Campo vazio')
        }
        nome = respostaNome
    })
    .then(() => questionAsync('Qual é seu telefone ?'))
    .then(respostaTelefone => {
        if(!respostaTelefone) {
            throw new Error('campo vazio')
        }
        telefone = respostaTelefone
    })
    .then(() => {
        console.log(
            `
                Nome: ${nome}
                Telefone: ${telefone}
             `
        )
    })
    .catch(error => {
        console.error('Deu ruim ')
    })
    .finally(() => terminal.close())