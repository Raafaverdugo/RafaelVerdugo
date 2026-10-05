// Páginas legales. Aviso legal y privacidad necesitan los datos fiscales de Rafael
// ([[PENDIENTE: …]]) y no se publican hasta tenerlos.

const titular = 'Rafael Verdugo Durán'
const email = 'rafa@rafaelverdugo.com'

export const legalPages = [
  {
    slug: 'aviso-legal',
    path: '/aviso-legal/',
    navLabel: 'Aviso legal',
    pending: true,
    title: 'Aviso legal',
    seo: {
      title: 'Aviso legal | Rafael Verdugo',
      description: 'Aviso legal del sitio web rafaelverdugo.com: datos del titular, condiciones de uso y propiedad intelectual.',
    },
    updated: '2026-10-05',
    blocks: [
      { h2: 'Datos del titular' },
      {
        p: 'En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:',
      },
      {
        ul: [
          `**Titular**: ${titular}`,
          '**NIF**: [[PENDIENTE: NIF]]',
          '**Domicilio**: [[PENDIENTE: dirección fiscal]]',
          `**Email**: ${email}`,
          '**Actividad**: diseño y desarrollo de páginas web y software.',
        ],
      },
      { h2: 'Condiciones de uso' },
      {
        p: 'El acceso a este sitio web es gratuito y atribuye la condición de usuario a quien lo visita. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.',
      },
      { h2: 'Propiedad intelectual e industrial' },
      {
        p: `Los textos, diseños, imágenes, código y demás contenidos de este sitio web son propiedad de ${titular} o se utilizan con autorización de sus titulares. Queda prohibida su reproducción, distribución o transformación sin autorización expresa. Las capturas de los proyectos mostrados se publican como muestra del trabajo realizado y pertenecen a sus respectivos titulares.`,
      },
      { h2: 'Enlaces externos' },
      {
        p: 'Este sitio web contiene enlaces a sitios de terceros, como las webs de los proyectos realizados o redes sociales. El titular no se hace responsable de los contenidos ni de las políticas de privacidad de dichos sitios.',
      },
      { h2: 'Responsabilidad' },
      {
        p: 'El titular trabaja para que la información de esta web sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni se responsabiliza de los daños que pudieran derivarse de su uso.',
      },
      { h2: 'Legislación aplicable' },
      {
        p: 'Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a la normativa vigente.',
      },
    ],
  },
  {
    slug: 'privacidad',
    path: '/privacidad/',
    navLabel: 'Privacidad',
    pending: true,
    title: 'Política de privacidad',
    seo: {
      title: 'Política de privacidad | Rafael Verdugo',
      description: 'Cómo se tratan los datos personales que envías a través de los formularios de rafaelverdugo.com.',
    },
    updated: '2026-10-05',
    blocks: [
      { h2: 'Responsable del tratamiento' },
      {
        ul: [
          `**Responsable**: ${titular}`,
          '**NIF**: [[PENDIENTE: NIF]]',
          '**Domicilio**: [[PENDIENTE: dirección fiscal]]',
          `**Email de contacto**: ${email}`,
        ],
      },
      { h2: 'Qué datos recojo y para qué' },
      {
        p: 'A través de los formularios de contacto de esta web recojo los datos que tú mismo facilitas: nombre, email, teléfono (si lo indicas) y el mensaje. Los uso únicamente para responder a tu consulta y, si llegamos a trabajar juntos, para preparar y gestionar la propuesta o el proyecto.',
      },
      { h2: 'Base legal' },
      {
        p: 'La base legal del tratamiento es tu consentimiento al enviar el formulario y, en su caso, la aplicación de medidas precontractuales a petición tuya (artículo 6.1.a y 6.1.b del RGPD).',
      },
      { h2: 'Cuánto tiempo conservo tus datos' },
      {
        p: 'Conservo los mensajes el tiempo necesario para atender tu consulta y, si se formaliza una relación comercial, durante los plazos que exija la normativa fiscal y mercantil.',
      },
      { h2: 'Destinatarios' },
      {
        p: 'No cedo tus datos a terceros salvo obligación legal. Los mensajes se envían y almacenan en el servicio de correo de Hostinger, proveedor del alojamiento y el correo de esta web, que actúa como encargado del tratamiento.',
      },
      { h2: 'Tus derechos' },
      {
        p: `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${email}. Si consideras que tus derechos no han sido respetados, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
      },
      { h2: 'Cookies' },
      { p: 'La información sobre las cookies que usa esta web está en la [política de cookies](/cookies/).' },
    ],
  },
  {
    slug: 'cookies',
    path: '/cookies/',
    navLabel: 'Cookies',
    title: 'Política de cookies',
    seo: {
      title: 'Política de cookies | Rafael Verdugo',
      description: 'Qué cookies usa rafaelverdugo.com, para qué sirven y cómo aceptarlas, rechazarlas o cambiar tu elección.',
    },
    updated: '2026-10-05',
    blocks: [
      { h2: 'Qué son las cookies' },
      {
        p: 'Las cookies son pequeños archivos que una web guarda en tu navegador para recordar información sobre tu visita. Algunas son necesarias para que la web funcione y otras sirven para medir cómo se usa.',
      },
      { h2: 'Cookies que usa esta web' },
      {
        p: 'Esta web **solo usa cookies de analítica**, de Google Analytics, y **únicamente si las aceptas** en el aviso que aparece en tu primera visita. Mientras no aceptes, Google Analytics no guarda cookies en tu navegador.',
      },
      {
        ul: [
          '**_ga**: distingue a los visitantes de forma anónima. Duración: 2 años. Titular: Google.',
          '**_ga_<ID>**: mantiene el estado de la sesión. Duración: 2 años. Titular: Google.',
        ],
      },
      {
        p: 'Además, la web guarda en tu navegador (localStorage, no es una cookie) tu elección sobre las cookies, para no volver a preguntarte en cada visita.',
      },
      { h2: 'Para qué uso la analítica' },
      {
        p: 'Para saber cuántas personas visitan la web, qué páginas les resultan útiles y desde dónde llegan, de forma agregada. No uso esta información para identificarte ni para mostrarte publicidad.',
      },
      { h2: 'Cómo cambiar tu elección' },
      {
        p: 'Puedes cambiar tu decisión en cualquier momento con el enlace **Configurar cookies** del pie de página. También puedes borrar las cookies desde la configuración de tu navegador.',
      },
      { h2: 'Más información' },
      {
        p: `Google explica cómo usa los datos en [su política de privacidad](https://policies.google.com/privacy). Para cualquier duda, escríbeme a ${email}.`,
      },
    ],
  },
]
