// ENQUANTO NÃO MUDAR NÃO MUDA
let termoDeParada = true
let contador = 0
while(termoDeParada) {
    termoDeParada = contador < 10
    if (contador % 2 === 0){
        console.log('Numero Par', contador)
    }
    contador++
}

// roda a primeira vez e testa a variavel depois!
do{
    console.log('Só uma vez! pois o termoDeParada é', termoDeParada)
} while(termoDeParada)

while(termoDeParada){
    console.log('nem vai rodar')
}

let termoParada = true

while(termoParada) {

console.log('Olá Mundo!')

break

}

const listaDeTarefas = [

    { tarefa: 'lavar o chão', id: 1},
    
    { tarefa: 'lavar a louça', id: 2},
    
    { tarefa: 'arrumar o quarto', id: 3},
    
]

    let indice = 0

    do {
    
    console.log(listaDeTarefas[indice].tarefa)
    
    indice++
    
    } while(indice < listaDeTarefas.length)
