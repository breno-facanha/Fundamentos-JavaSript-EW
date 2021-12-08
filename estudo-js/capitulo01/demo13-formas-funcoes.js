function minhaFuncao1 (parametro1){
    return 'olá mundo'
}

const minhaFuncao2 = function(parametro1) {
    return 'olá mundo'
}

const minhaFuncao3 = (parametro1) => {
    return 'olá mundo'
}

const minhaFuncao4 = parametro1 => `Olá mundo ${parametro1}`

const obj1 = {
    minhaFuncao: parametro1 => `Olá mundo ${parametro1}`
}
//chamando a função de dentro do objeto 
obj1.minhaFuncao('test')


const obj2 = {
    minhaFuncao (parametro1) {
        return `Olá mundo ${parametro1}`
    }
}

console.log(obj2.minhaFuncao('teste'))