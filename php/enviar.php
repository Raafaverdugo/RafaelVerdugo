<?php
// Importar PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos del formulario
    $nombre  = htmlspecialchars($_POST['nombre']);
    $email   = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Crear instancia de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP de Hostinger
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'contacto@rafaelverdugo.com';   // ⚡ tu correo corporativo Hostinger
        $mail->Password   = 'Rafael170106.';            // ⚡ la contraseña de ese correo
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Remitente y destinatario
        $mail->setFrom('contacto@rafaelverdugo.com', 'Web Rafael Verdugo');
        $mail->addAddress('rafaelverdugoduran1@gmail.com'); // tu correo personal
        $mail->addReplyTo($email, $nombre); // si respondes, va al cliente

        // Contenido del correo
        $mail->isHTML(false); // texto plano
        $mail->Subject = 'Nuevo mensaje desde tu web';
        $mail->Body    = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";

        // Enviar
        $mail->send();
        echo "<p>Mensaje enviado correctamente. Gracias por contactarme.</p>";
        echo '<meta http-equiv="refresh" content="1;url=../index.html">';
    } catch (Exception $e) {
        echo "<p>Error al enviar: {$mail->ErrorInfo}</p>";
    }
} else {
    echo "<p>Acceso no permitido.</p>";
}
