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

function soma (entrada1, peso1,) {
    return (entrada1 * peso1);
}

pesoNeuronio1 = 1;
pesoNeuronio2 = -2;

entrada1 = 0;

resultadoSoma = soma(entrada1, pesoNeuronio1,);
saida1 = limiteRapido(resultadoSoma);
saida2 = rampa(resultadoSoma);
saida3 = sigmoide(resultadoSoma);

console.log("LR - Primeiro Neuronio - " + saida1);
console.log("FR - Primeiro Neuronio - " + saida2);
console.log("SG - Primeiro Neuronio - " + saida3);

entradaLimiteRapido = saida1
entradaFuncaoRampa = saida2;
entradaSigmoide = saida3;

resultadoSomaLimiteRapido = soma(entradaLimiteRapido, pesoNeuronio2);
resultadoSomaFuncaoRampa = soma(entradaFuncaoRampa, pesoNeuronio2);
resultadoSomaSigmoide = soma(entradaSigmoide, pesoNeuronio2);

resultadoLimiteRapido = limiteRapido(resultadoSomaLimiteRapido);
resultadoFuncaoRampa = rampa(resultadoSomaFuncaoRampa);
resultadoSigmoide = sigmoide(resultadoSomaSigmoide);

console.log("\n");

console.log("LR - Segundo Neuronio - " + resultadoLimiteRapido);
console.log("FR - Segundo Neuronio - " + resultadoFuncaoRampa);
console.log("SG - Segundo Neuronio - " + resultadoSigmoide);



