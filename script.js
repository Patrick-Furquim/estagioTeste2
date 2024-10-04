//ATIVIDADE 01
function verificarFibonacci(numero){
    var sequenciaAtual = 0;
    var numeroAnterior2 = 0;
    var numeroAnterior = 1;
    while(numero > sequenciaAtual && numero !== sequenciaAtual)
    {
        numeroAnterior2 = numeroAnterior;
        numeroAnterior = sequenciaAtual;
        sequenciaAtual = numeroAnterior + numeroAnterior2;
    }
    if(numero === sequenciaAtual)
    {
        console.log("O número "+numero+" pertence a sequencia.");
    }
    else
    {
        console.log("O número "+numero+" nao pertence");
    }
}

function botaoAtividade01() {  
    let numero = prompt("Digite um numero:");
    verificarFibonacci(Number(numero));
}

//ATIVIDADE 02
function verificarA(string) {
    let stringMinuscula = string.toLowerCase();
    let quantidadeA = (stringMinuscula.match(/a/g) || []).length;

    if (quantidadeA > 0) {
        console.log(`A letra 'a' aparece ${quantidadeA} vezes.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

function botaoAtividade02() {  
    let texto = prompt("Digite uma string:");
    verificarA(texto);
}

//ATIVIDADE 03
function imprimirSoma(){
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;
    while(K < INDICE){
        K = K + 1;
        SOMA = SOMA + K; 
    }
    console.log("O valor será: " + SOMA);
}

//ATIVIDADE 04
function resolucaoAtividade04(){
    let resposta = "4) Descubra a lógica e complete o próximo elemento: \n" +
"a) 1, 3, 5, 7, >> 9 << \n \n" +
"b) 2, 4, 8, 16, 32, 64, >> 128 <<\n \n" +
"c) 0, 1, 4, 9, 16, 25, 36,  >> 49 << \n \n" +
"d) 4, 16, 36, 64, >> 100 << \n \n" +
"e) 1, 1, 2, 3, 5, 8, >> 13 << \n \n" +
"f) 2,10, 12, 16, 17, 18, 19, >> 20 <<";
console.log(resposta);
}

//ATIVIDADE 05
function resolucaoAtividade05(){
    let resposta = "Para descobrir qual interruptor controla cada lâmpada com apenas duas idas à sala das lâmpadas, primeiro ligue um dos interruptores e deixe-o ligado por alguns minutos para que a lâmpada correspondente aqueça em seguida desligue esse interruptor e ligue o segundo depois vá até a sala das lâmpadas e observe o estado de cada uma a lâmpada que estiver acesa será controlada pelo segundo interruptor que você acabou de ligar a lâmpada que estiver apagada mas quente é controlada pelo primeiro interruptor pois ficou ligada tempo suficiente para aquecer e a lâmpada que estiver apagada e fria será controlada pelo terceiro interruptor que permaneceu desligado o tempo todo assim você consegue identificar qual interruptor controla cada lâmpada de maneira simples e eficiente"
    console.log(resposta);
}
