let frutaExistenteNoMercado = false
let temCpuSuficiente = true


const args = process.argv
const saldo = args[args.length -1]
console.log('args:', args)
console.log('saldo:', saldo)

if(isNaN(saldo)){
    console.log('valor invalido')
}

let tipoCliente = 'basic'

if(saldo <=9 ){
    tipoCliente = 'basic'
}else if (saldo >= 10 && saldo <= 20){
    tipoCliente = 'gold'
}else{
    tipoCliente = 'invalido'
}

console.log('tipo de cliente:',tipoCliente)

// ternario 

const idade = 18 
const resultado = idade >= 18 ? 'pode dirigir' : 'não pode dirigir'

