let confianca = 100
let alterarConfianca
let armazenar = []


console.log("----Especialista em alimentos----")
console.log("----Vou te ajudar a escolher seu alimento----")

let baseDeConhecimento = [
    {
        identificacao: "inicio",
        descricao: "Você gostaria de uma opcao mais saudavel?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "animais-aquaticos",
                alterarConfianca: 0
            },
            {
                opcao: "não",
                redireciona: "massas",
                alterarConfianca: 0
            },
            {
                opcao: "não sei",
                redireciona: "massas",
                alterarConfianca: - 10
            }
        ]
    },
    {
        identificacao: "animais-aquaticos",
        descricao: "Você gostaria de opções com animais aquáticos (Peixes, Camarões, Lula etc)",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "peixes",
                alterarConfianca: 0
            },
            {
                opcao: "não",
                redireciona: "brasileira",
                alterarConfianca: 0
            },
            {
                opcao: "não sei",
                redireciona: "grandes-porcoes",
                alterarConfianca: - 10
            }
        ]
    },
    {
        identificacao: "massas",
        descricao: "Você gostaria de opções com massas? (Culinária Italiana)",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "grandes-porcoes",
                alterarConfianca: 0
            },
            {
                opcao: "não",
                resposta: "Xis, Cachorro Quente, Batatao, Hamburguer ou pastel",
                alterarConfianca: 0
            },
            {
                opcao: "não sei",
                redireciona: "brasileira",
                alterarConfianca: - 10
            }
        ]
    },
    {
        identificacao: "peixes",
        descricao: "Você gostaria de opções com peixes?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "havaiana",
                alterarConfianca: 0
            },
            {
                opcao: "não",
                resposta: "Frutos do Mar",
                alterarConfianca: 0
            },
            {
                opcao: "não sei",
                redireciona: "mexicana",
                alterarConfianca: - 10
            }
        ]
    },
    {
        identificacao: "brasileira",
        descricao: "Você gostaria de uma opção da culinária brasileira?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Comida Brasileira",
                alterarConfianca: 0
            },
            {
                opcao: "não",
                redireciona: "mexicana",
                alterarConfianca: 0
            },
            {
                opcao: "não sei",
                redireciona: "pizza",
                alterarConfianca: - 10
            }
        ]
    },
    {
        identificacao: "grandes-porcoes",
        descricao: "Você gostaria de uma opção com Grandes porções?",
        opcoes: [
            {
                opcao: "sim",
                redireciona: "pizza",
                alterarConfianca: 0
            },
            {
                opcao: "não",
                redireciona: "calzone",
                alterarConfianca: 0
            },
            {
                opcao: "não sei",
                redireciona: "mexicana",
                alterarConfianca: - 10
            }
        ]
    },
    {
        identificacao: "havaiana",
        descricao: "Gostaria da culinaria Havaiana?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "poke",
                alterarConfianca: 0
            },
            {
                opcao: "não",
                redireciona: "japonesa",
                alterarConfianca: 0
            },
        ]
    },
    {
        identificacao: "mexicana",
        descricao: "Gostaria de uma opção de comida mexicana?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Burrito",
                alterarConfianca: 0
            },
            {
                opcao: "não",
                resposta: "Kebab",
                alterarConfianca: 0
            },
        ]
    },
    {
        identificacao: "pizza",
        descricao: "Gostaria de uma pizza?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Pizza",
                alterarConfianca: 0
            },
            {
                opcao: "não",
                resposta: "Lasanha",
                alterarConfianca: 0
            },
        ]
    },
    {
        identificacao: "calzone",
        descricao: "Gostaria de um Calzone?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Calzone",
                alterarConfianca: 0
            },
            {
                opcao: "não",
                resposta: "Massa",
                alterarConfianca: 0
            },
        ]
    },
    {
        identificacao: "japonesa",
        descricao: "E da culinária japonesa?",
        opcoes: [
            {
                opcao: "sim",
                resposta: "Sushi",
                alterarConfianca: 0
            },
            {
                opcao: "não",
                resposta: "Pratos com Peixes",
                alterarConfianca: 0
            },
        ]
    },
];


function selecionaPergunta(identificadorPergunta) {
    for (let index = 0; index < baseDeConhecimento.length; index++) {
        const element = baseDeConhecimento[index];
        if (element.identificacao == identificadorPergunta) {
            return element;
        }
    }
}

async function lerEntrada(mensagem) {
    process.stdout.write(mensagem);
    let buffer = "";
    const stdin = process.stdin;
    stdin.resume();
    stdin.setEncoding('utf8');
    
    return new Promise((resolve) => {
        stdin.on('data', function(data) {
            buffer += data;
            stdin.pause();
            resolve(buffer.trim());
        });
    });
}

let pergunta = selecionaPergunta("inicio");

let respostaFinal = null
while(respostaFinal == null) {
    console.log(pergunta.descricao);
    pergunta.opcoes.forEach(possivelResposta => {
        console.log(possivelResposta.opcao);
    });
    let resposta = await lerEntrada("-> ");

    let respostasPossiveis = pergunta.opcoes;
    for (let index = 0; index < respostasPossiveis.length; index++) {
        let respostaPossivelAtual = respostasPossiveis[index];
        if (resposta == respostaPossivelAtual.opcao) {
            confianca += respostaPossivelAtual.alterarConfianca
            armazenar.push(
            {
                pergunta: pergunta.descricao,
                resposta: respostaPossivelAtual.opcao,
            }
        )
            if ("redireciona" in respostaPossivelAtual) {
                pergunta = selecionaPergunta(respostaPossivelAtual.redireciona)
            } else {
                respostaFinal = respostaPossivelAtual.resposta;
            }
        }
    }
}


if(confianca >= 100){
    console.log("Porcentagem de confiança: 100%")
}else{
    console.log("Porcentagem de confiança: " + confianca)
}

//console.log(armazenar)

console.log(respostaFinal, confianca);

armazenar.forEach((parte) => {
    console.log("A pergunta foi: " + parte.pergunta + " Você respondeu: '" + parte.resposta + "'")
})
console.log("Por isso eu mostrei: " + respostaFinal)
