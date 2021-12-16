 const { error } = require('console')
const fs = require('fs')
/*
fs.readFile('./arq1.txt', (error, resposta) => {
    if(error){
        console.error('Deu ruim =(', error.stack);
        return
    }else{
        console.log('resposta\n', resposta.toString())
    }
}) */

fs.readFile('./arq1.txt', (errorArq1, respostaAqr1) => {
    if (errorArq1) {
        console.error('Deu ruuiiim =(', errorArq1)
        return
    }
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => {
        if (errorArq2) {
            console.error('Deu ruuiiim =(', errorArq2)
            return
        }
        fs.readFile('./arq3.txt', (errorArq3, respostaArq3) => {
            if (errorArq3) {
                console.error('Deu ruuiiim =(', errorArq3)
                return
            }
            const conteudo = `${respostaAqr1}\n${respostaArq2}\n${respostaArq3}`
            console.log(conteudo)
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
                if (errorWrite){
                    console.log('DEU RUIM =(', errorWrite)
                    return
                }
                console.log('Arquivo salvo com sucesso')
            })
        })
    })
})
