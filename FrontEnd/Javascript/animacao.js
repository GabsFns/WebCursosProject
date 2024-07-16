var botoesMudarCor = document.querySelectorAll('.BttMudarCor');

// Adiciona o evento de clique a cada botão
botoesMudarCor.forEach(function(botao) {
    botao.addEventListener('click', function() {
        document.body.classList.toggle('BackEscuro');
        
        var elementoLogo = document.querySelectorAll('.LogoWhite');
        elementoLogo.forEach(function(elemento) {
            elemento.classList.toggle("logoBlack");
        });

        var elementoLista = document.querySelectorAll('.ListaNav');
        elementoLista.forEach(function(elemento) {
            elemento.classList.toggle("ListaNavBlack");
        });

        botoesMudarCor.forEach(function(elemento) {
            elemento.classList.toggle('BttMudarCorWhite');
        });

        var elementosTexto = document.querySelectorAll('.Title');
        elementosTexto.forEach(function(elemento) {
            elemento.classList.toggle('TitleEscuro');
        });

        var elementosDescricao = document.querySelectorAll('.Desc');
        elementosDescricao.forEach(function(elemento) {
            elemento.classList.toggle('DescEscuro');
        });

        var elementosDestaqueCursos = document.querySelectorAll('.bttCursosArt');
        elementosDestaqueCursos.forEach(function(elemento) {
            elemento.classList.toggle('BttEscuro1');
        });

        var elementosDestaqueCad = document.querySelectorAll('.bttCadArt');
        elementosDestaqueCad.forEach(function(elemento) {
            elemento.classList.toggle('BttEscuro2');
        });

        var elementosBarraLateral = document.querySelectorAll('.BarraLateral');
        elementosBarraLateral.forEach(function(elemento) {
            elemento.classList.toggle('BarraLateralEscuro');
    });
});
});


function abrirModal() {
    const modal = document.getElementById('ModalFeed');
    modal.classList.add('abrir');
}

function fecharModal() {
    const modal = document.getElementById('ModalFeed');
    modal.classList.remove('abrir');
}

function mostrarCadastro() {
    const loginDiv = document.querySelector('.AbaLog');
    const cadastroDiv = document.querySelector('.AbaCad');
  
    
    loginDiv.classList.add('fade-out');
    loginDiv.addEventListener('animationend', function() {
        loginDiv.classList.add('hidden');
        loginDiv.classList.remove('fade-out');
        
        cadastroDiv.classList.remove('hidden');
        cadastroDiv.classList.add('fade-in');
    }, { once: true });
    

}

function mostrarLogin() {
    const cadastroDiv = document.querySelector('.AbaCad');
    const loginDiv = document.querySelector('.AbaLog');

    cadastroDiv.classList.add('fade-out');
    cadastroDiv.addEventListener('animationend', function() {
        cadastroDiv.classList.add('hidden');
        cadastroDiv.classList.remove('fade-out');
        
        loginDiv.classList.remove('hidden');
        loginDiv.classList.add('fade-in');
    }, { once: true });
}

