const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais os benefícios da reciclagem?",
        alternativas: [
            {
                texto: "A reciclagem não é necessária pois o lixo já se decompõem sozinho.",
                afirmacao: "Obrigado"
            },
            {
                texto: "Economia de energia e água, proteção dos ecossistemas e vida selvagem e redução de emissores de carbono na atmosfere.",
                afirmacao: "Obrigado",
            }
        ]
    },
    {
        enunciado: "Quais são as principais fontes de poluição?",
        alternativas: [
            {
                texto: "As industrias e os veículos de transporte.",
                afirmacao: "por"
            },
            {
                texto: "O O² (oxigênio) que as árvores liberam após a fotossíntese.",
                afirmacao: "por"
            }
        ]
    },
    {
        enunciado: "Qual a importância de preservar uma área verde?",
        alternativas: [
            {
                texto: "O equilíbrio climático e a proteção da diversidade biológica da fauna e da flora.",
                afirmacao: "sua"
            },
            {
                texto: "A preservação de áreas verdes não é necessária pois, o governo cria essas desculpas para lucrar mais com campanhas.",
                afirmacao: "sua"
            }
        ]
    },
    {
        enunciado: "O aquecimento global é algo natural ou existe interferência humana?",
        alternativas: [
            {
                texto: "O aquecimento global não tem interferência da mão humana, sendo composto completamente por dejetos de animais.",
                afirmacao: "participação!"
            },
            {
                texto: "A interferência humana é uma das principais causas do aquecimento global, como desmatementos, queima de combustíveis fósseis, agropecuária, entre outros motivos.",
                afirmacao: "participação!"
            }
        ]
    },
    {
        enunciado: "Como se recicla um objeto? ",
        alternativas: [
            {
                texto: "Para se fazer a reciclagem adequada de um objeto é necessário que se faça a junção de recicláveis para a possibilidade de sua reutilização, já para os residuos orgânicos, seria adequado sua distribuição como adubo.",
                afirmacao: "Até mais."
            },
            {
                texto: "Para se fazer a reciclagem adequada de um objeto é necessário que se faça a junção de reziduos orgânicos para a possibilidade de sua queima, já para os recicláveis, seria adequado sua distribuição como adubo.",
                afirmacao: "Até mais"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();