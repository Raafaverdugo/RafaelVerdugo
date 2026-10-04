<?php
// Copia este archivo como config.php (en el servidor, dentro de /php/) y rellena la contraseña.
// config.php NO se sube a GitHub (.gitignore) y el servidor bloquea su acceso desde el navegador.

return [
    'smtp' => [
        'host' => 'smtp.hostinger.com',
        'port' => 465,
        'secure' => 'ssl',
        'username' => 'rafa@rafaelverdugo.com',
        'password' => 'CONTRASEÑA_DEL_BUZON_RAFA',
    ],
    'from_email' => 'rafa@rafaelverdugo.com',
    // Dónde llegan los mensajes del formulario de contacto
    'recipient_email' => 'rafa@rafaelverdugo.com',
    // Dónde llegan las solicitudes del formulario de AppointDate
    'appointdate_recipient_email' => 'rafa@rafaelverdugo.com',
];
