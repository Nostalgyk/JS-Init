function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: 'Gustavo',
  idade: 21
};

const pessoa2 = {
  nome: 'Pedro',
  idade: 23
};

const animal = {
  nome: 'Spike',
  idade: 3,
  raca: 'Terrier'
};

console.log(calculaIdade.call(animal, 5));

console.log(calculaIdade.apply(animal, [4]));
