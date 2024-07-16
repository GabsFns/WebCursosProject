var dados2 = [
    {
        foto: "../style/image/IconGabriel.jpg",
        nome: "Gabriel Fernandes",
        titulo: "Formação em:",
        formacao: "Engenharia de Software e Ciência de Computação",
        subtitulo: "Faz parte dos cursos de:",
        areaAtuacao: "Full Stack | Ciência de Dados | Cibersegurança",
    },
    // Adicione mais objetos conforme necessário
];

// Seleciona o elemento container onde as divs serão adicionadas
var container2 = document.getElementById('container2');

// Itera sobre o array de dados e cria as divs dinamicamente
dados2.forEach(function(item) {
    // Cria os elementos HTML
    var divCard2 = document.createElement('div');
    divCard2.classList.add('cardProfessor'); // Adiciona uma classe para estilização
    
    var nome = document.createElement('h3');
    nome.textContent = item.nome;
    
    
    var titulo = document.createElement('h4');
    titulo.textContent = item.titulo;
    
    var formacao = document.createElement('p');
    formacao.textContent = item.formacao;
    
    var subtitulo = document.createElement('h4');
    subtitulo.textContent = item.subtitulo;
    
    var areaAtuacao = document.createElement('p');
    areaAtuacao.textContent = item.areaAtuacao;
    
    var foto = document.createElement('img');
    foto.src = item.foto;
    foto.alt = item.nome;
    foto.classList.add('imgProfessor'); 

    // Adiciona os elementos à div card
    divCard2.appendChild(foto);
    divCard2.appendChild(nome);
    divCard2.appendChild(titulo);
    divCard2.appendChild(formacao);
    divCard2.appendChild(subtitulo);
    divCard2.appendChild(areaAtuacao);

    // Adiciona a div card ao container
    container2.appendChild(divCard2);
});