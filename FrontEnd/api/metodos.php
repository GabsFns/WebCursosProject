
<?php
session_start(); // Inicia a sessão PHP

// Verifica se a ação foi especificada na URL (via GET)
if (isset($_GET['acao'])) {
    $acao = $_GET['acao'];

    // Dependendo da ação, processa os dados correspondentes
    switch ($acao) {
        case 'cadastro':
            processarCadastro();
            break;
        case 'login':
            processarLogin();
            break;
        default:
            echo "Ação inválida";
            break;
    }
} else {
    // Ação não especificada
    echo "Ação não especificada";
}

function processarCadastro() {
    // Verifica se os dados necessários foram enviados via POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Captura os dados do formulário
        $nome = isset($_POST['nome']) ? $_POST['nome'] : '';
        $email = isset($_POST['email']) ? $_POST['email'] : '';
        $senha = isset($_POST['senha']) ? $_POST['senha'] : '';
        $telefone = isset($_POST['telefone']) ? $_POST['telefone'] : '';

        // Verifica se todos os campos obrigatórios foram preenchidos
        if ($nome && $email && $senha && $telefone) {
            // Dados do formulário a serem enviados para o backend Spring Boot
            $dados = [
                'nome' => $nome,
                'email' => $email,
                'senha' => $senha,
                'telefone' => $telefone
            ];

            // URL do endpoint de cadastro no backend Spring Boot
            $url = 'http://localhost:8081/api/usuarios/cadastro';

            // Chama a função para enviar os dados para o backend Spring Boot
            $response = enviarDadosParaSpringBoot($url, $dados);

            // Verifica se o cadastro foi bem-sucedido (considerando que o backend retorna uma resposta adequada)
            if ($response) {
                // Armazena dados na sessão
                $_SESSION['email'] = $email;
                $_SESSION['nome'] = $nome;
                $_SESSION['telefone'] = $telefone;

                // Redirecionamento para TelaPrincipal.php
                header("Location: ../Php/TelaPrincipal.php");
                exit();
            } else {
                echo "Erro ao cadastrar usuário.";
            }
        } else {
            echo "Dados incompletos: Nome, Email, Senha e Telefone são obrigatórios.";
        }
    } else {
        echo "Método de requisição inválido para cadastro.";
    }
}

function processarLogin() {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = isset($_POST['email']) ? $_POST['email'] : '';
        $senha = isset($_POST['senha']) ? $_POST['senha'] : '';

        if ($email && $senha) {
            $dados = [
                'email' => $email,
                'senha' => $senha
            ];

            $url = 'http://localhost:8081/api/usuarios/login';

            $response = enviarDadosParaSpringBoot($url, $dados);

            if ($response['http_code'] == 200) {
                // Login bem-sucedido
                $_SESSION['email'] = $email;
                header("Location: ../Php/TelaPrincipal.php");
                exit();
            } elseif ($response['http_code'] == 401) {
                // Credenciais inválidas
                http_response_code(401);
                echo "Credenciais inválidas.";
            } else {
                // Outros erros
                echo "Erro: " . $response['response'];
            }
        } else {
            echo "Dados incompletos: Email e Senha são obrigatórios.";
        }
    } else {
        echo "Método de requisição inválido para login.";
    }
}

function enviarDadosParaSpringBoot($url, $dados) {
    $curl = curl_init($url);

    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($dados));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($curl);
    $http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);

    if ($response === false) {
        $error = curl_error($curl);
        echo "Erro na requisição: " . $error;
    }

    curl_close($curl);

    return ['response' => $response, 'http_code' => $http_code];
}

// Chama a função de processamento de login

?>

