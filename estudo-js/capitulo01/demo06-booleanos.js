const podeDirigir = true
if(podeDirigir){
    console.log('Ela pode dirigir')
}

const saldoEmConta = 0 
if(!saldoEmConta){
    console.log('não tem saldo')
}


const boolComString = "ae harckerzão!!"

//força o valor true ou false
//de acordo com a tabela
console.log(!!boolComString)

//negação
console.log('negação', !boolComString)

//negação + forçar a bool
console.log('negação + forçar', !(!!boolComString))