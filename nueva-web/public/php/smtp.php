<?php
// Configuración SMTP compartida por send.php y send_appointdate.php.
// Las credenciales viven en config.php (fuera de Git); ver config.example.php.

use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/PHPMailer/PHPMailer-master/src/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/PHPMailer-master/src/SMTP.php';

function load_mail_config(): array
{
    $path = __DIR__ . '/config.php';
    if (!is_file($path)) {
        throw new RuntimeException('Falta php/config.php (copia config.example.php)');
    }
    return require $path;
}

function create_mailer(array $config, string $fromName): PHPMailer
{
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['smtp']['host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp']['username'];
    $mail->Password = $config['smtp']['password'];
    $mail->SMTPSecure = $config['smtp']['secure'] === 'ssl'
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int) $config['smtp']['port'];
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    $mail->Timeout = 20;
    $mail->setFrom($config['from_email'], $fromName);
    return $mail;
}

// Error sin datos del visitante en php/mail-error.log (bloqueado por php/.htaccess)
function log_mail_error(string $message): void
{
    error_log(date('c') . ' ' . $message . PHP_EOL, 3, __DIR__ . '/mail-error.log');
}

// Si el servidor SMTP falla puntualmente, se reintenta con una conexión nueva
// antes de mostrar error al visitante.
function send_with_retry(PHPMailer $mail, int $attempts = 3): void
{
    for ($i = 1; ; $i++) {
        try {
            $mail->send();
            return;
        } catch (Throwable $e) {
            log_mail_error("Intento {$i}/{$attempts}: " . ($mail->ErrorInfo ?: $e->getMessage()));
            if ($i >= $attempts) {
                throw $e;
            }
            $mail->smtpClose();
            sleep(2);
        }
    }
}
