// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média

const aluno01 = 'Mayk'; 
const notaAluno1 = 1.8;

const aluno02 = 'Diego';
const notaAluno2 = 10;

const aluno03 = 'Fulano';
const notaaluno03 = 2;

const media = (notaAluno1 + notaAluno2 + notaaluno03) / 3;

// Se a média for maior que 5, parabenizar a turma

if (media > 5){
    console.log(`A note foi de ${media}. Parabéns!`)
} else {
    console.log('A média é menor que 5')
}

