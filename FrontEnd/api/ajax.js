$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault(); // Evita o comportamento padrão de submit do formulário

        // Captura os dados do formulário
        var email = $('#email').val();
        var senha = $('#senha').val();

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (email && senha) {
            // Dados a serem enviados para o backend
            var dados = {
                email: email,
                senha: senha
            };

            // URL do endpoint de login no backend Spring Boot
            var url = 'http://localhost:8081/api/usuarios/login';

            // Requisição AJAX para enviar os dados para o backend
            $.ajax({
                type: 'POST',
                url: url,
                data: dados,
                success: function(response, status, xhr) {
                    if (xhr.status === 200) {
                        // Login bem-sucedido
                        window.location.href = '../Php/TelaPrincipal.php';
                    } else {
                        // Outros status de sucesso (caso necessário)
                        console.log(response);
                    }
                },
                error: function(xhr, status, error) {
                    if (xhr.status === 401) {
                        // Credenciais inválidas
                        alert("Credenciais inválidas. Verifique seu email e senha.");
                    } else {
                        // Outros erros
                        console.log(error);
                    }
                }
            });
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});