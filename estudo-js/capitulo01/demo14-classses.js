class Heroi {
    atacar() {
        console.log(`atacou`)
    }
    defender() {
        console.log(`defender`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

class Heroi2{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    atacar(){
        console.log(`o ${this.nome} atacou`)
    }
}

const heroi2 = new Heroi2('Flash', 80)
heroi2.atacar()

class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2020 -idade
    }
}

const anoNascimento = Heroi3.obterAnoNascimento(19)
console.log(anoNascimento)



class Test { 
    constructor(nome) { 
        this.nome = nome, this.idade = 18 
    }
}
console.log(`${this.nome}`)