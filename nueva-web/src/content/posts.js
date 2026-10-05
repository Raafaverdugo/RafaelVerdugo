// Artículos del blog. `pending: true` = falta información de Rafael y no se publica.
// Los textos marcados con [[PENDIENTE: …]] se sustituyen antes de publicar.

export const posts = [
  {
    slug: 'por-que-mi-web-no-aparece-en-google',
    path: '/blog/por-que-mi-web-no-aparece-en-google/',
    title: '¿Por qué mi web no aparece en Google? 9 causas habituales y cómo solucionarlas',
    seo: {
      title: '¿Por qué mi web no aparece en Google? 9 causas y cómo solucionarlas',
      description:
        'Si tu web no aparece en Google, casi siempre es por una de estas causas: no está indexada, bloquea a los buscadores, depende de JavaScript, es lenta o no responde a lo que busca la gente. Te explico cómo comprobarlo.',
    },
    excerpt:
      'Las causas técnicas y de contenido más habituales por las que una web no sale en Google, cómo comprobar cada una y qué hacer para solucionarlo.',
    datePublished: '2026-10-05',
    readingMinutes: 7,
    blocks: [
      {
        p: 'Es una de las preguntas que más me hacen: «tengo web desde hace meses y no aparece en Google ni buscando el nombre de mi negocio». La buena noticia es que casi siempre tiene explicación, y muchas veces es un problema técnico que se arregla en poco tiempo. Estas son las causas más habituales, de la más grave a la más sutil.',
      },
      { h2: 'Primero, comprueba si Google conoce tu web' },
      {
        p: 'Escribe en Google **site:tudominio.com** (con tu dominio, sin espacios). Si no aparece ningún resultado, Google no tiene ninguna página de tu web en su índice y el problema es de indexación. Si aparecen páginas pero no te encuentran por las búsquedas que te interesan, el problema es de posicionamiento. Son dos cosas distintas y se arreglan de forma diferente.',
      },
      { h2: '1. La web es nueva y Google aún no la ha rastreado' },
      {
        p: 'Una web recién publicada puede tardar desde unos días hasta varias semanas en aparecer. Para acelerarlo, da de alta tu web en **Google Search Console**, envía el sitemap (normalmente tudominio.com/sitemap.xml) y solicita la indexación de la portada.',
      },
      { h2: '2. Algo le está diciendo a Google que no la indexe' },
      {
        p: 'Es más común de lo que parece, sobre todo en webs que se desarrollaron en una dirección de pruebas. Revisa estos tres puntos:',
      },
      {
        ul: [
          'Una etiqueta **noindex** en el código de las páginas (en WordPress, la casilla «Disuadir a los motores de búsqueda» en Ajustes → Lectura).',
          'Un archivo **robots.txt** que bloquea todo el sitio con «Disallow: /».',
          'Una contraseña o un modo de mantenimiento que impide el acceso a los buscadores.',
        ],
      },
      { h2: '3. El contenido solo existe después de ejecutar JavaScript' },
      {
        p: 'Muchas webs modernas hechas con React, Vue o similares envían al navegador una página vacía y la rellenan con JavaScript. Google puede ejecutarlo, pero más tarde y no siempre bien; y los buscadores con inteligencia artificial, como ChatGPT o Perplexity, directamente no lo ejecutan. Para comprobarlo, haz clic derecho en tu web, elige **Ver código fuente** y busca tus textos. Si no están, tu web necesita pre-renderizado o renderizado en servidor. Es exactamente lo que tuve que corregir en mi propia web.',
      },
      { h2: '4. Errores que confunden a Google' },
      {
        ul: [
          '**Páginas inexistentes que no devuelven error 404**, sino la portada. Google lo interpreta como contenido duplicado.',
          '**Versiones duplicadas** de la web: con y sin www, o con http y https, sin redirigir a una sola.',
          '**Etiquetas canonical** mal configuradas que apuntan todas a la portada, haciendo que Google ignore el resto de páginas.',
        ],
      },
      { h2: '5. Todas las páginas tienen el mismo título' },
      {
        p: 'El título de cada página (la línea azul que aparece en Google) es una de las señales más importantes. Si todas tus páginas se llaman igual, o el título no contiene lo que la gente busca, Google no sabrá para qué búsquedas mostrarte. Un buen título dice qué ofreces y dónde: «Fisioterapia deportiva en Sevilla | Nombre de la clínica» funciona mucho mejor que «Inicio».',
      },
      { h2: '6. La web no responde a lo que busca la gente' },
      {
        p: 'Puedes tener una web técnicamente perfecta y no aparecer porque no habla de lo que tus clientes escriben en Google. Si ofreces cinco servicios y todos están resumidos en una sola página, solo podrás competir por una búsqueda. Lo habitual es dedicar **una página a cada servicio importante**, con su propio título y contenido útil.',
      },
      { h2: '7. Es lenta, sobre todo en el móvil' },
      {
        p: 'Google usa la versión móvil de tu web para decidir cómo posicionarla, y la velocidad forma parte de la experiencia que evalúa. La causa más habitual de lentitud son las imágenes: fotos de varios megas mostradas en un hueco pequeño. Convertirlas a formatos como WebP y redimensionarlas suele reducir su peso más de un 90 %.',
      },
      { h2: '8. Nadie enlaza a tu web' },
      {
        p: 'Los enlaces desde otras webs son una señal de confianza. Para un negocio local no hace falta nada sofisticado: tu ficha de Google Business, directorios de tu sector, asociaciones a las que perteneces, proveedores o clientes que puedan mencionarte.',
      },
      { h2: '9. Tu negocio no tiene ficha de Google Business' },
      {
        p: 'Si tu cliente busca «servicio + Sevilla», lo primero que ve muchas veces es el mapa con tres negocios. Esos resultados salen de **Google Business Profile**, no de tu web. Crear y completar la ficha, con categorías correctas, fotos, horario y reseñas, es de lo más rentable que puede hacer un negocio local. Lo explico en [qué debe tener la web de un negocio local](/blog/que-debe-tener-la-web-de-un-negocio-local/).',
      },
      { h2: '¿Y ahora qué?' },
      {
        p: 'Si has encontrado alguna de estas causas en tu web, ya sabes por dónde empezar. Si prefieres que la revise yo, en el servicio de [SEO técnico](/seo-sevilla/) hago una auditoría completa, te explico qué falla en lenguaje claro y, si quieres, lo arreglo.',
      },
    ],
  },
  {
    slug: 'landing-page-o-web-corporativa',
    path: '/blog/landing-page-o-web-corporativa/',
    title: 'Landing page o web corporativa: ¿qué necesita tu negocio?',
    seo: {
      title: 'Landing page o web corporativa: diferencias y cuál necesita tu negocio',
      description:
        'Diferencias entre una landing page y una web corporativa, cuándo conviene cada una y por qué muchas veces la mejor opción es combinarlas. Guía práctica para decidir antes de invertir.',
    },
    excerpt:
      'Qué es cada una, para qué sirve, cuándo te conviene y por qué muchas veces la respuesta es «las dos, pero no a la vez».',
    datePublished: '2026-10-05',
    readingMinutes: 5,
    blocks: [
      {
        p: 'Antes de pedir presupuesto para una web conviene tener clara una decisión: ¿necesitas una web corporativa completa o una landing page? No es una cuestión de precio, sino de objetivo. Elegir mal significa pagar por algo que no hace lo que necesitas.',
      },
      { h2: 'Qué es una web corporativa' },
      {
        p: 'Es la web «de toda la vida» de un negocio: varias páginas que presentan quién eres, qué servicios ofreces, tu trabajo, cómo contactarte y, a menudo, un blog. Su objetivo es **dar confianza y ser encontrada**: que alguien que te busca en Google, o que te conoce por otra vía, encuentre todo lo que necesita para decidirse.',
      },
      {
        ul: [
          'Tiene **varias páginas**, normalmente una por servicio importante.',
          'Sirve para **posicionar en Google** por distintas búsquedas.',
          'Acompaña al negocio durante años y crece con él.',
        ],
      },
      { h2: 'Qué es una landing page' },
      {
        p: 'Es una sola página diseñada para **una única acción**: pedir presupuesto, reservar una cita, apuntarse a un evento o comprar un producto. Elimina todo lo que distrae (menús, enlaces a otras secciones) y concentra el mensaje en convencer y convertir.',
      },
      {
        ul: [
          'Tiene **un solo objetivo** y una sola llamada a la acción, repetida.',
          'Suele recibir tráfico de **anuncios, redes sociales o email**, no tanto de búsquedas en Google.',
          'Puede ser temporal (una campaña) o permanente (un servicio estrella).',
        ],
      },
      { h2: 'Cuándo te conviene cada una' },
      { h3: 'Te conviene una web corporativa si…' },
      {
        ul: [
          'Ofreces **varios servicios** y quieres que te encuentren por cada uno.',
          'Tus clientes **comparan antes de decidir** y necesitan ver experiencia, trabajos y confianza.',
          'Quieres que la web sea tu **carta de presentación** a largo plazo.',
        ],
      },
      { h3: 'Te conviene una landing page si…' },
      {
        ul: [
          'Vas a hacer **publicidad pagada** y necesitas una página que convierta ese tráfico.',
          'Quieres **validar un producto o servicio** nuevo antes de invertir más.',
          'Tienes un **lanzamiento o evento** con fecha.',
          'Vendes **un único producto** y todo gira alrededor de él.',
        ],
      },
      { h2: 'La opción que más recomiendo: combinarlas' },
      {
        p: 'En la práctica, muchos negocios terminan necesitando las dos cosas: una web corporativa que posiciona y da confianza, y landing pages específicas para cada campaña. Si el presupuesto es ajustado, mi consejo suele ser este:',
      },
      {
        ul: [
          'Si tu cliente llega sobre todo **buscando en Google**, empieza por una web corporativa bien hecha.',
          'Si vas a invertir en **anuncios desde el primer día**, empieza por una landing y amplía después.',
        ],
      },
      {
        p: 'Puedes ver en qué consiste cada servicio en [diseño web en Sevilla](/diseno-web-sevilla/) y [landing pages](/landing-pages/). Y si sigues con dudas, [escríbeme](/#contacto): te digo cuál encaja con tu caso, aunque al final no trabajemos juntos.',
      },
    ],
  },
  {
    slug: 'que-debe-tener-la-web-de-un-negocio-local',
    path: '/blog/que-debe-tener-la-web-de-un-negocio-local/',
    title: 'Qué debe tener la web de un negocio local en 2026 (checklist)',
    seo: {
      title: 'Qué debe tener la web de un negocio local: checklist para 2026',
      description:
        'Checklist con lo imprescindible en la web de un negocio local: información de contacto visible, una página por servicio, velocidad en móvil, SEO local, Google Business Profile, reseñas y aspectos legales.',
    },
    excerpt:
      'Una lista práctica para revisar tu web: lo que tus clientes esperan encontrar, lo que necesita Google y lo que exige la ley.',
    datePublished: '2026-10-05',
    readingMinutes: 6,
    blocks: [
      {
        p: 'Una clínica, una academia, un taller o un restaurante no necesitan la misma web que una gran empresa, pero sí comparten una lista de imprescindibles. Esta es la que uso cuando reviso la web de un negocio local. Puedes ir marcando lo que ya tienes.',
      },
      { h2: '1. Lo que el cliente necesita ver en segundos' },
      {
        ul: [
          '**Qué haces y dónde**, en la primera pantalla y sin adornos: «Clínica dental en Triana», no «Tu sonrisa, nuestra pasión».',
          '**Cómo contactarte**: teléfono que se pueda pulsar desde el móvil, WhatsApp si lo usas, email y formulario.',
          '**Dirección, horario y mapa**, si atiendes en un local.',
          '**Precios o, al menos, «desde»**. No tienen que ser exactos, pero ayudan a filtrar y generan confianza.',
          '**Pruebas de confianza**: reseñas, fotos reales del equipo y del local, trabajos realizados.',
        ],
      },
      { h2: '2. Lo que necesita Google' },
      {
        ul: [
          '**Una página por cada servicio importante**, con un título que diga el servicio y la ciudad.',
          '**Títulos y descripciones únicos** en cada página.',
          '**Datos estructurados** de negocio local (LocalBusiness), con el mismo nombre, dirección y teléfono que en tu ficha de Google.',
          '**Sitemap** enviado a Google Search Console y errores revisados de vez en cuando.',
          '**HTTPS** y una sola versión de la web (con o sin www, pero no las dos).',
        ],
      },
      {
        p: 'Si tu web no aparece cuando te buscan, en [este artículo](/blog/por-que-mi-web-no-aparece-en-google/) repaso las causas más habituales.',
      },
      { h2: '3. Velocidad y móvil' },
      {
        p: 'La mayoría de búsquedas locales se hacen desde el móvil, muchas veces con prisa y con mala cobertura. Tu web debe cargar rápido, leerse sin hacer zoom y tener los botones al alcance del pulgar. Revisa sobre todo el peso de las imágenes: es la causa número uno de webs lentas.',
      },
      { h2: '4. Google Business Profile y reseñas' },
      {
        p: 'Para búsquedas como «fisioterapeuta Sevilla» o «academia de inglés cerca de mí», Google muestra primero un mapa con tres negocios. Esos resultados dependen de tu **ficha de Google Business**: categoría principal correcta, horario, fotos, servicios y, sobre todo, **reseñas**. Pide reseña a tus clientes satisfechos de forma sistemática y responde a todas, también a las negativas.',
      },
      { h2: '5. Lo que exige la ley en España' },
      {
        ul: [
          '**Aviso legal** con tus datos identificativos (LSSI).',
          '**Política de privacidad** si recoges datos personales, por ejemplo en un formulario (RGPD).',
          '**Política de cookies y banner de consentimiento** si usas cookies de analítica o publicidad, que no deben activarse hasta que el visitante acepte.',
        ],
      },
      { h2: '6. Medir para mejorar' },
      {
        p: 'Instala una herramienta de analítica (Google Analytics u otra respetuosa con la privacidad) y revisa al menos una vez al mes cuántas visitas recibes, desde dónde llegan y cuántas terminan en contacto. Sin datos, cualquier decisión sobre la web es una suposición.',
      },
      { h2: '¿Te falta algo de la lista?' },
      {
        p: 'Si has marcado menos de la mitad, tu web probablemente te esté haciendo perder clientes. Puedo ayudarte tanto a [diseñar una web nueva](/diseno-web-sevilla/) como a [mejorar la que ya tienes](/seo-sevilla/).',
      },
    ],
  },
  {
    slug: 'cuanto-cuesta-una-pagina-web-en-sevilla',
    path: '/blog/cuanto-cuesta-una-pagina-web-en-sevilla/',
    pending: true,
    title: '¿Cuánto cuesta una página web en Sevilla en 2026?',
    seo: {
      title: '¿Cuánto cuesta una página web en Sevilla en 2026? Precios orientativos',
      description:
        'Cuánto cuesta una página web en Sevilla: precios orientativos de una landing page, una web corporativa y una tienda online, qué influye en el precio y qué gastos tiene mantenerla al año.',
    },
    excerpt:
      'Precios orientativos de una landing, una web corporativa y una tienda online, qué hace que suba o baje el precio y cuánto cuesta mantenerla.',
    datePublished: '2026-10-05',
    readingMinutes: 6,
    blocks: [
      {
        p: '«¿Cuánto cuesta una web?» es como preguntar cuánto cuesta un coche: depende. Pero eso no ayuda a nadie a decidir, así que en este artículo te doy precios orientativos, te explico qué hace que suban o bajen y qué gastos tiene una web una vez publicada.',
      },
      { h2: 'Precios orientativos' },
      {
        ul: [
          '**Landing page**: desde [[PENDIENTE: precio landing]] €.',
          '**Web corporativa** (4 a 6 páginas): desde [[PENDIENTE: precio web corporativa]] €.',
          '**Tienda online**: desde [[PENDIENTE: precio tienda online]] €.',
        ],
      },
      { h2: 'Qué influye en el precio' },
      {
        ul: [
          '**Número de páginas** y cuánto contenido hay que preparar.',
          '**Diseño a medida o plantilla**: una plantilla es más barata, pero tu web se parecerá a muchas otras.',
          '**Funcionalidades**: reservas, pagos, áreas privadas, integraciones con otros programas.',
          '**Textos e imágenes**: si los aportas tú o hay que crearlos.',
          '**SEO**: si la web se entrega preparada para Google o solo «publicada».',
        ],
      },
      { h2: 'Gastos una vez publicada' },
      {
        ul: [
          '**Dominio**: unos 10–20 € al año para un .com o .es.',
          '**Hosting**: desde unos pocos euros al mes para una web pequeña.',
          '**Mantenimiento**: [[PENDIENTE: precio o condiciones de mantenimiento]].',
        ],
      },
      { h2: 'Cuidado con lo barato' },
      {
        p: 'Una web muy barata suele salir cara después: plantillas pesadas que cargan lento, sin SEO, sin formulario que funcione o con un contrato que te ata al proveedor. Pregunta siempre qué incluye exactamente, si el dominio y la web quedan a tu nombre y qué pasa si quieres cambiar de proveedor.',
      },
      {
        p: 'Si quieres un precio cerrado para tu caso, [cuéntame tu proyecto](/#contacto) y te paso una propuesta sin compromiso. Mira también qué incluye el servicio de [diseño web en Sevilla](/diseno-web-sevilla/).',
      },
    ],
  },
]
