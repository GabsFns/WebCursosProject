var dados = [
    {
        titulo: "Web FullStack Developer",
        descricao: "Domine as tecnologias front-end e back-end para desenvolver aplicações web completas.",
        botaoTexto: "Ver Sobre",
        precoMensal: "R$120.00 Mensal",
        precoAnual: "R$1340 Anual",
        link: "https://exemplo.com/curso-programacao-avancada",
        foto: "../style/image/FullStackCurso01.jpg"
    },
    {
        titulo: "Introdução à Ciência de Dados",
        descricao: "Explore os fundamentos da ciência de dados e suas aplicações práticas.",
        botaoTexto: "Ver Sobre",
        precoMensal: "R$170.00 Mensal",
        precoAnual: "R$1750 Anual",
        link: "https://exemplo.com/introducao-ciencia-dados",
        foto: "../style/image/CienciaDeDados01.jpg"
    },
    {
        titulo: "Database Developer",
        descricao: "Aprenda a projetar e administrar bancos de dados eficientes e escaláveis para aplicações modernas.",
        botaoTexto: "Ver Sobre",
        precoMensal: "R$120.00 Mensal",
        precoAnual: "R$1340 Anual",
        link: "https://exemplo.com/database-developer",
        foto: "../style/image/DataBase01.jpg"

    },
    // Adicione mais objetos conforme necessário
];

// Seleciona o elemento container onde as divs serão adicionadas
var container = document.getElementById('container');

// Itera sobre o array de dados e cria as divs dinamicamente
dados.forEach(function(item) {
    // Cria os elementos HTML
    var divCard = document.createElement('div');
    divCard.classList.add('card'); // Adiciona uma classe para estilização
    var titulo = document.createElement('h2');
    titulo.textContent = item.titulo;
    var descricao = document.createElement('p');
    descricao.textContent = item.descricao;
    descricao.classList.add('DescricaoCard')
    var botao = document.createElement('a');
    botao.textContent = item.botaoTexto;
    botao.href = item.link;
    botao.classList.add('bttCursoCard'); // Adicione uma classe ao botão para estilização
    var foto = document.createElement('img');
    foto.src = item.foto;
    foto.alt = item.titulo;
    foto.classList.add('imgCurso'); 
    var precoMensal = document.createElement('p')
    precoMensal.textContent = item.precoMensal;
    precoMensal.classList.add('PrecoMensalCard')
    var precoAnual = document.createElement('p')
    precoAnual.textContent = item.precoAnual;
    precoAnual.classList.add('PrecoAnualCard')


    // Adiciona os elementos à div card
    divCard.appendChild(foto);
    divCard.appendChild(titulo);
    divCard.appendChild(descricao);
    divCard.appendChild(precoMensal);
    divCard.appendChild(precoAnual);
    divCard.appendChild(botao);

    // Adiciona a div card ao container
    container.appendChild(divCard);
});