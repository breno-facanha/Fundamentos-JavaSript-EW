class JogoDaMemoria {
    constructor({ tela, util }) {
        this.tela = tela
        this.util = util

        this.heroisIniciais = [
            // caminho do arquvivo é relativo ao index.html
            { img: './arquivos/batman.png', nome: 'batman'},
            { img: './arquivos/captaoAmerica.png', nome: 'captaoAmerica'},
            { img: './arquivos/hulk.png', nome: 'hulk'},
            { img: './arquivos/spiderMan.png', nome: 'spiderMan'}
        ]
        this.iconePadrao = './arquivos/padrao.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }
    // para usar o this, não podemos usar o static
    inicializar(){
        // vai pegar toas as funcores da classe tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)

        this.tela.configurarBotaoJogar(this.jogar.bind(this))

        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))

        this.tela.botaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
    }

    async embaralhar() {
        const copias = this.heroisIniciais
        // duplicar os itens
        .concat(this.heroisIniciais)
        // this.tela.atualizarImagens(copias)
        // entrar em cada item e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        // ordenar
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
        this.tela.exibirCarregando()

        const idDoIntervalo = this.tela.iniciarContador()
        
        await this.util.timeout(3000)
        this.tela.limparContador(idDoIntervalo)
        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)
        
    }

    esconderHerois(herois){
        // vamos trocar a imagem de todos os herois existentes
        // pelo iconde padrão
        // como fizemos no construtor, vamos extrair somente o necessario
        // unsando a sintaxe ({ chave: 1}) estamos falando que vamos retornar
        // o que tiver dentro do parenteses
        // quando não usamos : (exemplo do id), o JS entende que o nome
        // é o mesmo valor. Ex. id: id, vira id,
        const heroisOcultos = herois.map(( {nome, id}) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        // guardamos os herois para trabalhar com ele depois
        this.heroisEscondidos = heroisOcultos
    }

    exibirHerois(nomeDoHeroi){
        // vamos procurar esse heroi pelo nome em nossos heroisIniciais
        // vamos obter somente a imagem dele
        const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)
        // vamos criar a funcao na tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)
    }

    verificarSelecao(id, nome){
        const item = { id, nome }

        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados){
            case 0:
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // se a quantidade de escolhidos for 1, significa
                // que o usuario só pode escolher mais um
                // vamos obter o primeiro item da lista
                const [ opcao1 ] = this.heroisSelecionados
                // zerar itens para nao selecionar mais de dois
                this.heroisSelecionados = []
                // conferir os nomes e ids batem conforme o esperado
                
                if(opcao1.nome === item.nome &&
                    opcao1.id !== item.id
                    ){
                       this.exibirHerois(item.nome)
                       // como padrão e true, não precisa passar nada
                       this.tela.exbirMensagem(true)
                        return;
                    }
                    this.tela.exbirMensagem(false)
                    break;

        }
    }

    mostrarHeroisEscondidos(){
        const heroisEscondidos = this.heroisEscondidos
        for(const heroi of heroisEscondidos){
            const {img} = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img 
        }
        this.tela.atualizarImagens(heroisEscondidos)
    }

    jogar(){
       this.embaralhar()
    }

}



