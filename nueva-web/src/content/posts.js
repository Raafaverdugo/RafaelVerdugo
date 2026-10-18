// Artículos del blog. `pending: true` = falta información de Rafael y no se publica
// (el build falla si una página publicada contiene [[PENDIENTE: …]]).

export const posts = [
  {
    slug: 'como-elegir-software-gestion-citas',
    path: '/blog/como-elegir-software-gestion-citas/',
    title: 'Cómo elegir un software de gestión de citas para tu negocio',
    seo: {
      title: 'Cómo elegir un software de gestión de citas para tu negocio',
      description: 'Qué debe tener un software de gestión de citas: reservas online 24/7, agenda por empleado, ficha de clientes, facturación y precio. Guía para elegir.',
    },
    excerpt:
      'Las funciones que de verdad importan en un programa de citas para clínicas, centros de estética, peluquerías y cualquier negocio con cita previa.',
    datePublished: '2026-10-18',
    readingMinutes: 6,
    blocks: [
      {
        p: 'Si tu negocio trabaja con cita previa, seguramente conoces el problema: la agenda en papel o en una hoja de cálculo, llamadas y WhatsApps a todas horas para reservar, citas que se solapan y clientes que no se presentan. Un software de gestión de citas resuelve buena parte de esto, pero no todos sirven para todos los negocios. Esto es lo que conviene mirar antes de elegir.',
      },
      {
        note: 'Aviso: desarrollo mi propio software de citas, [AppointDate](/AppointDate/). Lo menciono al final, pero los criterios de esta guía sirven para comparar cualquier programa.',
      },
      { h2: '1. Reservas online sin intervención' },
      {
        p: 'Lo primero es que tus clientes puedan **reservar solos, a cualquier hora**, desde el móvil y sin descargar ninguna aplicación. Comprueba que el portal de reservas muestre solo los huecos realmente libres y que puedas compartirlo fácilmente: en tu web, en tu ficha de Google o por WhatsApp.',
      },
      { h2: '2. Disponibilidad automática' },
      {
        p: 'El sistema debe calcular los huecos libres teniendo en cuenta la duración de cada servicio, tu horario, tus vacaciones y los días especiales. Si tienes que bloquear huecos a mano, el programa no te está ahorrando trabajo.',
      },
      { h2: '3. Agenda por empleado' },
      {
        p: 'Si trabajáis varias personas, cada una necesita su agenda y su horario, y el cliente debería poder elegir con quién reserva o dejar que el sistema asigne a quien esté libre. Revisa también si puedes ver la agenda de todo el equipo de un vistazo.',
      },
      { h2: '4. Ficha de cliente con historial' },
      {
        p: 'Más allá de nombre y teléfono, es muy útil tener el **historial de citas**, notas y preferencias de cada cliente. En sectores como el sanitario o el estético, comprueba además que el programa permita guardar la información que necesitas para tu trabajo y que trate los datos personales con la seguridad que exige la ley.',
      },
      {
        cta: {
          title: '¿Quieres ver si AppointDate encaja en tu negocio?',
          text: 'Cuéntame cómo trabajas hoy y te digo si te encaja o qué habría que adaptar.',
        },
      },
      { h2: '5. Facturación integrada' },
      {
        p: 'Si al terminar cada cita tienes que pasar los datos a otro programa para facturar, perderás tiempo y cometerás errores. Un buen sistema genera la factura o el ticket a partir de la propia cita.',
      },
      { h2: '6. Avisos al cliente' },
      {
        p: 'Los recordatorios por email o mensaje antes de la cita reducen las ausencias. Comprueba qué tipo de avisos envía el programa y si puedes configurar cuándo se envían.',
      },
      { h2: '7. Precio, permanencia y soporte' },
      {
        ul: [
          '**Cuota mensual** y si cambia según el número de empleados o de citas.',
          '**Coste de alta o instalación**, si lo hay.',
          '**Permanencia**: cuánto tiempo te comprometes.',
          '**Soporte**: si hay una persona a la que escribir cuando algo no funciona, y en tu idioma.',
          '**Tus datos**: si puedes exportarlos si un día decides cambiar de programa.',
        ],
      },
      { h2: 'Programa estándar o hecho a medida' },
      {
        p: 'Para la mayoría de negocios, un programa estándar bien elegido es suficiente. Si tu forma de trabajar es muy particular, quizá te compense algo adaptado; lo explico en [software a medida o estándar](/blog/software-a-medida-o-estandar/).',
      },
      { h2: 'Mi propuesta: AppointDate' },
      {
        p: '[AppointDate](/AppointDate/) es el sistema que he desarrollado para negocios con cita previa: gestión de citas, ficha de clientes, agenda de empleados, disponibilidad automática, facturación y un portal para que tus clientes reserven online. Si quieres comprobar si cumple lo que necesitas, en su página tienes las funciones y los planes, y puedes escribirme para resolver cualquier duda.',
      },
    ],
  },
  {
    slug: 'como-crear-una-tienda-online',
    path: '/blog/como-crear-una-tienda-online/',
    title: 'Cómo crear una tienda online: Shopify, WooCommerce o a medida',
    seo: {
      title: 'Crear una tienda online: Shopify, WooCommerce o a medida',
      description: 'Cómo crear una tienda online paso a paso y qué opción elegir: Shopify, WooCommerce o una tienda a medida. Ventajas, inconvenientes y errores comunes.',
    },
    excerpt:
      'Los pasos para montar una tienda online y cómo decidir entre Shopify, WooCommerce o una tienda a medida según tu negocio.',
    datePublished: '2026-10-18',
    readingMinutes: 7,
    blocks: [
      {
        p: 'Vender por internet está al alcance de cualquier negocio, pero entre «tener una tienda online» y «vender con una tienda online» hay mucha distancia. En esta guía te explico los pasos y, sobre todo, cómo elegir la herramienta adecuada para tu caso.',
      },
      { h2: 'Antes de elegir herramienta: 4 preguntas' },
      {
        ol: [
          '**¿Qué vendes?** Productos físicos con envío, productos digitales, cursos, reservas…',
          '**¿Cuántos productos y variantes?** No es lo mismo vender 10 productos que 2.000 con tallas y colores.',
          '**¿Cómo gestionas hoy el stock y los pedidos?** Si ya tienes un programa de gestión, la tienda debería conectarse con él.',
          '**¿Quién va a mantenerla?** Si vas a hacerlo tú, prioriza la facilidad de uso.',
        ],
      },
      { h2: 'Opción 1: Shopify' },
      {
        p: 'Es una plataforma «todo incluido»: pagas una cuota mensual y te olvidas del alojamiento, la seguridad y las actualizaciones.',
      },
      {
        ul: [
          '**A favor**: rápida de poner en marcha, estable y fácil de gestionar sin conocimientos técnicos.',
          '**En contra**: cuota mensual fija, comisiones según el plan y la pasarela de pago, y muchas funciones extra dependen de aplicaciones de pago.',
          '**Ideal para**: catálogos pequeños o medianos y quien quiere empezar rápido sin preocuparse de la parte técnica.',
        ],
      },
      { h2: 'Opción 2: WooCommerce (WordPress)' },
      {
        p: 'Es un complemento gratuito que convierte una web WordPress en una tienda. Necesitas tu propio alojamiento y alguien que la mantenga actualizada.',
      },
      {
        ul: [
          '**A favor**: muy flexible, sin comisiones de la plataforma y con contenido y tienda en un mismo sitio, lo que ayuda al SEO.',
          '**En contra**: requiere mantenimiento (actualizaciones, seguridad, copias de seguridad) y, si se llena de plugins, puede volverse lenta.',
          '**Ideal para**: negocios que ya tienen web en WordPress o que quieren combinar tienda y contenido.',
        ],
      },
      { h2: 'Opción 3: tienda a medida' },
      {
        p: 'Se programa para tu negocio concreto, sin las limitaciones de una plataforma genérica.',
      },
      {
        ul: [
          '**A favor**: control total del diseño, del proceso de compra y de las integraciones; muy rápida y sin pagar por funciones que no usas.',
          '**En contra**: la inversión inicial es mayor y dependes de quien la desarrolla para los cambios.',
          '**Ideal para**: procesos de venta particulares (por ejemplo, venta de cursos con área de alumnos) o integraciones que las plataformas no resuelven bien.',
        ],
      },
      {
        cta: {
          title: '¿Quieres tu tienda online sin complicarte?',
          text: 'Cuéntame qué vendes y te digo qué opción te conviene y cómo lo haría.',
        },
      },
      { h2: 'Los pasos para crearla' },
      {
        ol: [
          '**Dominio y plataforma**: elige el nombre y la opción que mejor encaje.',
          '**Catálogo**: fotos propias y bien optimizadas, descripciones que respondan a las dudas del cliente y precios claros.',
          '**Pagos**: tarjeta como mínimo; según tu público, PayPal o Bizum.',
          '**Envíos y devoluciones**: tarifas, plazos y política de devoluciones visibles antes de pagar.',
          '**Textos legales**: aviso legal, privacidad, cookies y condiciones de venta.',
          '**SEO desde el principio**: URLs limpias, categorías bien pensadas y una ficha de producto por producto, no textos copiados del fabricante.',
          '**Medición**: analítica para saber de dónde vienen las ventas.',
        ],
      },
      { h2: 'Errores que más ventas cuestan' },
      {
        ul: [
          'Obligar a registrarse para comprar.',
          'Mostrar los gastos de envío solo al final del proceso.',
          'Fotos pesadas que hacen la tienda lenta en el móvil.',
          'No dejar claro cómo contactar si hay un problema con el pedido.',
        ],
      },
      {
        p: 'Si prefieres que me encargue yo, en [diseño de tiendas online en Sevilla](/tiendas-online-sevilla/) tienes cómo trabajo, y un ejemplo real de venta online en el caso de [Licencia de Armas Fácil](/proyectos/licencia-de-armas-facil/).',
      },
    ],
  },
  {
    slug: 'software-a-medida-o-estandar',
    path: '/blog/software-a-medida-o-estandar/',
    title: 'Software a medida o estándar: cuándo merece la pena cada uno',
    seo: {
      title: 'Software a medida o estándar: ¿cuál te conviene?',
      description: 'Diferencias entre un software a medida y uno estándar, ventajas e inconvenientes de cada uno y señales de que tu negocio necesita algo hecho a medida.',
    },
    excerpt:
      'Cuándo basta con un programa del mercado y cuándo compensa uno hecho para tu negocio, explicado sin tecnicismos.',
    datePublished: '2026-10-18',
    readingMinutes: 5,
    blocks: [
      {
        p: 'Tarde o temprano, casi todos los negocios se hacen la misma pregunta: ¿seguimos con hojas de cálculo, contratamos un programa del mercado o encargamos uno a medida? No hay una respuesta única, pero sí señales claras para decidir.',
      },
      { h2: 'Qué es cada uno' },
      {
        ul: [
          '**Software estándar**: un programa hecho para muchos negocios a la vez (un CRM, un programa de facturación, una agenda de citas). Pagas una licencia o una cuota y lo usas tal y como está.',
          '**Software a medida**: una herramienta diseñada para tu forma concreta de trabajar. Hace lo que necesitas y nada más.',
        ],
      },
      { h2: 'Ventajas del software estándar' },
      {
        ul: [
          'Lo tienes funcionando **en poco tiempo**.',
          'La inversión inicial suele ser **menor**.',
          'El fabricante se encarga de las **actualizaciones** y del soporte.',
        ],
      },
      {
        p: 'Su punto débil: **te adaptas tú al programa**. Si tu proceso no encaja, acabas con trucos, tareas manuales o pagando por funciones que no usas.',
      },
      { h2: 'Ventajas del software a medida' },
      {
        ul: [
          'Se adapta **a cómo trabajas tú**, no al revés.',
          'Solo incluye **lo que necesitas**, así que es más sencillo de usar.',
          'Puede **conectarse** con las herramientas que ya utilizas.',
          'Puede convertirse en una **ventaja frente a tu competencia**, por ejemplo un portal para tus clientes.',
        ],
      },
      {
        p: 'Su punto débil: requiere una **inversión inicial** y depender de quien lo desarrolla para las mejoras.',
      },
      {
        cta: {
          title: '¿No sabes qué opción te conviene?',
          text: 'Cuéntame cómo trabajáis hoy y te digo con sinceridad si te basta un programa estándar.',
        },
      },
      { h2: 'Señales de que te conviene algo a medida' },
      {
        ul: [
          'Pierdes **horas cada semana** copiando datos de un sitio a otro.',
          'Has probado varios programas y **ninguno encaja** con tu proceso.',
          'Usas **tres o cuatro herramientas** distintas para algo que debería estar en una.',
          'Tus datos están **repartidos** entre hojas de cálculo, emails y notas.',
          'Quieres ofrecer a tus clientes algo que **te diferencie**.',
        ],
      },
      { h2: 'Y señales de que te basta uno estándar' },
      {
        ul: [
          'Tu proceso es **parecido al de la mayoría** de negocios de tu sector.',
          'Existe un programa que cubre el **80 % de lo que necesitas** y el resto no es crítico.',
          'Necesitas empezar **ya** y no puedes esperar a un desarrollo.',
        ],
      },
      { h2: 'La opción intermedia' },
      {
        p: 'No siempre hay que elegir entre todo o nada. A veces lo más rentable es usar un programa estándar y **automatizar** las tareas que se le escapan, o empezar con una herramienta a medida pequeña e ir ampliándola. Un ejemplo de software que he desarrollado es [AppointDate](/AppointDate/), mi sistema de gestión de citas.',
      },
      {
        p: 'Si quieres ver qué tipo de herramientas desarrollo, tienes ejemplos en [software a medida en Sevilla](/software-a-medida/) y en el caso de [The Shelter](/proyectos/the-shelter/).',
      },
    ],
  },
  {
    slug: 'wordpress-o-web-a-medida',
    path: '/blog/wordpress-o-web-a-medida/',
    title: 'WordPress o web a medida: qué le conviene a tu negocio',
    seo: {
      title: 'WordPress o web a medida: qué le conviene a tu negocio',
      description: 'WordPress o web programada a medida: ventajas, inconvenientes, velocidad, mantenimiento y SEO de cada opción para elegir la web de tu negocio.',
    },
    excerpt:
      'Las diferencias reales entre una web en WordPress y una web a medida en velocidad, mantenimiento, autonomía y SEO.',
    datePublished: '2026-10-18',
    readingMinutes: 5,
    blocks: [
      {
        p: 'Cuando pides presupuesto para una web, casi siempre aparece la misma duda: ¿WordPress o una web hecha a medida? Las dos opciones pueden dar muy buen resultado. La clave está en qué necesita tu negocio y en quién va a mantener la web.',
      },
      { h2: 'Qué es cada opción' },
      {
        ul: [
          '**WordPress**: un gestor de contenidos muy extendido. La web se monta sobre una plantilla o un constructor visual y se amplía con plugins.',
          '**Web a medida**: se diseña y se programa específicamente para tu negocio, sin plantilla de base.',
        ],
      },
      { h2: 'WordPress: a favor y en contra' },
      {
        ul: [
          '**Autonomía**: puedes editar textos, fotos y entradas del blog desde un panel.',
          '**Ecosistema enorme**: hay plugins para casi todo.',
          '**Pero**: las plantillas y los plugins añaden peso y la web puede volverse lenta.',
          '**Pero**: necesita actualizaciones frecuentes; si se descuida, es un objetivo habitual de ataques.',
          '**Pero**: muchas webs en WordPress se parecen entre sí.',
        ],
      },
      { h2: 'Web a medida: a favor y en contra' },
      {
        ul: [
          '**Velocidad**: solo lleva el código que necesita, así que carga muy rápido, algo que valoran tanto tus visitas como Google.',
          '**Diseño único**: no parte de una plantilla, se construye alrededor de tu marca.',
          '**Menos mantenimiento de seguridad**: sin plugins de terceros que actualizar.',
          '**Pero**: para cambiar algo, dependes de quien la desarrolló, salvo que se prepare para que edites contenidos.',
          '**Pero**: ampliarla con funciones nuevas requiere desarrollo.',
        ],
      },
      {
        cta: {
          title: '¿Dudas entre una opción y otra?',
          text: 'Cuéntame qué necesitas y te digo cuál te conviene, aunque al final no trabajemos juntos.',
        },
      },
      { h2: '¿Y para el SEO, cuál es mejor?' },
      {
        p: 'Google no premia una tecnología concreta: premia webs **rápidas, bien estructuradas y con buen contenido**. Un WordPress bien optimizado puede posicionar muy bien, y una web a medida mal hecha puede no aparecer. Dicho esto, una web a medida parte con ventaja en velocidad y te da control total sobre títulos, datos estructurados y código. Lo que sí importa es comprobar que Google puede leer el contenido sin problemas, algo que repaso en [por qué mi web no aparece en Google](/blog/por-que-mi-web-no-aparece-en-google/).',
      },
      { h2: 'Cómo decidir' },
      {
        ul: [
          '**Elige WordPress** si vas a publicar contenido a menudo y quieres hacerlo tú, o si necesitas funciones que ya resuelve un plugin conocido.',
          '**Elige una web a medida** si te importan la velocidad y un diseño propio, si no quieres preocuparte de actualizaciones de plugins o si tu web necesita funciones particulares.',
        ],
      },
      {
        p: 'Esta misma web está hecha a medida. Puedes ver cómo trabajo en [páginas web para empresas en Sevilla](/paginas-web-empresas-sevilla/), y el coste de mantenerlas en [cuánto cuesta mantener una página web](/blog/cuanto-cuesta-mantener-una-pagina-web/).',
      },
    ],
  },
  {
    slug: 'cuanto-cuesta-mantener-una-pagina-web',
    path: '/blog/cuanto-cuesta-mantener-una-pagina-web/',
    title: '¿Cuánto cuesta mantener una página web al mes?',
    seo: {
      title: '¿Cuánto cuesta mantener una página web al mes? (2026)',
      description: 'Cuánto cuesta mantener una página web: mantenimiento desde 40 €/mes para una landing, desde 49 €/mes para una web y desde 69 €/mes para una tienda.',
    },
    excerpt:
      'Mis cuotas de mantenimiento desde, qué suele incluir un mantenimiento web, qué gastos hay si lo haces tú y cuándo merece la pena.',
    datePublished: '2026-10-18',
    readingMinutes: 5,
    blocks: [
      {
        p: 'Una web no termina el día que se publica. Hay que pagar el dominio y el alojamiento, mantenerla actualizada y segura, y hacer cambios de vez en cuando. Por eso, además del precio de crearla, conviene saber cuánto cuesta tenerla funcionando cada mes.',
      },
      { h2: 'Mis cuotas de mantenimiento' },
      {
        ul: [
          '[Landing page](/landing-pages/): desde **40 €/mes**.',
          '[Web corporativa](/paginas-web-empresas-sevilla/): desde **49 €/mes**.',
          '[Tienda online](/tiendas-online-sevilla/): desde **69 €/mes**.',
          '[Software a medida](/software-a-medida/): desde **69 €/mes**.',
        ],
      },
      {
        note: 'Son precios de partida, en euros. Cada mantenimiento es un mundo: no es lo mismo una landing que una tienda con pedidos diarios o un software que usa tu equipo cada día. En la propuesta te detallo qué cubre la cuota de tu proyecto y cuánto es al mes.',
      },
      { h2: 'Qué suele incluir un mantenimiento web' },
      {
        p: 'Cada profesional lo plantea a su manera, así que pregunta siempre qué entra exactamente. Lo habitual es que cubra parte de esto:',
      },
      {
        ul: [
          '**Alojamiento (hosting)** y, a veces, el dominio.',
          '**Actualizaciones** del sistema, plugins o librerías, para que la web siga funcionando y sea segura.',
          '**Copias de seguridad** para poder recuperar la web si algo falla.',
          '**Vigilancia**: que la web siga en línea, que el formulario siga enviando y que no haya errores.',
          '**Pequeños cambios**: textos, fotos, precios o una sección nueva.',
          '**Soporte**: alguien a quien escribir cuando tienes una duda o algo no va bien.',
        ],
      },
      {
        cta: {
          title: '¿Quieres saber cuánto te costaría a ti?',
          text: 'Cuéntame qué web tienes o necesitas y te digo qué mantenimiento le hace falta y desde cuánto.',
        },
      },
      { h2: '¿Y si lo hago yo?' },
      {
        p: 'Se puede, sobre todo con webs sencillas. En ese caso, los gastos mínimos son:',
      },
      {
        ul: [
          '**Dominio**: unos 10–20 € al año para un .com o .es.',
          '**Hosting**: desde unos pocos euros al mes para una web pequeña.',
          '**Tu tiempo**: actualizar, revisar que todo funcione y resolver los problemas cuando aparecen.',
        ],
      },
      {
        p: 'El riesgo no es el precio, sino el descuido: una web sin actualizar ni copias de seguridad puede dejar de funcionar o ser atacada justo cuando más la necesitas, y un formulario roto puede hacerte perder clientes durante semanas sin que te enteres.',
      },
      { h2: 'Cuándo merece la pena pagar un mantenimiento' },
      {
        ul: [
          'Si **la web te trae clientes** y que se caiga te cuesta dinero.',
          'Si tienes una **tienda online** o un **software** que se usa a diario.',
          'Si **no tienes tiempo** o no quieres preocuparte de la parte técnica.',
          'Si quieres que alguien haga los **cambios** por ti cuando los necesites.',
        ],
      },
      {
        p: 'Si todavía no tienes web, mira también [cuánto cuesta una página web](/blog/cuanto-cuesta-una-pagina-web-en-sevilla/): ahí tienes mis precios de partida para crearla.',
      },
    ],
  },
  {
    slug: 'como-aparecer-en-google-maps',
    path: '/blog/como-aparecer-en-google-maps/',
    title: 'Cómo aparecer en Google Maps con tu negocio: guía paso a paso',
    seo: {
      title: 'Cómo aparecer en Google Maps con tu negocio (paso a paso)',
      description: 'Guía para crear y verificar tu ficha de Google Business y aparecer en Google Maps: categoría, zona de servicio, fotos, reseñas y errores a evitar.',
    },
    excerpt:
      'Cómo crear, verificar y completar tu ficha de Google Business para que tu negocio salga en Google Maps y en las búsquedas de tu zona.',
    datePublished: '2026-10-18',
    readingMinutes: 7,
    blocks: [
      {
        p: 'Cuando alguien busca «servicio + ciudad» en Google, lo primero que ve muchas veces no son webs, sino un mapa con tres negocios. Esos resultados salen de **Google Business Profile**, la ficha gratuita de Google para empresas. Te explico cómo crearla y completarla paso a paso; es el mismo proceso que he seguido con mi propia ficha.',
      },
      { h2: 'Antes de empezar: ¿qué tipo de negocio eres?' },
      {
        p: 'Google distingue entre dos tipos de negocio y es importante elegir bien, porque cambia lo que se publica:',
      },
      {
        ul: [
          '**Con local abierto al público** (una tienda, una clínica, un restaurante): tu dirección aparece en el mapa y la gente puede ir.',
          '**De servicios** (vas tú al cliente o trabajas en remoto, como un fontanero, un fotógrafo o un diseñador web): defines una **zona de servicio** y tu dirección no se muestra.',
        ],
      },
      {
        note: 'No marques que tienes local si trabajas desde casa. Google suspende fichas por indicar una dirección que los clientes no pueden visitar.',
      },
      { h2: '1. Crea la ficha' },
      {
        ol: [
          'Entra en **business.google.com** con la cuenta de Google que quieras usar para el negocio.',
          'Escribe el **nombre de tu negocio** tal y como lo usas en la vida real, sin añadir palabras clave.',
          'Elige la **categoría principal**: la que mejor describe lo que haces. Es uno de los datos que más pesa para aparecer en las búsquedas.',
          'Indica si tienes local o si eres un negocio de servicios, y en ese caso añade tu **zona de servicio** (ciudades o códigos postales).',
          'Añade **teléfono** y **web**.',
        ],
      },
      { h2: '2. Verifica la ficha' },
      {
        p: 'Hasta que Google no verifica que el negocio es real, la ficha no aparece. Lo habitual hoy es la verificación por **vídeo**: grabas un vídeo corto en el que se vea dónde trabajas, alguna herramienta de trabajo y algo que demuestre que el negocio es tuyo. Después Google lo revisa, y puede tardar **hasta cinco días**.',
      },
      {
        p: 'Mientras está en revisión, **no cambies el nombre, la categoría ni la zona de servicio**: cualquier cambio en esos datos puede reiniciar la verificación.',
      },
      {
        cta: {
          title: '¿Prefieres que te ayude con la ficha?',
          text: 'Te la dejo configurada y coherente con tu web para que Google te muestre en tu zona.',
        },
      },
      { h2: '3. Completa todo lo que puedas' },
      {
        p: 'Una ficha a medias compite peor que una completa. Una vez verificada, rellena:',
      },
      {
        ul: [
          '**Descripción**: qué haces, para quién y dónde, en lenguaje natural. Sin URLs ni frases promocionales del tipo «¡oferta!».',
          '**Servicios** y **productos**, con su descripción y, si quieres, su precio.',
          '**Horario** real de atención.',
          '**Fotos reales**: tu logo o una foto tuya, una portada y fotos de tu trabajo. Evita imágenes de bancos de fotos.',
          '**Botón de chat**: puedes enlazar tu WhatsApp para que te escriban directamente desde la ficha.',
        ],
      },
      { h2: '4. Consigue reseñas (y respóndelas)' },
      {
        p: 'Las reseñas son una de las señales que más influyen en el mapa. En el panel de tu ficha, el botón **«Pedir una reseña»** te da un enlace que puedes enviar por WhatsApp o email a tus clientes.',
      },
      {
        ul: [
          'Pídelas **solo a clientes reales** y sin ofrecer nada a cambio: Google penaliza las reseñas falsas o incentivadas.',
          'Pídelas **justo después de terminar un trabajo**, que es cuando el cliente está más contento.',
          '**Responde a todas**, también a las negativas, con educación y sin discutir.',
        ],
      },
      { h2: '5. Que tu web y tu ficha digan lo mismo' },
      {
        p: 'Google cruza los datos de tu ficha con los de tu web y con los directorios en los que aparezcas. **Nombre, teléfono y zona** deben coincidir en todos los sitios. En tu web, además, conviene incluir esos datos en los datos estructurados (Schema.org) y enlazar la ficha.',
      },
      {
        p: 'Si tu web tiene problemas para aparecer en Google, en [este artículo](/blog/por-que-mi-web-no-aparece-en-google/) repaso las causas más habituales.',
      },
      { h2: '6. Mantén la ficha viva' },
      {
        p: 'Publica de vez en cuando desde la sección **«Publicaciones»**: un trabajo terminado, una novedad o un artículo de tu blog. Sube fotos nuevas y revisa cada mes la sección **«Rendimiento»** para ver cuántas personas te encuentran, te llaman o visitan tu web desde la ficha.',
      },
      { h2: 'Errores que te pueden costar la ficha' },
      {
        ul: [
          'Añadir palabras clave al nombre («Nombre + diseño web barato Sevilla») si no es tu nombre comercial real.',
          'Indicar una dirección falsa o una oficina virtual en la que no atiendes.',
          'Comprar reseñas o pedir a familiares que dejen opiniones como si fueran clientes.',
          'Crear varias fichas para el mismo negocio.',
        ],
      },
      { h2: '¿Cuánto tarda en notarse?' },
      {
        p: 'Que la ficha aparezca cuando te buscan por tu nombre suele llevar días o pocas semanas. Aparecer en el mapa para búsquedas competidas, como «servicio + ciudad», depende sobre todo de las reseñas, de lo completa que esté la ficha y de tu cercanía a quien busca, y suele llevar meses. Si quieres trabajarlo a fondo, mira el servicio de [posicionamiento web en Sevilla](/seo-sevilla/).',
      },
    ],
  },
  {
    slug: 'cuanto-cuesta-una-landing-page',
    path: '/blog/cuanto-cuesta-una-landing-page/',
    title: '¿Cuánto cuesta el diseño de una landing page?',
    seo: {
      title: '¿Cuánto cuesta el diseño de una landing page? Desde 199 €',
      description: 'Cuánto cuesta diseñar una landing page: precio desde 199 €, qué incluye, qué hace que suba el precio y qué gastos tiene después. Sin letra pequeña.',
    },
    excerpt:
      'Mi precio de partida para una landing page, qué incluye, qué hace que el precio suba y qué gastos tiene una vez publicada.',
    datePublished: '2026-10-18',
    readingMinutes: 5,
    blocks: [
      {
        p: 'Si vas a lanzar una campaña, un servicio nuevo o un evento, necesitas una página que convierta las visitas en contactos. Antes de pedir presupuestos, esto es lo que conviene saber sobre el precio de una landing page.',
      },
      { h2: 'Mi precio: desde 199 €' },
      {
        p: 'Diseño y desarrollo landing pages **desde 199 €**. Es un precio de partida: el precio final depende de lo que necesite tu página, y siempre te lo doy cerrado en la propuesta antes de empezar. Como el resto de mis proyectos, lleva además un **mantenimiento mensual desde 40 €/mes**, que te detallo en la propuesta. Lo explico en [cuánto cuesta mantener una página web](/blog/cuanto-cuesta-mantener-una-pagina-web/).',
      },
      { h2: 'Qué incluye una landing page conmigo' },
      {
        ul: [
          '**Diseño a medida**, pensado primero para móvil.',
          '**Estructura orientada a la conversión**: un mensaje claro en la primera pantalla, beneficios, pruebas de confianza y una sola llamada a la acción.',
          '**Formulario o botón de contacto** (también por WhatsApp) que te llega directamente.',
          '**Carga rápida**: código ligero e imágenes optimizadas, importante si pagas por anuncios.',
          '**Analítica** para saber cuántas visitas se convierten en contactos.',
        ],
      },
      {
        p: 'Puedes ver el servicio completo en [diseño de landing pages](/landing-pages/).',
      },
      {
        cta: {
          title: '¿Quieres un precio cerrado para tu landing?',
          text: 'Cuéntame qué quieres conseguir y te paso una propuesta con precio y plazo, sin compromiso.',
        },
      },
      { h2: 'Qué hace que el precio suba' },
      {
        ul: [
          '**Textos**: si los aportas tú o hay que escribirlos desde cero.',
          '**Secciones y contenido**: no es lo mismo una página corta para un evento que una larga para vender un servicio caro.',
          '**Integraciones**: conectar el formulario con tu CRM, tu herramienta de email marketing o un sistema de pago.',
          '**Varias versiones**: por ejemplo, una por campaña o por tipo de cliente.',
          '**Plazos urgentes**.',
        ],
      },
      { h2: 'Gastos aparte' },
      {
        ul: [
          '**Dominio y hosting**, si la landing no va dentro de una web que ya tienes.',
          '**Publicidad**: si vas a hacer anuncios en Google o en redes, el presupuesto de la campaña se paga aparte, directamente a la plataforma.',
        ],
      },
      { h2: '¿Landing page o web completa?' },
      {
        p: 'Si lo que necesitas es presentar todo tu negocio y aparecer en Google por varios servicios, quizá te conviene más una web corporativa (desde 249 €). Lo explico en [landing page o web corporativa: ¿cuál necesitas?](/blog/landing-page-o-web-corporativa/), y tienes todos mis precios en [cuánto cuesta una página web](/blog/cuanto-cuesta-una-pagina-web-en-sevilla/).',
      },
    ],
  },
  {
    slug: 'por-que-mi-web-no-aparece-en-google',
    path: '/blog/por-que-mi-web-no-aparece-en-google/',
    title: '¿Por qué mi web no aparece en Google? 9 causas habituales y cómo solucionarlas',
    seo: {
      title: '¿Por qué mi web no aparece en Google? 9 causas',
      description:
        'Si tu web no aparece en Google, casi siempre es por una de estas causas: no está indexada, bloquea a Google, depende de JavaScript o es lenta.',
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
      {
        cta: {
          title: '¿Prefieres que revise tu web yo?',
          text: 'Te digo qué está frenando tu web en Google y cómo arreglarlo, en lenguaje claro.',
        },
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
      title: 'Landing page o web corporativa: ¿cuál necesitas?',
      description:
        'Diferencias entre una landing page y una web corporativa, cuándo conviene cada una y por qué muchas veces lo mejor es combinarlas.',
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
        p: 'Puedes ver en qué consiste cada servicio en [páginas web para empresas](/paginas-web-empresas-sevilla/) y [landing pages](/landing-pages/). Y si sigues con dudas, [escríbeme](/contacto/): te digo cuál encaja con tu caso, aunque al final no trabajemos juntos.',
      },
    ],
  },
  {
    slug: 'que-debe-tener-la-web-de-un-negocio-local',
    path: '/blog/que-debe-tener-la-web-de-un-negocio-local/',
    title: 'Qué debe tener la web de un negocio local en 2026 (checklist)',
    seo: {
      title: 'Qué debe tener la web de un negocio local (checklist)',
      description:
        'Checklist para la web de un negocio local: contacto visible, una página por servicio, velocidad en móvil, SEO local, reseñas y textos legales.',
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
      {
        cta: {
          title: '¿Tu web no cumple la lista?',
          text: 'Cuéntame qué tienes ahora y te digo qué le falta para conseguir más clientes.',
        },
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
        p: 'Si has marcado menos de la mitad, tu web probablemente te esté haciendo perder clientes. Puedo ayudarte tanto a [diseñar una web nueva](/paginas-web-empresas-sevilla/) como a [mejorar la que ya tienes](/seo-sevilla/).',
      },
    ],
  },
  {
    slug: 'cuanto-cuesta-una-pagina-web-en-sevilla',
    path: '/blog/cuanto-cuesta-una-pagina-web-en-sevilla/',
    title: '¿Cuánto cuesta una página web en 2026?',
    seo: {
      title: '¿Cuánto cuesta una página web en 2026? Precios desde 199 €',
      description:
        'Cuánto cuesta una página web: landing page desde 199 €, web corporativa desde 249 €, tienda online desde 299 €. Qué influye en el precio.',
    },
    excerpt:
      'Mis precios de partida para landing pages, webs corporativas, tiendas online, software a medida y automatizaciones, qué hace que suban y cómo funciona el mantenimiento.',
    datePublished: '2026-10-05',
    readingMinutes: 5,
    blocks: [
      {
        p: '«¿Cuánto cuesta una web?» es como preguntar cuánto cuesta un coche: depende. Pero eso no ayuda a nadie a decidir, así que aquí tienes mis precios de partida, qué incluye cada uno y qué hace que un proyecto cueste más o menos.',
      },
      { h2: 'Mis precios de partida' },
      {
        ul: [
          '[Landing page](/landing-pages/): desde **199 €**.',
          '[Web corporativa](/paginas-web-empresas-sevilla/): desde **249 €**.',
          '[Tienda online](/tiendas-online-sevilla/): desde **299 €**.',
          '[Software a medida](/software-a-medida/): desde **99 €**. Si buscas un sistema de citas ya hecho, mira [AppointDate](/AppointDate/).',
          '**Automatizaciones** (tareas repetitivas, conexiones entre herramientas, avisos automáticos…): desde **79 €**.',
        ],
      },
      {
        note: 'Todos los precios son en euros. Son precios de partida: el precio final depende de lo que necesite tu proyecto, y siempre te lo doy cerrado en la propuesta antes de empezar.',
      },
      { h2: 'Cómo funciona el mantenimiento' },
      {
        p: 'Cada proyecto lleva su **cuota mensual de mantenimiento**: desde **40 €/mes** para una landing page, desde **49 €/mes** para una web corporativa y desde **69 €/mes** para una tienda online o un software a medida. No hay una tarifa única porque cada mantenimiento es un mundo; en la propuesta te detallo qué cubre la cuota de tu proyecto. Lo explico con más detalle en [cuánto cuesta mantener una página web al mes](/blog/cuanto-cuesta-mantener-una-pagina-web/).',
      },
      { h2: 'Qué hace que el precio suba' },
      {
        ul: [
          '**Número de páginas** y cuánto contenido hay que preparar.',
          '**Funcionalidades**: reservas, pagos, áreas privadas o integraciones con otros programas.',
          '**Textos e imágenes**: si los aportas tú o hay que crearlos.',
          '**Diseño**: cuántas secciones distintas hay que diseñar desde cero.',
          '**Plazos**: un proyecto urgente requiere reorganizar el resto del trabajo.',
        ],
      },
      {
        cta: {
          title: '¿Quieres un precio cerrado para tu proyecto?',
          text: 'Cuéntame qué necesitas y te paso una propuesta con precio y plazo, sin compromiso.',
        },
      },
      { h2: 'Gastos aparte' },
      {
        ul: [
          '**Dominio**: unos 10–20 € al año para un .com o .es.',
          '**Hosting**: desde unos pocos euros al mes para una web pequeña. Si aún no lo tienes, te ayudo a contratarlo.',
        ],
      },
      { h2: 'Qué preguntar antes de contratar una web' },
      {
        p: 'Compares con quien compares, pregunta siempre qué incluye exactamente el precio, si el dominio y la web quedan a tu nombre, si la web se entrega preparada para Google o solo «publicada», y qué pasa si en el futuro quieres cambiar de proveedor. Si te interesa saber qué debería incluir, lo tienes en [qué debe tener la web de un negocio local](/blog/que-debe-tener-la-web-de-un-negocio-local/).',
      },
      {
        p: 'Si quieres un precio cerrado para tu caso, [cuéntame tu proyecto](/contacto/) y te paso una propuesta sin compromiso.',
      },
    ],
  },
]
