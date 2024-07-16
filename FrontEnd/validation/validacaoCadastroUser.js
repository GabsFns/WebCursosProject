function envioFormulario() {
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var nome = document.getElementById('nome');
    var telefone = document.getElementById('telefone');
    
    var mensagemErro = '';

    // Resetar bordas para o padrão
    email.classList.remove('error');
    senha.classList.remove('error');
    nome.classList.remove('error');
    telefone.classList.remove('error');

    // Verificar se o email está vazio
    if (email.value.trim() === '') {
        mensagemErro += 'O campo de email é obrigatório.\n';
        email.classList.add('error');
    }

    // Verificar se a senha está vazia
    if (senha.value.trim() === '') {
        mensagemErro += 'O campo de senha é obrigatório.\n';
        senha.classList.add('error');
    }

    // Verificar se o nome está vazio
    if (nome.value.trim() === '') {
        mensagemErro += 'O campo de nome é obrigatório.\n';
        nome.classList.add('error');
    }

    // Verificar se o telefone está vazio
    if (telefone.value.trim() === '') {
        mensagemErro += 'O campo de telefone é obrigatório.\n';
        telefone.classList.add('error');
    }

    // Se houver mensagens de erro, exibir o AlertError
    if (mensagemErro !== '') {
        
        var errorAlert = document.getElementById('AlertError');
        errorAlert.style.display = 'block';
        telefone.classList.add('error');
        nome.classList.add('error');
        senha.classList.add('error');
        email.classList.add('error');
        // Ocultar o AlertError após 3 segundos
        setTimeout(() => {
            errorAlert.style.opacity = '0';
            setTimeout(() => {
                errorAlert.style.display = 'none';
                errorAlert.style.opacity = '1'; // Resetar a opacidade para futuras exibições
            }, 500); // Tempo para garantir que a transição de opacidade termine
        }, 6000); // 3 segundos de atraso para ocultar o alerta

        return false; // Impede o envio do formulário
    }else{
        
        var errorAlert = document.getElementById('AlertCad');
        errorAlert.style.display = 'block';

        // Ocultar o AlertError após 3 segundos
        setTimeout(() => {
            errorAlert.style.opacity = '0';
            setTimeout(() => {
                errorAlert.style.display = 'none';
                errorAlert.style.opacity = '1'; // Resetar a opacidade para futuras exibições
            }, 500); // Tempo para garantir que a transição de opacidade termine
        }, 6000); // 3 segundos de atraso para ocultar o alerta
        return true; // Permite o envio do formulário
    }

    
}

function EnvidoFormularioLogin() {
    var email = document.getElementById('emailLog');
    var senha = document.getElementById('senhaLog');
    var mensagemErro = '';

    // Resetar bordas para o padrão
    email.classList.remove('error');
    senha.classList.remove('error');

    // Verificar se o email está vazio
    if (email.value.trim() === '') {
        mensagemErro += 'O campo de email é obrigatório.\n';
        email.classList.add('error'); // Adicionar classe 'error' para destacar o campo
    }

    // Verificar se a senha está vazia
    if (senha.value.trim() === '') {
        mensagemErro += 'O campo de senha é obrigatório.\n';
        senha.classList.add('error'); // Adicionar classe 'error' para destacar o campo
    }

    // Se houver mensagens de erro, exibir o AlertError
    if (mensagemErro !== '') {
        var errorAlert = document.getElementById('AlertError');
        errorAlert.style.display = 'block';
        email.classList.add('error');
        senha.classList.add('error');
        // Ocultar o AlertError após 3 segundos
        setTimeout(() => {
            errorAlert.style.opacity = '0';
            setTimeout(() => {
                errorAlert.style.display = 'none';
                errorAlert.style.opacity = '1'; // Resetar a opacidade para futuras exibições
            }, 500); // Tempo para garantir que a transição de opacidade termine
        }, 3000); // 3 segundos de atraso para ocultar o alerta

        return false; // Impede o envio do formulário
    } else {
        var successAlert = document.getElementById('AlertLogin');
        successAlert.style.display = 'block';

        // Ocultar o AlertLogin após 3 segundos
        setTimeout(() => {
            successAlert.style.opacity = '0';
            setTimeout(() => {
                successAlert.style.display = 'none';
                successAlert.style.opacity = '1'; // Resetar a opacidade para futuras exibições
            }, 500); // Tempo para garantir que a transição de opacidade termine
        }, 3000); // 3 segundos de atraso para ocultar o alerta

        return true; // Permite o envio do formulário
    }
}