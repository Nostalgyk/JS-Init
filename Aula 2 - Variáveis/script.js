// Tipos primitivos

// Boolean
var VouF = false;
console.loga(typeof VouF);

// Number
var numeroQualquer = 1;
console.log(typeof numeroQualquer);

// String
var nome = 'Trovão';
console.log(nome);

// Function

var funcao = function () {};
console.log(typeof funcao);

// Declaração de variáveis
/*

var - Escopo GLOBAL e LOCAL, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

- Sample - 

var variavel = 'Trovão';
variavel = 'Thunder';
console.log(variavel);

let - escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

- Sample -

let variavel2 = 'Trovão';
variavel2 = 'Thunder';
console.log(variavel2);

const - escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado.

const constante = 'Trovão';
constante = 'Thunder';
console.log(constante) ! ERRO, VARIÁVEL DO TIPO CONSTANTE NÃO PODE SER REATRIBUIDA!

*/

// - - - - - - - //

// - - - - - - - //

// - - - - - - - //

// Escopo

/*

O escopo em Javascript define a limitação e visibilidade de um bloco de código.

Escopo Global - quando a variável é declarad de fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

Escopo Local - quando a variável é declarada dentro de um bloco, sua visibi8lidade pode ficar disponível ou não.

- Sample -

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoGlobal(){
  let escopoLocalInterno = 'local';
  console.log(escopoLocalInterno);
}

console.log(escopoLocalInterno); !ERRO PORQUE NÃO EXISTE GLOBALMENTE, PRECISA SER INVOCADA PRIMEIRO 

escopoLocal();

*/

// - - - - - - - //

// - - - - - - - //

// - - - - - - - //

// Regras de Uso de Variáveis

/*

- Iniciar com letras, underscore _ ou cifrão $; Nunca iniciar com números
Ex: var 1nome - ERRADO
    var nome || var _nome - CERTO

  
- Não usar espaõs (use o camelCase ou _);
Ex: var nome completo - ERRADO
    var nomeCompleto || var nome_completo - CERTO

- Não usar palavras reservadas;
Ex: var function - ERRADO

- Declarar variáveis no topo do bloco de código

*/

// - - - - - - - //

// - - - - - - - //

// - - - - - - - //

/* Atribuição

O sinal de igualdade "=" em JavaScript, siginifca atribuição.

Ex: 
    como declarar: var nome = "meu nome";
    como ler: variável nome recebe o valor 'meu nome';

*/

/* Comparação

Para fazermos uma comparação de valores em JavaScript usamos "=="

Ex: como declarar: "0" == 0;
    como ler: "0" tem o valor igual a 0?

    Na comparação retorna sempre verdadeiro ou falso

*/

/* Comparação idêntica

Para fazermos uma comparação de valores e tipos em JavaScript usamos "===".

Ex: como declarar: "0" === 0?
    como ler: "0" tem o valor e o tipo idêntico a 0?

    Nesse caso retorna true
*/

// - - - - - - - //

// - - - - - - - //

// - - - - - - - //

// Operadores Aritméticos, relacionais e lógicos

/*

ARITMÉTICOS

- Adição

var adicao = 1 + 1;
console.log(adicao);

- Subtração

var subtracao = 1 -1;
console.log(subtracao);

- Multiplicação

var multiplicacao = 2 * 3;
console.log(multiplicacao);

- Divisão real

var divisaoReal = 6 / 2;
console.log(divisaoReal);

- Divisão inteira

var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

- Potenciação

var potenciacao = 2 ** 10;
console.log(potenciacao);

*/

/*

Relacionais

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que

var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

*/

// Lógicos
/*

São os tipos de operadores que consultam valores lógicos:

- && - "e" - considera que todos os valores sejam "true";
- || - "ou" - considera que qualquer valor seja "true";
- ! - "não" - inverte o valor de true para false ou vice-versa.

var e = true && false;
console.log(e); - RETORNA FALSE

var ou = true || false; RETORNA TRUE

var nao = !true;
console.log(nao); - RETORNA FALSE
*/
