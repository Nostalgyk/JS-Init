// ESTRUTURAS CONDICIONAIS
/*
  São instruções para realizar determinadas tarefas a partir de uma condição, seja decisão ou repetição.
  Ex.: Um jogo precisa mudar o placar toda vez que o jogador marca pontuação;


//ESTRUTURAS DE DECISÃO

  Podemos usar as palavras reservadas "if" para estabelecer uma condição:
  Ex.: 


var jogador1 = 1;
var jogador2 = 0;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1
  ? console.log('Os jogadores são válidos')
  : console.log('Jogadores inválidos');

//usando if
if (jogador1 > 0 && jogador2 == 0) {
  console.log('Jogador 1 marcou ponto!');
  placar = jogador1 > jogador2;
}

//usando else if
else if (jogador2 > 0 && jogador2 == 0) {
  console.log('Jogador 2 marcou ponto!');
  placar = jogador2 > jogador1;
}

//usando else
else {
  console.log('Ninguem marcou ponto!');
}

switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log('Jogador 1 ganhou');
    break;

  case (placar = jogador2 > jogador1):
    console.log('Jogador 2 ganhou');
    break;

  default:
    console.log('Ninguém ganhou');
}
*/

//Laços de repetição
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {
  propriedade1: 'valor1',
  propriedade2: 'valor2',
  propriedade3: 'valor3'
};

for (let indice = 0; indece < array.length; indice++) {
  console.log(indice);
}

//for /in
/*funciona como uma repetição de uma propriedade:
for ([indice] in [objeto ou array]){
  declaracao
}


for (let i in array) {
  console.log(i);
}

for (i in object) {
  console.log(i);
}

//for /of
//Funciona como uma repetição a partir de um valor
for ([indice] of [array]){
  declaracao
}


for (i of array) {
  console.log(i);
}

O for/of não funciona com objetos pois as propriedades variam, diferentes do índice em um array que sempre serão numeros inteiros

Mas e se eu quiser pegar o valor mesmo assim?
for (i of object.propriedade){
  console.log(i);
}
for (i of object.propriedade1) console.log(i);
*/

var a = 0;
while (a < 10) {
  a++;
  console.log(a);
}

do {
  a++;
  console.log(a);
} while (a < 10);
