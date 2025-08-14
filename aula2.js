let e1c1 = 0, e2c1 = 0, re1 = 0;
let e1c2 = 1, e2c2 = 1, re2 = 1;

let pesos = [-1, -1];

let c = 1;

let ajustes = 0, repeticoes = 0, quantidadeAjustesNecessarios = 0;

function soma(valores){
    resultado = 0;
    valores.forEach(valor => {
        resultado += valor.entrada * valor.peso
    });

    return resultado;
}

function transferencia(soma){
    if(soma <= 0){
        return 0;
    }
    return 1;
}

function ajuste(valores)
{
    i = 0;
    valores.forEach(valor => {
        valores[i].peso = valor.peso + c * (valor.resultadoDesejado - valor.resultadoObtido) * valor.entrada;
        i++;
    })

    return valores;
}

//abstração feita com uso de IA como mostrado em aula para ser mais reduzido e com srp, mas ficou um codigo diferente do professor.
function minhaFuncaoAbstrata(entradas, pesos, esperado) {
    function calcularObtido() {
        return transferencia(soma(entradas.map((e, i) => ({ entrada: e, peso: pesos[i] }))));
    }

    function precisaAjustar(obtido) {
        return obtido !== esperado;
    }

    function ajustarPesos(obtido) {
        return ajuste(entradas.map((e, i) => ({
            entrada: e,
            peso: pesos[i],
            resultadoDesejado: esperado,
            resultadoObtido: obtido
        }))).map(r => r.peso);
    }

    const obtido = calcularObtido();
    if (!precisaAjustar(obtido)) {
        return { pesos, houveAjuste: false };
    }

    pesos = ajustarPesos(obtido);
    return { pesos, houveAjuste: true };
}

do {
    ajustes = 0;

    //caso1

    resultado = minhaFuncaoAbstrata([e1c1, e2c1], pesos, re1);
    pesos = resultado.pesos;

    if (resultado.houveAjuste){
        ajustes++;
        quantidadeAjustesNecessarios++;
    }

    //caso2

    resultado = minhaFuncaoAbstrata([e1c2, e2c2], pesos, re2);
    pesos = resultado.pesos;

    if (resultado.houveAjuste){
        ajustes++;
        quantidadeAjustesNecessarios++;
    }

}while(ajustes != 0);


console.log("Os pesos apos o treinamneto da rede é: " + pesos[0] + " e " + pesos[1])
console.log("Quantidade de ajustes necessários: " + quantidadeAjustesNecessarios)