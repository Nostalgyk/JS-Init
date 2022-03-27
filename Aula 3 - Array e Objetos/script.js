// Vetores ou Arrays

let array = ['string', 1, true];
console.log(array);

// pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];

//Manipulando ArrayS
/*
Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.

- forEach() - itera um array;
- push()    - adiciona um item no final do array;
- pop()     - remove um item no final do array;
- shift()   - remove um item no início do array;
- unshift() - adiciona um item no início do array;
- indexOf() - retorna o índice de um valor;
- splice()  - remove ou substitui um item pelo índice;
- slice()   - retorna uma parte de um array existente;
 

--forEach()
array.forEach(function(item, index){console.log(item, indexs)})

--push()
array.push('novo item');
console.log(array);

--pop();
array.pop();
console.log(array);

--shift();
array.shift();
console.log(array);

--unshift();
array.unshift('novo item');
console.log(array);

--indexOf();
console.log(array.indexOf(true))

--splice();
array.splice(0, 3);
console.log(array);

--slice();
let novoArray = array.slice(0, 3);
console.log(novoArray)


// Objetos
Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves "{}".

Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. Pode ser declarada assim:

var xicara = {
  cor:      'azul',
  tamanho:  'p',
  funcao:   tomarCafe()
}

/Manipulando objetos

As propriedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.

Ex.: var xicara = {cor: 'azul', tamanho: 'p', funcao: tomarCafe()}
     var cor = xicara.cor;
     var tamanho = xicara.tamanho;
     var funcao = tomarCafe();
     

let object = {
  string: 'string',
  number: 1,
  boolean: true,
  array: ['array'],
  objectInterno: { objectInterno: 'objeto interno' }
};

// AQUI É A DESESTRUTURAÇÃO, PASSANDO O VALOR DAS PROPRIEDADES PARA VARIÁVEIS 'EXTERNAS'

console.log(object.string);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

// {} RECEBE TODO O OBJETO
var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);
    
*/
