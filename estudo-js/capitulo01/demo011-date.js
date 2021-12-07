// meses começam com zero!
const dataAniversario = new Date(2020, 0 , 20)
console.log(dataAniversario)


// priemira data do JS (decada do Iunix) 
const primeiraDataDoJs = new Date(0)
console.log(primeiraDataDoJs)

const hoje = new Date()
console.log(hoje.toString())

console.log('----------------------')
// formato da data local do seu pc
console.log(hoje.toLocaleDateString())
// formato da hora local do seu pc
console.log(hoje.toLocaleTimeString())
// formato da hora e data local do seu pc
console.log(hoje.toLocaleString())
console.log('----------------------')

// formato global recomendado!
console.log(hoje.toISOString())

// formato do dia atual local da sua maquina
const dia = hoje.getDate()
// hoje.setDate(dia + 5) // +5 dias depois de hoje
console.log(hoje)
// formato do mês atual local da sua maquina
const mes = hoje.getMonth()
// formato do ano atual local da sua maquina
const ano = hoje.getFullYear()
console.log(ano)

console.log(`
    Dia: ${hoje.getDate()}
    Mês: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
`)

//condição só para descrever o formato em dia mês e ano ao meu agrado
if (mes == 0) {
    console.log(dia ,'janeiro', ano)
}else if(mes == 1){
    console.log(dia ,'fevereiro', ano)
}else if(mes == 2){
    console.log(dia ,'março', ano)
}else if(mes == 3){
    console.log(dia ,'abril', ano)
}else if(mes == 4){
    console.log(dia ,'maio', ano)
}else if(mes == 5){
    console.log(dia ,'junho', ano)
}else if(mes == 6){
    console.log(dia ,'julho', ano)
}else if(mes == 7){
    console.log(dia ,'agosto', ano)
}else if(mes == 8){
    console.log(dia ,'setembro', ano)
}else if(mes == 9){
    console.log(dia ,'outubro', ano)
}else if(mes == 10){
    console.log(dia ,'novembro', ano)
}else if(mes == 11){
    console.log(dia ,'dezembro', ano)
}else {
    console.log('erro')
}

// comparativo com datas 
console.log(new Date(2021, 11, 07) > new Date (1993, 7, 9))

