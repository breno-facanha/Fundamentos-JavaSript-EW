const heroi = {
    nome: 'flash',
    idade: 100,
    sexo: 'Masculino'
}

//console.log('nome do heroi:', heroi.nome)
//console.log('idade:', heroi['idade'])
//console.log('sexo:', heroi.sexo)
//console.log('naoExiste', heroi.naoExiste)

//adicionado chave no objeto
//heroi.id = 0001
//console.log(heroi)

//pegar as chaves do objeto
//console.log(Object.keys(heroi))

//pegar valores das chaves
//console.log(Object.values(heroi))

//juntar dois objetos
const pessoa = {
    tamanho: '10 metros'
}

const novoObj = Object.assign(heroi, pessoa)
console.log(novoObj)

// deletar uma chave
delete novoObj.tamanho
console.log(novoObj)