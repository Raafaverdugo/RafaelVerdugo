<?php
// Activar reporte de errores (solo para debugging, desactívalo en producción)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Importar PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Ruta correcta según tu estructura
require __DIR__ . '/PHPMailer/PHPMailer-master/src/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar que los campos existen
    if (!isset($_POST['nombre']) || !isset($_POST['email']) || !isset($_POST['mensaje'])) {
        die("Error: Faltan campos obligatorios.");
    }

    // Recoger y sanitizar datos del formulario
    $nombre  = trim(htmlspecialchars($_POST['nombre'], ENT_QUOTES, 'UTF-8'));
    $email   = trim(htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8'));
    $mensaje = trim(htmlspecialchars($_POST['mensaje'], ENT_QUOTES, 'UTF-8'));

    // Validar email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Error: Email no válido.");
    }

    // Validar que los campos no estén vacíos
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        die("Error: Todos los campos son obligatorios.");
    }

    // Crear instancia de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP de Hostinger
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'contacto@rafaelverdugo.com';
        $mail->Password   = 'Rafael170106.'; // ⚠️ NUNCA compartas esto públicamente
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;
        
        // Configuración adicional para evitar errores
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        // Configuración de caracteres
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';

        // Remitente y destinatario
        $mail->setFrom('contacto@rafaelverdugo.com', 'Web Rafael Verdugo');
        $mail->addAddress('rafaelverdugoduran1@gmail.com');
        $mail->addReplyTo($email, $nombre);

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje desde tu web - ' . $nombre;
        
        // Cuerpo HTML
        $mail->Body = "
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #000; color: #fff; padding: 20px; text-align: center; }
                    .content { background: #f4f4f4; padding: 20px; margin: 20px 0; }
                    .field { margin-bottom: 15px; }
                    .field strong { display: block; margin-bottom: 5px; }
                </style>
            </head>
            <body>
                <div class='container'>
                    <div class='header'>
                        <h2>Nuevo mensaje desde tu web</h2>
                    </div>
                    <div class='content'>
                        <div class='field'>
                            <strong>Nombre:</strong>
                            {$nombre}
                        </div>
                        <div class='field'>
                            <strong>Email:</strong>
                            {$email}
                        </div>
                        <div class='field'>
                            <strong>Mensaje:</strong>
                            <p>" . nl2br($mensaje) . "</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        ";

        // Versión texto plano (alternativa)
        $mail->AltBody = "Nombre: {$nombre}\nEmail: {$email}\n\nMensaje:\n{$mensaje}";

        // Enviar
        $mail->send();
        
        // Redirigir con mensaje de éxito
        header("Location: /contacto?success=1");
        exit();
        
    } catch (Exception $e) {
        // Log del error (para debugging)
        error_log("Error PHPMailer: " . $mail->ErrorInfo);
        
        // Mostrar error al usuario
        echo "<!DOCTYPE html>
        <html lang='es'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Error</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; text-align: center; }
                .error { background: #ffebee; border: 1px solid #f44336; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; }
            </style>
        </head>
        <body>
            <div class='error'>
                <h2>Error al enviar el mensaje</h2>
                <p>Lo siento, hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente más tarde.</p>
                <p><a href='/contacto'>Volver al formulario</a></p>
            </div>
        </body>
        </html>";
    }
} else {
    header("Location: /contacto");
    exit();
}