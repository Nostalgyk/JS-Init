const alunos = [
  {
    nome: 'Gustavo',
    nota: 8,
    turma: '3B'
  },
  {
    nome: 'Pedro',
    nota: 9,
    turma: '3B'
  },
  {
    nome: 'Maia',
    nota: 10,
    turma: '2A'
  },
  {
    nome: 'Heitor',
    nota: 3,
    turma: '2A'
  }
];

function alunosAprovados(arr, media) {
  let aprovados = [];

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i]; //object destructing

    if (nota >= media) {
      aprovados.push(nome);
    }
  }

  return aprovados;
}

console.log(alunosAprovados(alunos, 5));
