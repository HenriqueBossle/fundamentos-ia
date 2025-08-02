function limiteRapido(soma) {
    if (soma <= 0) {
        return -1;
    }
    return 1;
}

function rampa(soma) {
    if (soma < 0) {
        return 0;
    }
    if (soma >= 0 && soma <= 1) {
        return soma;
    }
    if (soma > 1) {
        return 1;
    }
}

function sigmoide(soma) {
    if (soma >= 0) {
        return 1-(1/(1+soma));
    }
    return -1+(1/(1-soma));
}

entrada1 = -1;
entrada2 = 1;
entrada3 = 1;

peso1 = 0;
peso2 = 1;
peso3 = 2;

function soma (entrada1, entrada2, entrada3, peso1, peso2, peso3) {
    return (entrada1 * peso1) + (entrada2 * peso2) + (entrada3 * peso3);
}

resultadoSoma = soma(entrada1, entrada2, entrada3, peso1, peso2, peso3);
saida1 = limiteRapido(resultadoSoma);
saida2 = rampa(resultadoSoma);
saida3 = sigmoide(resultadoSoma);

console.log("LR - Primeiro Neuronio - " + saida1);
console.log("FR - Primeiro Neuronio - " + saida2);
console.log("SG - Primeiro Neuronio - " + saida3);