console.log("main.js");
const divNome = document.querySelector('div.nome');
const divAlunos = document.querySelector('div.alunos');
const divAprovacao = document.querySelector('div.aprovacao');
const divTotal = document.querySelector('div.total');

const Bubble = {
  nomes:[],
  alunos:[],
  aprovacao:[],
  total:[],
  atualizaView: function (){
    divNome.textContent = this.nomes;
    divAlunos.textContent = this.alunos;
    divAprovacao.textContent = this.aprovacao;
    divTotal.textContent = this.total;
  },
  adiciona_nome: function (nome) {
    let n = nome;
    this.nomes.push(n);
    this.atualizaView();
  },
  adiciona_alunos: function (alunos) {
    let n = parseInt(alunos);
    if (!isNaN(n) && n>=0) {
      this.alunos.push(n);
    }
    this.atualizaView();
  },
  adiciona_aprovacao: function (aprovacao) {
    let n = parseInt(aprovacao);
    if (!isNaN(n) && n>=0) {
      this.aprovacao.push(n);
    }
    this.atualizaView();
  },
  adiciona_total: function (total) {
    let n = parseInt(total);
    if (!isNaN(n) && n>=0) {
      this.total.push(n);
    }
    this.atualizaView();
  }
};

const form = document.querySelector('form');
form.addEventListener('submit', function (evento) {
  Bubble.adiciona_nome(this.nome.value);
  Bubble.adiciona_alunos(this.alunos.value);
  Bubble.adiciona_aprovacao(this.aprovacao.value);
  Bubble.adiciona_total(this.total.value);
  evento.preventDefault();
});







//
// adiciona: function (nota) {
//   let n = parseFloat(nota);
//   if (!isNaN(n) && n >= 0 && n <= 10) {
//     this.notas.push(n);
//     this.notas.sort(function (a, b) {
//       return a - b
//     });
//     this.atualizaView();
//   }
// }
// const form = document.querySelector('form');
// form.addEventListener('submit', function (evento) {
//   Notas.adiciona(this.nota.value);
//   evento.preventDefault();
// });
