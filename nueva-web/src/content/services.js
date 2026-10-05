// Páginas de servicio. Cada una apunta a una búsqueda concreta y enlaza con
// proyectos y artículos relacionados. `pending: true` = no se publica todavía.

export const services = [
  {
    slug: 'diseno-web-sevilla',
    priceFrom: 249,
    price: 'Web corporativa desde 249 €',
    path: '/diseno-web-sevilla/',
    navLabel: 'Diseño web en Sevilla',
    serviceType: 'Diseño y desarrollo web',
    seo: {
      title: 'Diseño de páginas web en Sevilla | Rafael Verdugo, diseñador web freelance',
      description:
        'Diseño de páginas web en Sevilla para negocios y profesionales: webs a medida, rápidas, adaptadas al móvil y preparadas para aparecer en Google. Trato directo, sin agencia.',
    },
    eyebrow: 'Diseño web en Sevilla',
    h1: 'Diseño de páginas web en Sevilla para negocios que quieren clientes, no solo una web bonita.',
    intro:
      'Soy Rafael Verdugo, diseñador y desarrollador web freelance en Sevilla. Diseño y programo webs a medida para negocios locales, profesionales y pequeñas empresas: rápidas, claras, adaptadas al móvil y preparadas desde el primer día para que Google las entienda.',
    highlights: [
      { title: 'Trato directo', text: 'Hablas siempre conmigo, de principio a fin. Sin intermediarios ni cuentas que pasan de mano en mano.' },
      { title: 'Diseño a medida', text: 'Nada de plantillas genéricas: la web se diseña alrededor de tu negocio y de lo que tus clientes necesitan ver.' },
      { title: 'Lista para Google', text: 'Estructura, metadatos, velocidad y datos estructurados incluidos en el precio, no como extra.' },
    ],
    blocks: [
      { h2: 'Qué incluye una web conmigo' },
      {
        p: 'Cada proyecto es distinto, pero una web corporativa estándar sale de mis manos con todo lo necesario para empezar a funcionar:',
      },
      {
        ul: [
          '**Diseño a medida** de todas las páginas, pensado primero para móvil, que es desde donde entra la mayoría de tus visitas.',
          '**Textos ordenados para vender**: te ayudo a estructurar qué decir, en qué orden y con qué llamadas a la acción.',
          '**Formulario de contacto funcional** que llega directamente a tu correo, con protección básica contra spam.',
          '**SEO técnico de base**: títulos y descripciones por página, sitemap, robots.txt, datos estructurados y URLs limpias.',
          '**Velocidad**: imágenes optimizadas, código ligero y carga rápida, también con conexiones móviles lentas.',
          '**Analítica** (Google Analytics) y aviso de cookies para que sepas cuántas visitas recibes y de dónde vienen.',
          '**Publicación en tu hosting** con tu dominio y certificado SSL, o te ayudo a contratarlos si aún no los tienes.',
        ],
      },
      { h2: 'Para quién es este servicio' },
      {
        p: 'Trabajo sobre todo con negocios y profesionales de Sevilla y alrededores que necesitan una web seria para captar clientes: clínicas, centros de formación, despachos, comercios, restaurantes, asociaciones o profesionales independientes. También con proyectos de cualquier punto de España, porque todo el proceso se puede hacer en remoto.',
      },
      {
        p: 'Si lo que necesitas es una sola página para una campaña o un lanzamiento, quizá te encaje mejor una [landing page](/landing-pages/). Y si vas a vender productos online, mira el servicio de [tiendas online](/tiendas-online-sevilla/).',
      },
      { h2: 'Cómo trabajo' },
      {
        ol: [
          '**Llamada inicial**: me cuentas tu negocio, tus clientes y qué esperas de la web. Te digo qué haría y te paso una propuesta cerrada.',
          '**Estructura y contenidos**: definimos las páginas y qué va en cada una. Si no tienes textos, te ayudo a prepararlos.',
          '**Diseño y desarrollo**: te enseño la web en una dirección de pruebas para que la revises antes de publicarla.',
          '**Publicación y SEO**: la subo a tu dominio, la doy de alta en Google Search Console y compruebo que se indexa bien.',
          '**Acompañamiento**: después del lanzamiento sigo disponible para cambios, dudas y mejoras.',
        ],
      },
      { h2: '¿Por qué un freelance y no una agencia?' },
      {
        p: 'Una agencia puede tener sentido para proyectos muy grandes. Para la mayoría de negocios, trabajar con un freelance significa hablar siempre con la persona que hace el trabajo, decisiones más rápidas y un precio que no tiene que cubrir la estructura de una empresa. A cambio, yo me comprometo a una cosa: que la web funcione para tu negocio, no solo que quede bien en una captura.',
      },
    ],
    faqs: [
      {
        q: '¿Cuánto tarda en estar lista una web?',
        a: 'Una web corporativa de entre 4 y 6 páginas suele estar lista en dos o tres semanas desde que tenemos los contenidos. Los proyectos más grandes o con funcionalidades a medida llevan más tiempo, y siempre te doy un plazo cerrado en la propuesta.',
      },
      {
        q: '¿Podré cambiar textos e imágenes yo mismo?',
        a: 'Sí, si lo necesitas. Según el proyecto puedo preparar la web para que edites contenidos sin tocar código, o encargarme yo de los cambios cuando me los pidas.',
      },
      {
        q: '¿Trabajas solo en Sevilla?',
        a: 'Estoy en Sevilla y me gusta conocer en persona a los clientes de aquí, pero trabajo con negocios de toda España. Las reuniones se pueden hacer por videollamada.',
      },
      {
        q: '¿La web aparecerá en Google?',
        a: 'La entrego con todo lo técnico listo para que Google la indexe y la entienda, y la doy de alta en Search Console. Aparecer en las primeras posiciones depende también de la competencia y del contenido; si quieres trabajarlo a fondo, tengo un servicio específico de [SEO técnico](/seo-sevilla/).',
      },
    ],
    relatedProjects: ['the-shelter', 'licencia-de-armas-facil', 'ies-margarita-salas'],
    relatedPosts: ['cuanto-cuesta-una-pagina-web-en-sevilla', 'por-que-mi-web-no-aparece-en-google', 'que-debe-tener-la-web-de-un-negocio-local'],
  },
  {
    slug: 'tiendas-online-sevilla',
    priceFrom: 299,
    price: 'Tienda online desde 299 €',
    path: '/tiendas-online-sevilla/',
    navLabel: 'Tiendas online',
    serviceType: 'Desarrollo de tiendas online',
    seo: {
      title: 'Tiendas online en Sevilla | Creación de e-commerce a medida | Rafael Verdugo',
      description:
        'Creación de tiendas online en Sevilla: catálogo, pasarela de pago, gestión de pedidos y páginas de venta rápidas y preparadas para convertir. Desarrollo a medida con trato directo.',
    },
    eyebrow: 'Tiendas online y funnels',
    h1: 'Tiendas online pensadas para vender, con una estructura clara y una compra sin fricciones.',
    intro:
      'Desarrollo tiendas online y páginas de venta para negocios que quieren vender por internet sin depender de una agencia. Me encargo del diseño, de la parte técnica y de que el proceso de compra sea rápido y fiable, desde el móvil y desde el ordenador.',
    highlights: [
      { title: 'Pago seguro', text: 'Integración con pasarelas de pago para que tus clientes paguen con tarjeta de forma segura.' },
      { title: 'Rápida en móvil', text: 'Cada segundo de carga cuenta en una compra. La tienda se optimiza para cargar rápido.' },
      { title: 'Fácil de gestionar', text: 'Productos, pedidos y clientes desde un panel, sin necesitar conocimientos técnicos.' },
    ],
    blocks: [
      { h2: 'Qué tipo de tiendas hago' },
      {
        ul: [
          '**Tiendas de catálogo**: productos físicos con variantes, stock y envíos.',
          '**Venta de productos digitales e infoproductos**: cursos, guías o accesos a una plataforma, con pago único o recurrente.',
          '**Páginas de venta y funnels**: una página enfocada en vender un único producto o servicio, con su proceso de pago integrado.',
        ],
      },
      {
        p: 'Un ejemplo real es [Licencia de Armas Fácil](/proyectos/licencia-de-armas-facil/), una plataforma de formación con venta online, pago único y área privada para los alumnos.',
      },
      { h2: 'Lo que cuido en cada tienda' },
      {
        ul: [
          '**Fichas de producto que venden**: fotos bien optimizadas, beneficios claros, precio visible y botón de compra donde se espera.',
          '**Proceso de compra corto**: los pasos justos para pagar, sin formularios eternos ni registros obligatorios innecesarios.',
          '**Confianza**: políticas de envío y devolución claras, datos de contacto visibles y pago seguro.',
          '**SEO para e-commerce**: URLs limpias, categorías bien estructuradas y datos estructurados de producto para que Google muestre precio y disponibilidad.',
          '**Medición**: analítica configurada para saber de dónde vienen las ventas.',
        ],
      },
      { h2: 'Cómo trabajamos' },
      {
        p: 'Empezamos por entender qué vendes, a quién y cómo gestionas hoy los pedidos. Con eso te propongo la solución que mejor encaja: a veces es una tienda completa y otras, para empezar a validar, basta con una página de venta bien hecha. Te paso una propuesta cerrada con plazos y precio antes de empezar.',
      },
    ],
    faqs: [
      {
        q: '¿Qué pasarelas de pago puedo usar?',
        a: 'Las habituales en España: pago con tarjeta a través de Stripe o de la pasarela de tu banco (Redsys), y otras opciones como PayPal o Bizum según la plataforma y tu banco.',
      },
      {
        q: '¿Puedo empezar con pocos productos?',
        a: 'Sí, y muchas veces es lo más sensato. La tienda se construye para poder crecer: empezar con un catálogo pequeño te permite validar antes de invertir más.',
      },
      {
        q: '¿Me encargo yo de los pedidos?',
        a: 'Tú gestionas los pedidos desde el panel de la tienda; yo te dejo todo configurado y te enseño a usarlo. Si algo falla o quieres una mejora, me escribes.',
      },
    ],
    relatedProjects: ['licencia-de-armas-facil', 'the-shelter'],
    relatedPosts: ['cuanto-cuesta-una-pagina-web-en-sevilla', 'landing-page-o-web-corporativa'],
  },
  {
    slug: 'landing-pages',
    priceFrom: 199,
    price: 'Landing page desde 199 €',
    path: '/landing-pages/',
    navLabel: 'Landing pages',
    serviceType: 'Diseño de landing pages',
    seo: {
      title: 'Diseño de landing pages que convierten | Rafael Verdugo, Sevilla',
      description:
        'Diseño y desarrollo de landing pages para captar contactos, vender un servicio o lanzar una campaña. Páginas rápidas, enfocadas en un solo objetivo y medibles desde el primer día.',
    },
    eyebrow: 'Landing pages',
    h1: 'Landing pages con un solo objetivo: que el visitante dé el siguiente paso.',
    intro:
      'Una landing page es una página diseñada para una única acción: pedir presupuesto, reservar, apuntarse o comprar. Las diseño y programo para que carguen rápido, se entiendan en segundos y conviertan las visitas de tus campañas en contactos reales.',
    highlights: [
      { title: 'Un objetivo', text: 'Todo en la página empuja hacia la misma acción. Sin menús que distraigan ni ruido.' },
      { title: 'Rápida', text: 'Si pagas por anuncios, cada segundo de carga es dinero perdido. Código ligero e imágenes optimizadas.' },
      { title: 'Medible', text: 'Analítica y eventos de conversión configurados para saber qué funciona.' },
    ],
    blocks: [
      { h2: 'Cuándo necesitas una landing page' },
      {
        ul: [
          'Vas a lanzar una **campaña de anuncios** en Google, Instagram o Facebook y necesitas una página a la que enviar el tráfico.',
          'Quieres **validar un servicio o un producto** nuevo antes de invertir en una web completa.',
          'Organizas un **evento, una formación o un lanzamiento** con fecha y plazas limitadas.',
          'Tienes una web general pero quieres una página específica para **captar un tipo concreto de cliente**.',
        ],
      },
      {
        p: 'Si lo que buscas es presentar tu negocio completo, con varias secciones y servicios, probablemente necesitas una [web corporativa](/diseno-web-sevilla/). Lo explico con más detalle en [landing page o web corporativa: qué necesita tu negocio](/blog/landing-page-o-web-corporativa/).',
      },
      { h2: 'Cómo construyo una landing que convierte' },
      {
        ol: [
          '**Un mensaje principal claro** en la primera pantalla: qué ofreces, para quién y por qué elegirte.',
          '**Beneficios antes que características**: lo que gana el cliente, no la lista técnica.',
          '**Pruebas de confianza**: opiniones, casos, logos, garantías o cifras reales si las tienes.',
          '**Una llamada a la acción repetida** en los puntos clave, siempre con el mismo objetivo.',
          '**Formulario corto**: solo los datos imprescindibles. Cada campo de más reduce los envíos.',
          '**Medición**: Analytics y, si haces anuncios, los eventos de conversión para optimizar las campañas.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Una landing page sirve para posicionar en Google?',
        a: 'Puede posicionar para búsquedas muy concretas, pero su función principal es convertir el tráfico que ya le llega, normalmente de anuncios, redes o email. Para posicionar de forma amplia es mejor una web con varias páginas y contenido.',
      },
      {
        q: '¿Puedo tener la landing en mi dominio?',
        a: 'Sí. Puede ir en tu dominio principal (por ejemplo, tudominio.com/oferta) o en un subdominio, según cómo esté montada tu web actual.',
      },
      {
        q: '¿Cuánto tarda?',
        a: 'Una landing page suele estar lista en una o dos semanas desde que tenemos claro el mensaje y los contenidos.',
      },
    ],
    relatedProjects: ['licencia-de-armas-facil'],
    relatedPosts: ['cuanto-cuesta-una-pagina-web-en-sevilla', 'landing-page-o-web-corporativa'],
  },
  {
    slug: 'seo-sevilla',
    path: '/seo-sevilla/',
    navLabel: 'SEO técnico',
    serviceType: 'Posicionamiento SEO y optimización web',
    seo: {
      title: 'SEO técnico y posicionamiento web en Sevilla | Rafael Verdugo',
      description:
        'Mejoro el posicionamiento de tu web en Google: auditoría SEO técnica, velocidad, indexación, datos estructurados y SEO local para negocios de Sevilla. Informe claro y cambios aplicados.',
    },
    eyebrow: 'SEO y rendimiento',
    h1: 'SEO técnico para que Google entienda tu web y la muestre a quien te está buscando.',
    intro:
      'Muchas webs no aparecen en Google por problemas técnicos que nadie ha revisado: páginas que no se indexan, títulos repetidos, contenido que solo existe tras ejecutar JavaScript o una velocidad que espanta a las visitas. Reviso tu web a fondo, te explico qué falla en lenguaje claro y lo arreglo.',
    highlights: [
      { title: 'Auditoría clara', text: 'Un informe con los problemas ordenados por impacto, sin jerga innecesaria.' },
      { title: 'Cambios aplicados', text: 'No me quedo en el informe: si quieres, implemento yo las mejoras.' },
      { title: 'SEO local', text: 'Para negocios de Sevilla: ficha de Google Business, datos locales y búsquedas de tu zona.' },
    ],
    blocks: [
      { h2: 'Qué reviso en una auditoría SEO' },
      {
        ul: [
          '**Indexación**: qué páginas ve Google, cuáles no y por qué. Errores 404, redirecciones, duplicados y canonicals.',
          '**Contenido visible para buscadores**: si tu web depende de JavaScript, compruebo que Google y los buscadores con IA pueden leerla.',
          '**Títulos, descripciones y encabezados** de cada página, y si responden a lo que busca tu cliente.',
          '**Velocidad y Core Web Vitals**: tiempos de carga, peso de imágenes y estabilidad visual en móvil.',
          '**Datos estructurados** (Schema.org) para que Google entienda quién eres, qué ofreces y dónde.',
          '**SEO local**: coherencia de nombre, dirección y teléfono, ficha de Google Business y páginas por servicio y zona.',
          '**Visibilidad en buscadores con IA** como ChatGPT o Perplexity: acceso de sus rastreadores y contenido fácil de citar.',
        ],
      },
      { h2: 'Un ejemplo: mi propia web' },
      {
        p: 'Esta misma web es el mejor ejemplo. Estaba hecha en React y el HTML que recibía Google llegaba vacío; cualquier dirección inventada devolvía la portada en lugar de un error, y la versión con www no redirigía. Lo corregí con pre-renderizado, errores 404 reales, redirecciones 301, imágenes de 2 MB reducidas a menos de 40 KB y datos estructurados completos. Es el mismo trabajo que hago en las webs de mis clientes.',
      },
      { h2: 'Cómo trabajamos' },
      {
        ol: [
          '**Auditoría** de tu web y de tu situación en Google (con acceso a Search Console si lo tienes).',
          '**Informe priorizado**: qué está bloqueando tu posicionamiento, qué es mejorable y qué puede esperar.',
          '**Implementación** de los cambios, por mi parte o junto a quien mantenga tu web.',
          '**Seguimiento** de la indexación y de la evolución en las semanas siguientes.',
        ],
      },
      {
        p: 'Si quieres entender primero por qué tu web podría no estar apareciendo, empieza por este artículo: [por qué mi web no aparece en Google](/blog/por-que-mi-web-no-aparece-en-google/).',
      },
    ],
    faqs: [
      {
        q: '¿En cuánto tiempo se notan los resultados?',
        a: 'Los arreglos técnicos (indexación, errores, velocidad) suelen notarse en unas semanas, cuando Google vuelve a rastrear la web. Subir posiciones en búsquedas competidas es un trabajo de meses que depende también del contenido y de la competencia.',
      },
      {
        q: '¿Me garantizas el primer puesto en Google?',
        a: 'No, y desconfía de quien lo haga: nadie controla el algoritmo de Google. Lo que sí te garantizo es que tu web no tendrá problemas técnicos que te impidan competir y que sabrás exactamente qué se ha hecho y por qué.',
      },
      {
        q: '¿Sirve si mi web está hecha con WordPress u otra plataforma?',
        a: 'Sí. La auditoría vale para cualquier web. La implementación depende de la plataforma, pero la mayoría de mejoras se pueden aplicar en WordPress, Shopify, webs a medida y otras.',
      },
    ],
    relatedProjects: ['ies-margarita-salas'],
    relatedPosts: ['por-que-mi-web-no-aparece-en-google', 'que-debe-tener-la-web-de-un-negocio-local'],
  },
]

// Servicios sin página propia (por ahora): aparecen en /servicios/ y en el artículo de precios
export const extraServices = [
  {
    name: 'Software a medida',
    priceFrom: 99,
    text: 'Herramientas web hechas para tu negocio: paneles de gestión, reservas, áreas privadas o cualquier proceso que hoy haces con hojas de cálculo. Un ejemplo es AppointDate, mi software de gestión de citas.',
    href: '/AppointDate/',
    linkLabel: 'Ver AppointDate',
  },
  {
    name: 'Automatizaciones',
    priceFrom: 79,
    text: 'Elimina tareas repetitivas: avisos y emails automáticos, conexión entre las herramientas que ya usas, formularios que guardan los datos donde los necesitas.',
    href: '/contacto/',
    linkLabel: 'Cuéntame qué quieres automatizar',
  },
]
