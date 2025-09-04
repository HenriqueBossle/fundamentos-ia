const ALTURA = 7;
const LARGURA = 6;
const TOTAL_SAIDAS = 36;

function geraSaidaEsperada(indice){
    const saida = Array(TOTAL_SAIDAS).fill(0); // Cria array de 36 zeros
    saida[indice] = 1; //Define o índice da classe como 1
    return saida;  // Ex: [0,0,1,0,...] para classe 2
}

// Conjunto de dados de treinamento: entrada (matriz 7x6) + saída esperada
let treinamento = [
    {
        entrada: [
            [0,1,1,1,1,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,1,1,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(0)
    },
    {
        entrada: [
            [0,0,0,1,0,0],
            [0,0,1,1,0,0],
            [0,1,0,1,0,0],
            [0,0,0,1,0,0],
            [0,0,0,1,0,0],
            [0,0,0,1,0,0],
            [0,1,1,1,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(1)
    },
    {
        entrada: [
            [0,0,1,1,0,0],
            [0,1,0,0,1,0],
            [0,0,0,0,1,0],
            [0,0,0,1,1,0],
            [0,0,1,0,0,0],
            [0,1,0,0,0,0],
            [0,1,1,1,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(2)
    },
    {
        entrada: [
            [0,1,1,1,1,0],
            [0,0,0,1,0,0],
            [0,0,1,0,0,0],
            [0,1,1,1,0,0],
            [0,0,0,0,1,0],
            [0,0,0,0,1,0],
            [0,1,1,1,0,0],
        ],
        saidaEsperada: geraSaidaEsperada(3)
    },
    {
        entrada: [
            [0,0,0,0,1,0],
            [0,0,0,1,1,0],
            [0,0,1,0,1,0],
            [0,1,0,0,1,0],
            [1,0,0,0,1,0],
            [1,1,1,1,1,1],
            [0,0,0,0,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(4)
    },
    {
        entrada: [
            [0,1,1,1,1,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,1,1,1,0],
            [0,0,0,0,0,1],
            [0,0,0,0,0,1],
            [0,1,1,1,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(5)
    },
    {
        entrada: [
            [0,1,1,1,1,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,1,1,1,0],
            [0,1,0,0,0,1],
            [0,1,0,0,0,1],
            [0,1,1,1,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(6)
    },
    {
        entrada: [
            [0,1,1,1,1,1],
            [0,0,0,0,0,1],
            [0,0,0,0,1,0],
            [0,0,0,1,0,0],
            [0,0,1,0,0,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
        ],
        saidaEsperada: geraSaidaEsperada(7)
    },
    {
        entrada: [
            [0,1,1,1,1,0],
            [0,1,0,0,0,1],
            [0,1,0,0,0,1],
            [0,1,1,1,1,1],
            [0,1,0,0,0,1],
            [0,1,0,0,0,1],
            [0,1,1,1,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(8)

    },
    {
        entrada: [
            [0,1,1,1,1,0],
            [0,1,0,0,0,1],
            [0,1,0,0,0,1],
            [0,1,1,1,1,1],
            [0,0,0,0,0,1],
            [0,0,0,0,0,1],
            [0,1,1,1,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(9)
    },
    {
        entrada: [
            [0,0,1,1,0,0],
            [0,1,0,0,1,0],
            [1,0,0,0,0,1],
            [1,1,1,1,1,1],
            [1,0,0,0,0,1],
            [1,0,0,0,0,1],
            [1,0,0,0,0,1],
        ],
        saidaEsperada: geraSaidaEsperada(10) //a
    },
    {
        entrada: [
            [0,1,1,1,0,0],
            [0,1,0,0,1,0],
            [0,1,0,1,0,0],
            [0,1,1,1,1,0],
            [0,1,0,0,0,1],
            [0,1,0,0,0,1],
            [0,1,1,1,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(11) //b

    },
    {
        entrada: [
            [0,1,1,1,1,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,1,1,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(12) //c
    },
        {
        entrada: [
            [0,1,1,1,1,0],
            [0,1,0,0,0,1],
            [0,1,0,0,0,1],
            [0,1,0,0,0,1],
            [0,1,0,0,0,1],
            [0,1,0,0,0,1],
            [0,1,1,1,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(13) // D
    },
    {
        entrada: [
            [0,1,1,1,1,1],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,1,1,1,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,1,1,1,1],
        ],
        saidaEsperada: geraSaidaEsperada(14) // E
    },
    {
        entrada: [
            [0,1,1,1,1,1],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,1,1,1,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
        ],
        saidaEsperada: geraSaidaEsperada(15) // F
    },
    {
        entrada: [
            [0,1,1,1,1,0],
            [0,1,0,0,0,1],
            [0,1,0,0,0,0],
            [0,1,0,1,1,0],
            [0,1,0,0,0,1],
            [0,1,0,0,0,1],
            [0,1,1,1,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(16) // g
    },
    {
        entrada: [
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,1,1,1,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
        ],
        saidaEsperada: geraSaidaEsperada(17) // h
    },
    {
        entrada: [
            [0,0,0,0,0,0],
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,1,0,0,0]
        ],
        saidaEsperada: geraSaidaEsperada(18) // i
    },
    {
        entrada: [
            [0,0,1,1,1,1],
            [0,0,0,0,1,0],
            [0,0,0,0,1,0],
            [0,0,0,0,1,0],
            [0,0,0,0,1,0],
            [0,1,0,0,1,0],
            [0,0,1,1,0,0]
        ],
        saidaEsperada: geraSaidaEsperada(19) // j
    },
    {
        entrada: [
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,1,0,1,0],
            [0,0,1,1,0,0],
            [0,0,1,0,1,0],
            [0,0,1,0,0,0],
            [0,0,1,0,0,0]
        ],
        saidaEsperada: geraSaidaEsperada(20) // k
    },
    {
        entrada: [
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,1,1,1,1]
        ],
       saidaEsperada: geraSaidaEsperada(21) // l
    },
    {
        entrada: [
            [1,0,0,0,0,1],
            [1,1,0,0,1,1],
            [1,0,1,1,0,1],
            [1,0,0,0,0,1],
            [1,0,0,0,0,1],
            [1,0,0,0,0,1],
            [1,0,0,0,0,1]
        ],
       saidaEsperada: geraSaidaEsperada(22) // m
    },
    {
        "entrada": [
            [1,0,0,0,0,1],
            [1,1,0,0,0,1],
            [1,0,1,0,0,1],
            [1,0,0,1,0,1],
            [1,0,0,0,1,1],
            [1,0,0,0,0,1],
            [1,0,0,0,0,1]
        ],
        saidaEsperada: geraSaidaEsperada(23) // n
    },
    {
        "entrada": [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,1,1,0,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,0,1,1,0,0]
        ],
        saidaEsperada: geraSaidaEsperada(24) // o
    },
    {
        "entrada": [
            [0,1,1,1,0,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,1,1,0,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0]
        ],
        saidaEsperada: geraSaidaEsperada(25) // p
    },
    {
        "entrada": [
            [0,0,1,1,0,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,0,1,1,0],
            [0,0,1,1,1,0],
            [0,0,0,0,0,1]
        ],
        saidaEsperada: geraSaidaEsperada(26) // q
    },
    {
        "entrada": [
            [0,1,1,1,0,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,1,1,0,0],
            [0,1,1,0,0,0],
            [0,1,0,1,0,0],
            [0,1,0,0,1,0]
        ],
        saidaEsperada: geraSaidaEsperada(27) // r
    },
    {
        "entrada": [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,1,1,1,0],
            [0,1,0,0,0,0],
            [0,0,1,1,0,0],
            [0,0,0,0,1,0],
            [0,1,1,1,0,0]
        ],
      saidaEsperada: geraSaidaEsperada(28) // s
    },
    {
    entrada: [
        [1,1,1,1,1,1],
        [0,0,1,0,0,0],
        [0,0,1,0,0,0],
        [0,0,1,0,0,0],
        [0,0,1,0,0,0],
        [0,0,1,0,0,0],
        [0,0,1,0,0,0]
    ],
    saidaEsperada: geraSaidaEsperada(29) // t
},
{
    entrada: [
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [0,1,1,1,1,0]
    ],
    saidaEsperada: geraSaidaEsperada(30) // u
},
{
    entrada: [
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [0,1,0,0,1,0],
        [0,1,0,0,1,0],
        [0,0,1,1,0,0]
    ],
    saidaEsperada: geraSaidaEsperada(31) // v
},
{
    entrada: [
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [1,0,0,0,0,1],
        [1,0,1,1,0,1],
        [1,0,1,1,0,1],
        [1,1,0,0,1,1],
        [1,0,0,0,0,1]
    ],
    saidaEsperada: geraSaidaEsperada(32) // w
},
{
    entrada: [
        [1,0,0,0,0,1],
        [0,1,0,0,1,0],
        [0,1,0,0,1,0],
        [0,0,1,1,0,0],
        [0,1,0,0,1,0],
        [0,1,0,0,1,0],
        [1,0,0,0,0,1]
    ],
    saidaEsperada: geraSaidaEsperada(33) // x
},
{
    entrada: [
        [1,0,0,0,0,1],
        [0,1,0,0,1,0],
        [0,1,0,0,1,0],
        [0,0,1,1,0,0],
        [0,0,1,1,0,0],
        [0,0,1,1,0,0],
        [0,0,1,1,0,0]
    ],
    saidaEsperada: geraSaidaEsperada(34) // y
},
{
    entrada: [
        [1,1,1,1,1,1],
        [0,0,0,0,1,0],
        [0,0,0,1,0,0],
        [0,0,1,0,0,0],
        [0,1,0,0,0,0],
        [1,0,0,0,0,0],
        [1,1,1,1,1,1]
    ],
    saidaEsperada: geraSaidaEsperada(35) // z
}
    
    
]

// Pesos: [digito][linha][coluna]
let pesos = Array.from({ length: TOTAL_SAIDAS }, () =>  //Cria um array com TOTAL_SAIDAS posições.
    Array.from({ length: ALTURA }, () => //Para cada uma das TOTAL_SAIDAS posições, criamos um novo array com ALTURA linhas.
        Array.from({ length: LARGURA }, () => Math.random() * 0.2 - 0.1) //Para cada linha (altura), criamos LARGURA valores. Cada valor é um número aleatório entre -0.1 e +0.1.
    )
);

// Vetor de viés para cada saída
let vieses = Array(TOTAL_SAIDAS).fill(0);

// Função de ativação: limita a saída entre 0 e 1
// Se soma < 0 → 0; se soma > 1 → 1; senão → soma
function transferencia(soma) {
    return soma < 0 ? 0 : soma > 1 ? 1 : soma;
}

// Cálculo da saida para uma dada entrada
function calcularSaidas(entrada) {
    return pesos.map((pesoMatriz, k) => { // para cada saída k
        let soma = 0; 
        for (let i = 0; i < ALTURA; i++) {
            for (let j = 0; j < LARGURA; j++) {
                soma += entrada[i][j] * pesoMatriz[i][j];
            }
        }
        soma += vieses[k]; // aplica o viés
        return transferencia(soma); //aplica a função de ativação
    });
}

// Ajuste de pesos e viés
function ajustarPesos(entrada, esperado, obtido) {
    for (let k = 0; k < TOTAL_SAIDAS; k++) {
        const erro = esperado[k] - obtido[k]; // Erro para a saída k
        for (let i = 0; i < ALTURA; i++) {
            for (let j = 0; j < LARGURA; j++) {
                 // Regra de aprendizado: ajusta peso com base no erro e entrada
                pesos[k][i][j] += erro * entrada[i][j];
            }
        }
        vieses[k] += erro; // Ajusta o viés
    }
}

// Treinamento
let ajustesTotais = 0;
let ajustes;

do{
    ajustes = 0;
    for (const { entrada, saidaEsperada } of treinamento){
        const saidaObtida = calcularSaidas(entrada);
        const precisaAjustar = saidaObtida.some((s, i) => 
            (s >= 0.5 ? 1 : 0) !== saidaEsperada[i]
    );
    if(precisaAjustar) {
        ajustarPesos(entrada, saidaEsperada, saidaObtida);
        ajustes++;
        ajustesTotais++;
    }
    }
}while(ajustes > 0);

console.log("Treinamento concluido com", ajustesTotais, "ajustes.");

const matrizEntrada = [
            [0,1,1,1,1,0],
            [0,1,0,0,0,1],
            [0,1,0,0,0,1],
            [0,1,1,1,1,1],
            [0,0,0,0,0,1],
            [0,0,0,0,0,1],
            [0,1,1,1,1,0],
];
const saidas = calcularSaidas(matrizEntrada); // Calcula saídas para o novo padrão
let reconhecido = saidas.indexOf(Math.max(...saidas)); // Acha o índice com maior saída

switch (saidas.indexOf(Math.max(...saidas))) {
    case 0:
        reconhecido = 0
        break;
    case 1:
        reconhecido = 1
        break;

    case 2:
        reconhecido = 2
        break;

    case 3:
        reconhecido = 3
        break;
    case 4:
        reconhecido = 4
        break;
    case 5:
        reconhecido = 5
        break;
    case 6:
        reconhecido = 6
        break;
    case 7:
        reconhecido = 7
        break;
    case 8:
        reconhecido = 8
        break;
    case 9:
        reconhecido = 9
        break;
    case 10:
        reconhecido = "a"
        break;
    case 11:
        reconhecido = "b"
        break;
    case 12:
        reconhecido = "c"
        break;
    case 13:
        reconhecido = "D";
        break;
    case 14:
        reconhecido = "E";
        break;
    case 15:
        reconhecido = "F";
        break;
    case 16:
        reconhecido = "G";
        break;
    case 17:
        reconhecido = "H";
        break;
    case 18:
        reconhecido = "I";
        break;
    case 19:
        reconhecido = "J";
        break;
    case 20:
        reconhecido = "K";
        break;
    case 21:
        reconhecido = "L";
        break;
    case 22:
        reconhecido = "M";
        break;
    case 23:
        reconhecido = "N";
        break;
    case 24:
        reconhecido = "O";
        break;
    case 25:
        reconhecido = "P";
        break;
    case 26:
        reconhecido = "Q";
        break;
    case 27:
        reconhecido = "R";
        break;
    case 28:
        reconhecido = "S";
        break;
    case 29:
        reconhecido = "T";
        break;
    case 30:
        reconhecido = "U";
        break;
    case 31:
        reconhecido = "V";
        break;
    case 32:
        reconhecido = "W";
        break;
    case 33:
        reconhecido = "X";
        break;
    case 34:
        reconhecido = "Y";
        break;
    case 35:
        reconhecido = "Z";
        break;
}

console.log("Numero reconhecido:", reconhecido);
