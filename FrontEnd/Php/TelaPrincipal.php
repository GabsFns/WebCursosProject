<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/css/TelaPrincipal.css">
    <title>Document</title>
</head>
<body>
    <main>
        
   

    
    <aside class="side-bar">
        
        <h2>&#9776; STUDY HUB</h2>
        <?php
          session_start();
          if (isset($_SESSION['email'])) {
              $email = htmlspecialchars($_SESSION['email']);
              echo "<p class='user-email'>$email</p>";
          } else {
              echo "<p>Email não encontrado na sessão.</p>";
          }
          
      ?>
            
        <nav>
            <p>DASHBOARD</p>
            <button><img src="../style/image/casa.png" alt=""><p>Home</p></button>
            <button><img src="../style/image/do-utilizador.png" alt=""><p>Perfil</p></button>
            <button><img src="../style/image/pasta-aberta.png" alt=""><p>Meus Curos</p></button>
            <button><img src="../style/image/pasta-aberta.png" alt=""><p>Certificados</p></button>
            <p>SETTINGS</p>
            <button><img src="../style/image/equalizador.png" alt=""><p>Config</p></button>
            <button><img src="../style/image/pergunta.png" alt=""><p>Support</p></button>
            <button><img src="../style/image/pergunta.png" alt=""><p>FeedBack</p></button>
            <hr>
            <a href="../view/index.html"><button id="BttOff"><img id="logOffimg" src="../style/image/sair.png" alt=""><p>Sair</p></button></a>
            
        </nav>
    </aside>
</main>
</body>
</html>