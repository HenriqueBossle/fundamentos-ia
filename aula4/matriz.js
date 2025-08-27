let tarefas = [
    ['Estudar', 3],
    ['Ler livro', 0.3],
    ['Limpar casa', 3],
    ['Trabalhar', 8],
    ['Dormir', 6.5]
]
let somaHorasTarefas = 0;
const TOTAL_HORAS_DIA = 24;

tarefas.forEach(linha => {
    console.log(linha);
    somaHorasTarefas += linha[1];
})

let tempoRestante = TOTAL_HORAS_DIA - somaHorasTarefas;
console.log("Suas tarefas consumiram: " + somaHorasTarefas + " horas")
console.log("Você tem: " + tempoRestante.toFixed(1) + " horas para aproveitar")
