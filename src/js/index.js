/*
 Objetivo 1 - quando o usaário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário cliclar em cima dele

        Passo 2 - identificar o clique no botão

        Passo 3 - adicionar a classe ativo nos projetos     escondidos

     Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão esconder ele
*/

// Objetivo 1 - quando o usaário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário cliclar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
   MostrarMaisProjetos();
   EsconderBotao();
});

function EsconderBotao() {
   botaoMostrarProjetos.classList.add("remover");
}

function MostrarMaisProjetos() {
   projetosInativos.forEach(projetoInativo => {
      projetoInativo.classList.add('ativo');
   });
}
