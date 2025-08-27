const QTD = 3;
const LINHAS = 3;
const COLUNAS = 3;

let matriz = [];

for (let qtd = 0; qtd < QTD; qtd++) {
    let arrayQtd = []
    for(let linha = 0; linha < LINHAS; linha++) {
        let arrayLinha = [];
        for(let coluna = 0; coluna < COLUNAS; coluna++){
            arrayLinha.push(0)
        }
        arrayQtd.push(arrayLinha); 
    }
    matriz.push(arrayQtd)
}



console.log(matriz);
