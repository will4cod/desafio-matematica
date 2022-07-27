// importações
const prompt = require('prompt');
const emoji = require('console-emoji');

// variaveis

let valorMin = 1;
let valorMax = 10;
let quantidadeCalculos = 5;

prompt.start();

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




function Desafio(quantidade) {
    let grupo1 = gerarGrupoAleatorio(quantidade);
    let grupo2 =  gerarGrupoAleatorio(quantidade);
    let respostasCorretas = []

    const schema = {
        properties: {
      
        }
      }
      

    // gera as perguntas  
    for(let i = 0; i < quantidade; i++){
        respostasCorretas.push(grupo1[i] + grupo2[i]);

        schema.properties[i] = {message: `Resposta`
        , required: true
        , ask: function() {
          console.log(`${grupo1[i]} + ${grupo2[i]} ?`)  
          return true 
        }  
      }
    }

    // lança as perguntas no prompt 
    prompt.get(schema, function(err, result){
        if(err){
            return onErr(err);
        }
        
        emoji(' \n :star: Resultado :star: ');

        // faz a comparação da resposta do usuario
        let correcao = respostasCorretas.map( function(element, index) {
            // return element == result[index] ? 'OK' : 'X';
            return element == result[index] ? emoji(`Questão ${index+1} `, 'ok') : emoji(`Questão ${index+1} `, 'err');
        })
        
        
        //console.log(correcao);

        return result
    })
}
//console.log(Desafio(quantidadeCalculos))

Desafio(quantidadeCalculos)


function onErr(err) {
    console.log(err);
    return 1;
}