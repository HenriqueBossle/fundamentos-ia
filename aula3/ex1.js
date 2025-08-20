const INFORMATICA = 0;
const BIOLOGIA = 1;

const enumLabels = {
    [INFORMATICA]: "Informatica",
    [BIOLOGIA]: "Biologia"
};

let treinamento = [
    {
        entrada0: 1,
        entrada1: 0,
        entrada2: 0,
        resultadoEsperado: INFORMATICA
    },
    {
        entrada0: 1,
        entrada1: 0,
        entrada2: 1,
        resultadoEsperado: INFORMATICA
    },
    {
        entrada0: 1,
        entrada1: 1,
        entrada2: 0,
        resultadoEsperado: BIOLOGIA
    },
    {
        entrada0: 1,
        entrada1: 1,
        entrada2: 1,
        resultadoEsperado: BIOLOGIA
    },
]

let w0 = 0, w1 = 0, w2 = 0

let sum, resultadoObtido, ajustes, ajustesTotais = 0

function soma(entrada0, entrada1, entrada2) {
    return (entrada0 * w0) + (entrada1 * w1 ) + (entrada2 * w2);
}


function transferencia (resultadoSoma) {
    if (resultadoSoma < 0) {
        return 0
    }else if (resultadoSoma >= 0 && resultadoSoma <= 1) {
        return resultadoSoma;
    }
    return 1;
}

function ajuste(entrada0, entrada1, entrada2, resultadoDesejado, resultadoObtido) {
    w0 = w0 + 1 * (resultadoDesejado - resultadoObtido) * entrada0
    w1 = w1 + 1 * (resultadoDesejado - resultadoObtido) * entrada1
    w2 = w2 + 1 * (resultadoDesejado - resultadoObtido) * entrada2
}

do {
    ajustes = 0;

    treinamento.forEach(valor => {
        sum = soma(valor.entrada0, valor.entrada1, valor.entrada2)
        resultadoObtido = transferencia(sum)
        if (resultadoObtido != valor.resultadoEsperado) {
            ajuste(valor.entrada0, valor.entrada1, valor.entrada2, valor.resultadoEsperado, resultadoObtido)
            ajustes++;
            ajustesTotais++;
        }
    });

    //console.log('passou')

} while (ajustes != 0)


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

let entradaUsuario = await lerEntrada("Informe as entradas: ");

entradaUsuario = entradaUsuario.split(",");

console.log("Os pesos finais ficaram w0: " + w0 + " w1: " + w1 + " e w2: " + w2)
console.log("A quantidade de ajustes foi: " + ajustesTotais);

sum = soma(entradaUsuario[0], entradaUsuario[1], entradaUsuario[2])
resultadoObtido = transferencia(sum)
console.log("A resposta é: " + enumLabels[resultadoObtido]);

console.log(treinamento);