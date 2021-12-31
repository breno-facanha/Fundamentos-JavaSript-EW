class JogoDaMemoria {
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            // caminho do arquvivo é relativo ao index.html
            { img: './arquivos/batman.png', name: 'batman'},
            { img: './arquivos/captaoAmerica.png', name: 'captaoAmerica'},
            { img: './arquivos/hulk.png', name: 'hulk'},
            { img: './arquivos/spiderMan.png', name: 'spiderMan'}
        ]
    }
    // para usar o this, não podemos usar o static
    inicializar(){
        // vai pegar toas as funcores da classe tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // forçar a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    
    jogar() {
        console.log('uau')
    }
}



