function nomeDaFuncao(parametro1){
    //bloco de codigo
}

function queDiaEhoje() {
    const data = new Date();
    console.log(`Hoje é dia: ${data.getDay()}`)
}
queDiaEhoje()

function soma(valor1, valor2){
    console.log(`A soma entre ${valor1} + ${valor2} é :`, valor1 + valor2)
}

soma(1, 4)

function multiplicação(valor1, valor2){
    return valor1 * valor2
}

const nmr1 = 20
const nmr2 = 10 
const result = multiplicação(nmr1, nmr2)
console.log(result)

/////////////////////////////
const funcionario1 = {
    nome: 'Zezinho',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: 'Joao',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const descontoFuncionario1 = 
    funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto)

const descontoFuncionario2 = 
    funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto)

console.log(
    `
      Salaraio Funcionario1 é : ${descontoFuncionario1}
      Salaraio Funcionario2 é : ${descontoFuncionario2}
    `
)

function calcularDesconto(salarioBruto, desconto){
    return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(funcionario1.salarioBruto, funcionario1.desconto)

funcionario2.salarioLiquido = calcularDesconto(funcionario2.salarioBruto, funcionario2.desconto)

console.log(
    `
    O salário liquido do ${funcionario1.nome} é: ${funcionario1.salarioLiquido}
    O salário liquido do ${funcionario2.nome} é: ${funcionario2.salarioLiquido}
    `
)
