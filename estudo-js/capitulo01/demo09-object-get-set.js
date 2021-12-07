const pessoa = {
    _nome: '',
    get nome () {
        return this._nome
    },

    set nome (valor){
        this._nome = valor.toUpperCase()
    }
}

pessoa.nome = 'Maria do Céu'
console.log(pessoa.nome)