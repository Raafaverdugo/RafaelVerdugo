<?php

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/PHPMailer/PHPMailer-master/src/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/PHPMailer-master/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /#contacto');
    exit();
}

if (!empty($_POST['company'])) {
    header('Location: /?success=1#contacto');
    exit();
}

if (!isset($_POST['nombre'], $_POST['email'], $_POST['mensaje'])) {
    header('Location: /?error=1#contacto');
    exit();
}

$nombre = trim(htmlspecialchars($_POST['nombre'], ENT_QUOTES, 'UTF-8'));
$email = trim(htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8'));
$mensaje = trim(htmlspecialchars($_POST['mensaje'], ENT_QUOTES, 'UTF-8'));

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $nombre === '' || $mensaje === '') {
    header('Location: /?error=1#contacto');
    exit();
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'rafael17vdn@gmail.com';
    $mail->Password = 'pngyoebixpirwggy';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    $mail->setFrom('rafael17vdn@gmail.com', 'Web Rafael Verdugo');
    $mail->addAddress('rafaelverdugoduran1@gmail.com');
    $mail->addReplyTo($email, $nombre);

    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje desde tu web - ' . $nombre;
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
    $mail->AltBody = "Nombre: {$nombre}\nEmail: {$email}\n\nMensaje:\n{$mensaje}";

    $mail->send();
    header('Location: /?success=1#contacto');
    exit();
} catch (Exception $e) {
    error_log('Error PHPMailer: ' . $mail->ErrorInfo);
    header('Location: /?error=1#contacto');
    exit();
}
