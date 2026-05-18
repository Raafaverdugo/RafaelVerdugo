<?php
/**
 * send_appointdate.php
 * Formulario de interés — AppointDate (usando PHPMailer SMTP)
 */

ini_set('display_errors', '0');
error_reporting(E_ALL);
header('Content-Type: application/json; charset=utf-8');

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/PHPMailer/PHPMailer-master/src/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/PHPMailer-master/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
    exit;
}

// Honeypot anti-spam
if (!empty($_POST['company'])) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

$nombre   = htmlspecialchars(trim($_POST['nombre']   ?? ''), ENT_QUOTES, 'UTF-8');
$email    = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$telefono = htmlspecialchars(trim($_POST['telefono'] ?? ''), ENT_QUOTES, 'UTF-8');
$plan     = htmlspecialchars(trim($_POST['plan']     ?? ''), ENT_QUOTES, 'UTF-8');
$mensaje  = htmlspecialchars(trim($_POST['mensaje']  ?? ''), ENT_QUOTES, 'UTF-8');

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Email inválido']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Configuración SMTP idéntica a send.php
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'rafael17vdn@gmail.com'; // Cuenta desde la que sale el correo
    $mail->Password = 'pngyoebixpirwggy';       // App password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    $mail->setFrom('rafael17vdn@gmail.com', 'AppointDate Web');
    
    // Aquí es DONDE LLEGA EL CORREO:
    $mail->addAddress('appointdatesoftware@gmail.com');
    
    // Si quieres responder directamente, se enviará al cliente
    $mail->addReplyTo($email, $nombre);

    $mail->isHTML(true);
    $mail->Subject = "Interés AppointDate: $plan - $nombre";
    $mail->Body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;}
                .header { background: #2563EB; color: #fff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #fafafa; padding: 20px; }
                .field { margin-bottom: 15px; }
                .field strong { display: block; margin-bottom: 5px; color: #555; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>Nuevo Interés en AppointDate</h2>
                </div>
                <div class='content'>
                    <div class='field'>
                        <strong>Nombre:</strong> {$nombre}
                    </div>
                    <div class='field'>
                        <strong>Email:</strong> {$email}
                    </div>
                    <div class='field'>
                        <strong>Teléfono:</strong> " . ($telefono ?: 'No indicado') . "
                    </div>
                    <div class='field'>
                        <strong>Plan Seleccionado:</strong> {$plan}
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
    
    $mail->AltBody = "Nombre: {$nombre}\nEmail: {$email}\nTeléfono: " . ($telefono ?: 'No indicado') . "\nPlan: {$plan}\n\nMensaje:\n{$mensaje}";

    $mail->send();
    http_response_code(200);
    echo json_encode(['ok' => true]);

} catch (Exception $e) {
    error_log('Error PHPMailer AppointDate: ' . $mail->ErrorInfo);
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Error al enviar']);
}
