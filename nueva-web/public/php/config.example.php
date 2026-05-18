<?php

return [
    'recipient_email' => 'tu-correo@dominio.com',
    'from_email' => 'no-reply@tudominio.com',
    'from_name' => 'Web Rafael Verdugo',
    'success_redirect' => '/?success=1#contacto',
    'error_redirect' => '/?error=1#contacto',
    'use_smtp' => false,
    'smtp' => [
        'host' => 'smtp.hostinger.com',
        'port' => 587,
        'username' => 'tu-correo@dominio.com',
        'password' => 'tu-password',
        'secure' => 'tls',
    ],
];
