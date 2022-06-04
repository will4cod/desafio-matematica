// variaveis

let valorMin = 1;
let valorMax = 10;
let quantidadeCalculos = 10;

function valorRamdom(min = 1, max = 10){
    return Math.floor(Math.random() * max + 1)
}
// console.log(valorRamdom(max = valorMax));

// Gerar um array com 10 numeros aleatorios
function gerarGrupoAleatorio(quantidade){
    let array = []

    for(let i = 0; i < quantidade; i++){
        array.push(valorRamdom());
    }

    return array
}
// console.log(gerarGrupoAleatorio(quantidade = quantidadeCalculos));

function montarDesafio(quantidadeCalculos) {
    let grupo1 = gerarGrupoAleatorio(quantidade = quantidadeCalculos);
    let grupo2 =  gerarGrupoAleatorio(quantidade = quantidadeCalculos);
    let resultadoSomas = []

    for(let i = 0; i < quantidadeCalculos; i++){
        resultadoSomas.push(grupo1[i] + grupo2[i]);
    }

    // teste     
    // for(let i = 0; i < quantidadeCalculos; i++){
    //    console.log(`${grupo1[i]} + ${grupo2[i]} = ${resultadoSomas[i]}`)
    // }

    return resultadoSomas
}
// console.log(montarDesafio(quantidade = quantidadeCalculos))
