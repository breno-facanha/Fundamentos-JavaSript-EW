const readLine = require('readline')
const terminal = readLine.createInterface({
    // definir o modo de entrada via terminal
    input: process.stdin,
    // todo o texto de saida sairá pelo terminal 
    output: process.stdout
})

// texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de media
Digite 1 para acessar o menu inical
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiras
Digite 0 para sair
`
/*
console.log('textoMenu', textoMenu)
const opcao = 3
switch (opcao) {
    case 1:
        console.log('pressionou 1')
        break;
    case 2:
        console.log('pressionou 2')
        break;
    default:
        console.log('opção invalida')
        break;
}
*/
/*
terminal.question('qual é seu nome ? \n', function (msg){
    console.log('voce escreveu:', msg)
    terminal.close()
})
*/

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    }
}

function menuInicial(msg) {
   const opcao = Number(msg)
   if(isNaN(opcao)){
       throw new Error('não é um numero', msg)
   }
   switch(opcao){
        case 0: 
            console.log('saindo ...')
            terminal.close()
            break;
        case 1:
            console.log('menu inicial')
            break;
        case 2:
            console.log('menu de herois')
            break;
        case 3:
            console.log('menu de guerreiros')
            break;
        default: 
            console.log('opção invalida')
   }
}

terminal.question(questoes.menuInicial.texto, questoes.menuInicial.fn)