<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Recoger y sanitizar datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Destinatario (tu correo personal donde recibes los mensajes)
    $para = "rafaelverdugoduran1@gmail.com"; 
    $asunto = "Nuevo mensaje desde tu web";
    $cuerpo = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";

    // Cabeceras
    $cabeceras = "From: contacto@tudominio.com\r\n"; // tu correo corporativo en Hostinger
    $cabeceras .= "Reply-To: $email\r\n"; // al responder, se dirige al cliente

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
