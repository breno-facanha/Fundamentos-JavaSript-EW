class JogoDaMemoria {
    constructor({ tela }) {
        this.tela = tela

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
    }

    embaralhar() {
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
        setTimeout(() => {
            this.esonderHerois(copias)
        }, 1000);
    }

    esonderHerois(herois){
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
        this.heroisOcultos = heroisOcultos
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
                       this.tela.exbirMensagem()
                        return;
                    }
                    this.tela.exbirMensagem(false)
                    break;

        }
    }

    jogar(){
       this.embaralhar()
    }

}



