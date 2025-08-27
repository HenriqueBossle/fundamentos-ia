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
        saidaEsperada: [
            1,//0
            0,//1
            0,//2
            0,//3
            0,//4
            0,//5
            0,//6
            0,//7
            0,//8
            0,//9
        ]
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
        saidaEsperada: [
            0,//0
            1,//1
            0,//2
            0,//3
            0,//4
            0,//5
            0,//6
            0,//7
            0,//8
            0,//9
        ]
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
        saidaEsperada: [
            0,//0
            0,//1
            1,//2
            0,//3
            0,//4
            0,//5
            0,//6
            0,//7
            0,//8
            0,//9
        ]
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
        saidaEsperada: [
            0,//0
            0,//1
            0,//2
            1,//3
            0,//4
            0,//5
            0,//6
            0,//7
            0,//8
            0,//9
        ]
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
        saidaEsperada: [
            0,//0
            0,//1
            0,//2
            0,//3
            1,//4
            0,//5
            0,//6
            0,//7
            0,//8
            0,//9
        ]
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
        saidaEsperada: [
            0,//0
            0,//1
            0,//2
            0,//3
            0,//4
            1,//5
            0,//6
            0,//7
            0,//8
            0,//9
        ]
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
        saidaEsperada: [
            0,//0
            0,//1
            0,//2
            0,//3
            0,//4
            0,//5
            1,//6
            0,//7
            0,//8
            0,//9
        ]
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
        saidaEsperada: [
            0,//0
            0,//1
            0,//2
            0,//3
            0,//4
            0,//5
            0,//6
            1,//7
            0,//8
            0,//9
        ]
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
        saidaEsperada: [
            0,//0
            0,//1
            0,//2
            0,//3
            0,//4
            0,//5
            0,//6
            0,//7
            1,//8
            0,//9
        ]
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
        saidaEsperada: [
            0,//0
            0,//1
            0,//2
            0,//3
            0,//4
            0,//5
            0,//6
            0,//7
            0,//8
            1,//9
        ]
    }
]

const ALTURA = 7;
const LARGURA = 6;
const TOTAL_SAIDAS = 10;

// Pesos: [digito][linha][coluna]
let pesos = Array.from({ length: TOTAL_SAIDAS }, () =>
    Array.from({ length: ALTURA }, () =>
        Array.from({ length: LARGURA }, () => Math.random() * 0.2 - 0.1)
    )
);

// Viés por saída
let vieses = Array(TOTAL_SAIDAS).fill(0);

function transferencia(soma) {
    return soma < 0 ? 0 : soma > 1 ? 1 : soma;
}

function calcularSaidas(entrada) {
    return pesos.map((pesoMatriz, k) => {
        let soma = 0;
        for (let i = 0; i < ALTURA; i++) {
            for (let j = 0; j < LARGURA; j++) {
                soma += entrada[i][j] * pesoMatriz[i][j];
            }
        }
        soma += vieses[k]; // aplica o viés
        return transferencia(soma);
    });
}

// Ajuste de pesos e viés
function ajustarPesos(entrada, esperado, obtido) {
    for (let k = 0; k < TOTAL_SAIDAS; k++) {
        const erro = esperado[k] - obtido[k];
        for (let i = 0; i < ALTURA; i++) {
            for (let j = 0; j < LARGURA; j++) {
                pesos[k][i][j] += erro * entrada[i][j];
            }
        }
        vieses[k] += erro;
    }
}

// Treinamento
let ajustesTotais = 0;
let ajustes;

do {
    ajustes = 0;

    treinamento.forEach(valor => {
        sum = soma(valor.entrada1, valor.entrada2)
        resultadoObtido = transferencia(sum)
        if (resultadoObtido != valor.resultadoEsperado) {
            ajuste(valor.entrada1, valor.entrada2, valor.resultadoEsperado, resultadoObtido)
            ajustes++;
            ajustesTotais++;
        }
    });

} while (ajustes != 0)