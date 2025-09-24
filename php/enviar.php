<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Recoger y sanitizar datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Destinatario
    $para = "rafaelverdugoduran1@gmail.com"; // Tu email personal donde recibirás los mensajes
    $asunto = "Nuevo mensaje desde tu web";
    $cuerpo = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";

    // Cabeceras
    $cabeceras = "From: kemekeosinweb@gmail.com\r\n"; // Cambia por un email de tu hosting
    $cabeceras .= "Reply-To: $email\r\n"; // Para que al responder vaya al usuario

    if(mail($para, $asunto, $cuerpo, $cabeceras)){
        echo "<p>Mensaje enviado correctamente. Gracias por contactarme.</p>";
        // Redirigir al index después de 5 segundos
        echo '<meta http-equiv="refresh" content="5;url=../index.html">';
    } else {
        echo "<p>Error al enviar el mensaje. Intenta de nuevo más tarde.</p>";
    }
} else {
    echo "<p>Acceso no permitido.</p>";
}
?>
