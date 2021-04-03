const perguntas1 = {
    pergunta: 'Quando Harry Potter nasceu?',
    alternativaA: '1º de julho, 1980', 
    alternativaB: '31 de julho, 1980',
    alternativaC: '1º de agosto, 1980',
    alternativaD: '31 de agosto, 1980',
    resposta: 'a'
};
const perguntas2 = {
    pergunta: 'Quem mata Belatriz Lestrange?',
    alternativaA: 'Gina Weasley', 
    alternativaB: 'Hermione Granger',
    alternativaC: 'Ninfadora Tonks',
    alternativaD: 'Molly Weasley',
    resposta: 'd'
};
const perguntas3 = {
    pergunta: 'Na cena "Os sete Harry Potter" quem diz onde o verdadeiro Harry está a Voldemort?',
    alternativaA: 'Severo Snape', 
    alternativaB: 'Mundungo Fletcher',
    alternativaC: 'Stanislau Shunpike',
    alternativaD: 'Ninguém, o próprio Voldemort o vê',
    resposta: 'c'
};
const perguntas4 = {
    pergunta: 'Quantos filhos Harry tem?',
    alternativaA: '1 filho', 
    alternativaB: '2 filhos',
    alternativaC: '3 filhos',
    alternativaD: '4 filhos',
    resposta: 'c'
};
const perguntas5 = {
    pergunta: 'Quais são os primeiros nomes dos filhos de Harry?',
    alternativaA: 'Tiago, Severo, Gina', 
    alternativaB: 'Alvo, Tiago, Luna',
    alternativaC: 'James, Tiago, Lillían',
    alternativaD: 'Tiago, Alvo, Lillían',
    resposta: 'd'
};
const perguntas6 = {
    pergunta: 'Com quem Belatriz Lestrange é presa junto?',
    alternativaA: 'Severo Snape', 
    alternativaB: 'Pedro Pettigrew',
    alternativaC: 'Régulo Black',
    alternativaD: 'Bartolomeu Crouch Junior',
    resposta: 'd'
};
const perguntas7 = {
    pergunta: 'Quantas Horcrux existem?',
    alternativaA: '4', 
    alternativaB: '7',
    alternativaC: '12',
    alternativaD: '7',
    resposta: 'b'
};
const perguntas8 = {
    pergunta: 'Quem matou Dumbledore',
    alternativaA: 'Severo Snape', 
    alternativaB: 'Hermiona',
    alternativaC: 'Pele',
    alternativaD: 'Herry Potter',
    resposta: 'a'
};
const perguntas9 = {
    pergunta: 'Que animal de estimação era de Voldemort e qual o seu nome?',
    alternativaA: 'Gabirru, Mickey', 
    alternativaB: 'Morcego, Batman',
    alternativaC: 'Griffo, James',
    alternativaD: 'Cobra, Nagini',
    resposta: 'd'
};
const perguntas10 = {
    pergunta: 'Quem são os melhores amigos de Herry Potter',
    alternativaA: 'Hermiobe e Rony', 
    alternativaB: 'Kennedy e Draco',
    alternativaC: 'Neymar e Dobby',
    alternativaD: 'Sirius e Remo',
    resposta: 'a'
};

var questao = [perguntas1, perguntas2, perguntas3, perguntas4, perguntas5, perguntas6, perguntas7, perguntas8, perguntas9, perguntas10, ];

var pontos = 0;
var mostrarPontos = document.getElementById('numeroPontos');

var contador = 0;

var respostaDoUsuario = "";
var respostaCerta = "";

var botaoComecar = document.getElementById('comecar');
var texto = document.getElementById('gosta');
var alterA = document.getElementById('a');
var alterB = document.getElementById('b');
var alterC = document.getElementById('c');
var alterD = document.getElementById('d'); 

var resultado = document.getElementById('resultado'); 

function comecar() {
    alterA.style.opacity = '1';
    alterB.style.opacity = '1';
    alterC.style.opacity = '1';
    alterD.style.opacity = '1';
    botaoComecar.style.opacity = '0';

    botaoComecar.style.pointerEvents = 'none';
    alterA.style.pointerEvents = 'auto';
    alterB.style.pointerEvents = 'auto';
    alterC.style.pointerEvents = 'auto';
    alterD.style.pointerEvents = 'auto';

    texto.innerHTML = questao[contador].pergunta;
    alterA.innerHTML = questao[contador].alternativaA;
    alterB.innerHTML = questao[contador].alternativaB;
    alterC.innerHTML = questao[contador].alternativaC;
    alterD.innerHTML = questao[contador].alternativaD;
    mostrarPontos.innerHTML = (pontos);

    respostaCerta = questao[contador].resposta;

}

function verificar() {
    if (respostaCerta == respostaDoUsuario){
        pontos += 1;
        trocar();
    } else {
        trocar();
    }
}
function trocar() {
    if(contador < 9) {
        contador += 1;
        texto.innerHTML = questao[contador].pergunta;
        alterA.innerHTML = questao[contador].alternativaA;
        alterB.innerHTML = questao[contador].alternativaB;
        alterC.innerHTML = questao[contador].alternativaC;
        alterD.innerHTML = questao[contador].alternativaD;
        mostrarPontos.innerHTML = (pontos);
        respostaCerta = questao[contador].resposta;        
    }else if(contador > 9){
        final();
    } else {
        final();
    }

}


function apertaA() {
    respostaDoUsuario = "a";
    verificar();
    console.log(contador);
}
function apertaB() {
    respostaDoUsuario = "b";
    verificar();
    console.log(contador);
}
function apertaC() {
    respostaDoUsuario = "c";
    verificar();
    console.log(contador);
}
function apertaD() {
    respostaDoUsuario = "d";
    verificar();
    console.log(contador);
}
console.log(contador);


function final() {
    alterA.style.opacity = '0';
    alterB.style.opacity = '0';
    alterC.style.opacity = '0';
    alterD.style.opacity = '0';


    alterA.style.pointerEvents = 'none';
    alterB.style.pointerEvents = 'none';
    alterC.style.pointerEvents = 'none';
    alterD.style.pointerEvents = 'none';

    resultado.style.opacity = '1';
    resultado.style.pointerEvents = 'auto';

    texto.innerHTML = 'Obrigado por participar do quiz'
}

function resul() {
    alert('Ainda irei terminar')
}
