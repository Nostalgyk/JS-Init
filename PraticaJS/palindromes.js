//Solução 1

function verificaPalindromo(string) {
  if (!string) return 'String inexistente'; //se a string não existe

  return string.split('').reverse().join('') === string;
}

let myVar;

console.log(verificaPalindromo(myVar));

//Solução 2
// o m o
// 0 1 2
// a b b a
// 0 1 2 3

function verificaPalindromo2(string) {
  if (!string) return 'String inexistente';

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(verificaPalindromo2('otstto'));
