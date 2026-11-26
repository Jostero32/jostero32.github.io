import { gh, type Txt } from '../lib/i18n';

export interface Proyecto {
  slug: string;
  nombre: string;
  repo: string;
  codigo: string;
  demo?: string;
  estado: Txt;
  contexto: Txt;
  resumen: Txt; // tarjeta de la página principal
  descripcion: Txt; // hero de la página de detalle
  tarjeta: string[]; // tecnologías en la tarjeta
  imagen: string; // captura principal
  encuadre?: string; // object-position si la captura no es una pantalla (por ejemplo una portada con texto)
  capturas: string[];
  problema: Txt;
  enCorto: { k: Txt; v: Txt }[];
  funciones: Txt[];
  arquitectura: { titulo: Txt; texto: Txt }[];
  notaArquitectura: Txt;
  decisiones: { titulo: Txt; texto: Txt }[];
  stack: string[];
}

const t = (es: string, en: string): Txt => ({ es, en });

export const proyectos: Proyecto[] = [
  {
    slug: 'pliego',
    nombre: 'Pliego',
    repo: 'Proyecto-Latex-Web',
    codigo: 'https://github.com/Jostero32/Proyecto-Latex-Web',
    estado: t('En desarrollo', 'In development'),
    contexto: t('2026', '2026'),
    resumen: t('Editor LaTeX colaborativo en el navegador, al estilo de Overleaf.', 'Collaborative LaTeX editor in the browser, in the style of Overleaf.'),
    descripcion: t('Editor LaTeX colaborativo en el navegador, al estilo de Overleaf.', 'Collaborative LaTeX editor in the browser, in the style of Overleaf.'),
    tarjeta: ['React', 'Fastify', 'Yjs', 'PostgreSQL'],
    imagen: gh('Proyecto-Latex-Web', 'docs/img/editor.png'),
    capturas: [gh('Proyecto-Latex-Web', 'docs/img/proyectos.png'), gh('Proyecto-Latex-Web', 'docs/img/entrar.png')],
    problema: t(
      'Escribir y compilar documentos LaTeX en equipo sin instalar TeX en la computadora, con varias personas editando el mismo archivo al mismo tiempo.',
      'Writing and compiling LaTeX documents as a team without installing TeX locally, with several people editing the same file at the same time.',
    ),
    enCorto: [
      { k: t('Tipo', 'Type'), v: t('Aplicación web', 'Web application') },
      { k: t('Estado', 'Status'), v: t('En desarrollo', 'In development') },
      { k: t('Organización', 'Structure'), v: t('Monorepo con pnpm', 'pnpm monorepo') },
      { k: t('Pruebas', 'Tests'), v: t('Vitest', 'Vitest') },
    ],
    funciones: [
      t('Colaboración en tiempo real con cursores compartidos', 'Real-time collaboration with shared cursors'),
      t('Compilación a PDF en un entorno aislado', 'PDF compilation in an isolated environment'),
      t('SyncTeX del código al PDF y del PDF al código', 'SyncTeX from source to PDF and back'),
      t('Proyectos con imágenes', 'Projects with images'),
      t('Permisos verificados en cada acción, también por WebSocket', 'Permissions checked on every action, including over WebSocket'),
      t('Editor CodeMirror y visor PDF.js', 'CodeMirror editor and PDF.js viewer'),
    ],
    arquitectura: [
      { titulo: t('Web', 'Web'), texto: t('React, Vite, CodeMirror y PDF.js', 'React, Vite, CodeMirror and PDF.js') },
      { titulo: t('Servidor', 'Server'), texto: t('Fastify y colaboración con Hocuspocus y Yjs', 'Fastify, with collaboration through Hocuspocus and Yjs') },
      { titulo: t('Cola', 'Queue'), texto: t('Redis con BullMQ', 'Redis with BullMQ') },
      { titulo: t('Compilador', 'Compiler'), texto: t('TeX Live en contenedores efímeros', 'TeX Live in ephemeral containers') },
    ],
    notaArquitectura: t(
      'PostgreSQL guarda los datos y MinIO los archivos, el PDF y la salida de SyncTeX.',
      'PostgreSQL stores the data and MinIO stores the files, the PDF and the SyncTeX output.',
    ),
    decisiones: [
      { titulo: t('Compilación aislada', 'Isolated compilation'), texto: t('Cada documento se compila en un contenedor desechable, sin red y con límites de CPU, memoria y tiempo.', 'Each document compiles in a disposable container with no network and CPU, memory and time limits.') },
      { titulo: t('Mismos permisos en REST y WebSocket', 'Same permissions over REST and WebSocket'), texto: t('La misma verificación de acceso cubre la API y el canal en tiempo real.', 'The same access check covers the API and the real-time channel.') },
      { titulo: t('Contratos compartidos', 'Shared contracts'), texto: t('Los tipos de la API, los códigos de error y las validaciones viven en un paquete común del monorepo.', 'API types, error codes and validations live in a shared monorepo package.') },
    ],
    stack: ['TypeScript', 'React', 'Vite', 'CodeMirror', 'PDF.js', 'Fastify', 'Yjs', 'Hocuspocus', 'PostgreSQL', 'Drizzle', 'MinIO', 'Redis', 'BullMQ', 'Docker', 'Vitest'],
  },
  {
    slug: 'cipherchat',
    nombre: 'CipherChat',
    repo: 'ProyectoSeguridad',
    codigo: 'https://github.com/Jostero32/ProyectoSeguridad',
    estado: t('Funcional', 'Working'),
    contexto: t('Materia de Seguridad, 2026', 'Security course, 2026'),
    resumen: t('Mensajería en tiempo real con cifrado configurable en tres capas.', 'Real-time messaging with configurable encryption in three layers.'),
    descripcion: t('Mensajería en tiempo real con cifrado simétrico configurable en tres capas.', 'Real-time messaging with configurable symmetric encryption in three layers.'),
    tarjeta: ['Angular', 'Spring Boot', 'STOMP', 'MinIO'],
    imagen: gh('ProyectoSeguridad', 'docs/img/chat.png'),
    capturas: [gh('ProyectoSeguridad', 'docs/img/login.png')],
    problema: t(
      'Comparar AES-GCM, DES-CBC y ChaCha20 dentro de un sistema de mensajería real, en lugar de probarlos en ejemplos aislados.',
      'Comparing AES-GCM, DES-CBC and ChaCha20 inside a real messaging system instead of isolated examples.',
    ),
    enCorto: [
      { k: t('Tipo', 'Type'), v: t('Mensajería web', 'Web messaging') },
      { k: t('Estado', 'Status'), v: t('Funcional', 'Working') },
      { k: t('Backend', 'Backend'), v: t('Java 21', 'Java 21') },
      { k: t('Cifrado', 'Encryption'), v: t('Tres capas', 'Three layers') },
    ],
    funciones: [
      t('Chats individuales y grupales con roles', 'One-to-one and group chats with roles'),
      t('Texto, imágenes, audio, archivos y ubicación', 'Text, images, audio, files and location'),
      t('Indicador de escritura, presencia y estados de lectura', 'Typing indicator, presence and read receipts'),
      t('Respuestas, reacciones, edición y borrado', 'Replies, reactions, editing and deleting'),
      t('Sesiones por dispositivo y cierre en todos', 'Per-device sessions and sign-out everywhere'),
      t('Recuperación de contraseña por correo', 'Password recovery by email'),
    ],
    arquitectura: [
      { titulo: t('Frontend', 'Frontend'), texto: t('Angular con un servicio de cifrado', 'Angular with an encryption service') },
      { titulo: t('Backend', 'Backend'), texto: t('Spring Boot 3 y Java 21', 'Spring Boot 3 and Java 21') },
      { titulo: t('Tiempo real', 'Real time'), texto: t('WebSocket con STOMP y SockJS', 'WebSocket with STOMP and SockJS') },
      { titulo: t('Datos', 'Data'), texto: t('PostgreSQL y MinIO', 'PostgreSQL and MinIO') },
    ],
    notaArquitectura: t(
      'nginx funciona como proxy inverso y conserva las firmas de las URLs de MinIO.',
      'nginx acts as a reverse proxy and preserves the MinIO URL signatures.',
    ),
    decisiones: [
      { titulo: t('Tres capas independientes', 'Three independent layers'), texto: t('Datos en la base con AES-GCM, cuerpos REST con DES-CBC y mensajes WebSocket con ChaCha20.', 'Data at rest with AES-GCM, REST bodies with DES-CBC and WebSocket messages with ChaCha20.') },
      { titulo: t('Configurable sin tocar código', 'Configurable without code changes'), texto: t('El algoritmo y la clave de cada capa se cambian con variables de entorno.', 'Each layer’s algorithm and key are changed through environment variables.') },
      { titulo: t('Multimedia con URLs temporales', 'Media with expiring URLs'), texto: t('Los archivos se sirven desde MinIO con URLs prefirmadas que expiran en 24 horas.', 'Files are served from MinIO with presigned URLs that expire after 24 hours.') },
    ],
    stack: ['Angular', 'Java 21', 'Spring Boot 3', 'PostgreSQL', 'MinIO', 'WebSocket', 'STOMP', 'Docker', 'nginx', 'Swagger'],
  },
  {
    slug: 'finanecuador',
    nombre: 'FinanEcuador',
    repo: 'economia-amortizacion',
    codigo: 'https://github.com/Jostero32/economia-amortizacion',
    estado: t('Desplegado', 'Deployed'),
    contexto: t('Ingeniería Económica, 2026', 'Engineering Economics course, 2026'),
    resumen: t('Simulador de crédito e inversiones con tasas del Banco Central del Ecuador.', 'Loan and investment simulator using Central Bank of Ecuador rates.'),
    descripcion: t('Simulador de crédito e inversiones con tasas del Banco Central del Ecuador.', 'Loan and investment simulator using Central Bank of Ecuador rates.'),
    tarjeta: ['React', 'Express', 'PostgreSQL', 'TensorFlow.js'],
    imagen: gh('economia-amortizacion', 'docs/img/simulador-credito.png'),
    capturas: [
      gh('economia-amortizacion', 'docs/img/simulador-inversion.png'),
      gh('economia-amortizacion', 'docs/img/admin-solicitudes.png'),
      gh('economia-amortizacion', 'docs/img/inicio.png'),
    ],
    problema: t(
      'Simular créditos de consumo y depósitos a plazo con reglas ecuatorianas reales, desde la simulación hasta la solicitud con verificación de identidad. Es un simulador: no otorga créditos reales.',
      'Simulating consumer loans and term deposits with real Ecuadorian rules, from the simulation to an application with identity verification. It is a simulator: it does not grant real loans.',
    ),
    enCorto: [
      { k: t('Tipo', 'Type'), v: t('Plataforma web', 'Web platform') },
      { k: t('Estado', 'Status'), v: t('Desplegado', 'Deployed') },
      { k: t('Pruebas', 'Tests'), v: t('320 en 25 suites', '320 in 25 suites') },
      { k: t('Despliegue', 'Deployment'), v: t('Dokploy', 'Dokploy') },
    ],
    funciones: [
      t('Amortización francesa y alemana', 'French and German amortization'),
      t('Conversión entre tasa nominal y efectiva', 'Nominal and effective rate conversion'),
      t('Depósitos a plazo y ahorro programado', 'Term deposits and scheduled savings'),
      t('Abonos anticipados que reducen plazo o cuota', 'Early payments that shorten the term or the installment'),
      t('Verificación de identidad con cédula, selfie y prueba de vida', 'Identity verification with ID card, selfie and liveness check'),
      t('Roles de cliente, asesor y administrador con auditoría', 'Client, advisor and admin roles with an audit log'),
    ],
    arquitectura: [
      { titulo: t('Web', 'Web'), texto: t('React servido por nginx', 'React served by nginx') },
      { titulo: t('API', 'API'), texto: t('Express con Sequelize', 'Express with Sequelize') },
      { titulo: t('Identidad', 'Identity'), texto: t('Comparación facial y lectura MRZ en el servidor', 'Server-side face matching and MRZ reading') },
      { titulo: t('Datos', 'Data'), texto: t('PostgreSQL con 14 modelos', 'PostgreSQL with 14 models') },
    ],
    notaArquitectura: t(
      'Se despliega con Docker Compose en Dokploy. Los documentos solo se entregan por endpoints con control de acceso.',
      'It ships with Docker Compose on Dokploy. Documents are only served through access-controlled endpoints.',
    ),
    decisiones: [
      { titulo: t('La identidad la decide el servidor', 'The server decides identity'), texto: t('Umbrales de similitud configurables, calibrados con fotos reales de cédulas.', 'Configurable similarity thresholds, calibrated with real ID card photos.') },
      { titulo: t('Dinero sin errores de redondeo', 'Money without rounding errors'), texto: t('Un solo módulo de redondeo y una última cuota que absorbe los centavos.', 'A single rounding module and a last installment that absorbs the cents.') },
      { titulo: t('Probado a fondo', 'Thoroughly tested'), texto: t('320 pruebas automatizadas con Jest cubren amortización, permisos e identidad.', '320 automated Jest tests cover amortization, permissions and identity.') },
    ],
    stack: ['React', 'Vite', 'Tailwind', 'Express', 'Sequelize', 'PostgreSQL', 'TensorFlow.js', 'Tesseract', 'pdfkit', 'Jest', 'Docker', 'Dokploy'],
  },
  {
    slug: 'encomitrack',
    nombre: 'EncomiTrack',
    repo: 'EncomiTrack',
    codigo: 'https://github.com/Jostero32/EncomiTrack',
    estado: t('Funcional', 'Working'),
    contexto: t('Ingeniería de Software, UTA', 'Software Engineering, UTA'),
    resumen: t('Integrador para un negocio de encomiendas, con nómina y liquidación laboral.', 'Capstone for a parcel business, with payroll and employment settlement.'),
    descripcion: t('Nómina y liquidación laboral para un negocio de encomiendas, según la ley ecuatoriana.', 'Payroll and employment settlement for a parcel business, under Ecuadorian law.'),
    tarjeta: ['Next.js', 'Angular', 'Express', 'TypeORM'],
    imagen: gh('EncomiTrack', 'docs/img/02-nomina-panel.png'),
    capturas: [
      gh('EncomiTrack', 'docs/img/04-nomina-rol.png'),
      gh('EncomiTrack', 'docs/img/08-liquidacion-paz-y-salvo.png'),
      gh('EncomiTrack', 'docs/img/03-nomina-organigrama.png'),
    ],
    problema: t(
      'Un negocio de encomiendas necesitaba calcular nómina y liquidaciones bajo el Código del Trabajo, la LOSEP y la LOEP, con décimos, fondos de reserva y valores legales que cambian cada año.',
      'A parcel business needed to calculate payroll and settlements under Ecuador’s Labor Code, LOSEP and LOEP, with bonuses, reserve funds and legal values that change every year.',
    ),
    enCorto: [
      { k: t('Tipo', 'Type'), v: t('Suite de aplicaciones', 'Application suite') },
      { k: t('Estado', 'Status'), v: t('Funcional', 'Working') },
      { k: t('Módulos', 'Modules'), v: t('Portal, nómina y liquidación', 'Portal, payroll and settlement') },
      { k: t('Despliegue', 'Deployment'), v: t('Un solo Docker Compose', 'A single Docker Compose') },
    ],
    funciones: [
      t('Nómina con régimen configurable, horas extra, IESS y fondos de reserva', 'Payroll with configurable regimes, overtime, social security and reserve funds'),
      t('Roles de pago individuales y consolidados en PDF y Excel', 'Individual and consolidated payslips in PDF and Excel'),
      t('Expediente de salida con paz y salvo por área', 'Exit file with clearance by department'),
      t('Liquidación según la causa de terminación, con acta en PDF', 'Settlement by termination cause, with a PDF certificate'),
      t('Parámetros versionados por período', 'Versioned parameters by period'),
      t('Organigramas por jerarquía y nivel', 'Org charts by hierarchy and level'),
    ],
    arquitectura: [
      { titulo: t('Gateway', 'Gateway'), texto: t('nginx como única entrada', 'nginx as the single entry point') },
      { titulo: t('Portal', 'Portal'), texto: t('Next.js 15', 'Next.js 15') },
      { titulo: t('Nómina', 'Payroll'), texto: t('Next.js 15 con SQLite', 'Next.js 15 with SQLite') },
      { titulo: t('Liquidación', 'Settlement'), texto: t('Angular 21 y Express con SQLite', 'Angular 21 and Express with SQLite') },
    ],
    notaArquitectura: t(
      'Todo corre en un solo Docker Compose, en local y en Dokploy con Traefik.',
      'Everything runs in a single Docker Compose, locally and on Dokploy with Traefik.',
    ),
    decisiones: [
      { titulo: t('Dinero sin decimales flotantes', 'Money without floating point'), texto: t('La nómina calcula en centavos enteros con bigint y la liquidación usa decimal.js.', 'Payroll computes in integer cents with bigint and settlement uses decimal.js.') },
      { titulo: t('Roles de pago reproducibles', 'Reproducible payslips'), texto: t('Cada cambio de tasa crea una versión, así un rol antiguo se reimprime con sus valores originales.', 'Every rate change creates a version, so an old payslip reprints with its original values.') },
      { titulo: t('Sin servicios externos', 'No external services'), texto: t('Reemplacé Supabase por un volumen local y SQLite para que funcione sin cuentas ni claves.', 'I replaced Supabase with a local volume and SQLite so it runs without accounts or keys.') },
    ],
    stack: ['Next.js 15', 'Angular 21', 'Express', 'TypeORM', 'Zod', 'SQLite', 'Docker', 'nginx', 'Traefik', 'Vitest'],
  },
  {
    slug: 'shop-and-buy',
    nombre: 'Shop&Buy',
    repo: 'Proyecto-Web-y-Moviles---Backend',
    codigo: 'https://github.com/Jostero32/Proyecto-Web-y-Moviles---Backend',
    estado: t('Funcional', 'Working'),
    contexto: t('Aplicaciones Web y Móviles, 2025', 'Web and Mobile Applications course, 2025'),
    resumen: t('Marketplace de segunda mano con chat en tiempo real.', 'Second-hand marketplace with real-time chat.'),
    descripcion: t('Marketplace de segunda mano con chat en tiempo real entre comprador y vendedor.', 'Second-hand marketplace with real-time chat between buyer and seller.'),
    tarjeta: ['React', 'Express', 'WebSocket', 'PostgreSQL'],
    imagen: gh('Proyecto-Web-y-Moviles---Backend', 'docs/img/productos.png'),
    capturas: [
      gh('Proyecto-Web-y-Moviles---Backend', 'docs/img/detalle.png'),
      gh('Proyecto-Web-y-Moviles---Backend', 'docs/img/chat.png'),
      gh('Proyecto-Web-y-Moviles---Backend', 'docs/img/favoritos.png'),
    ],
    problema: t(
      'Facilitar la compra y venta de artículos usados entre personas, con comunicación directa dentro de la misma plataforma.',
      'Making it easy for people to buy and sell used items, with direct communication inside the same platform.',
    ),
    enCorto: [
      { k: t('Tipo', 'Type'), v: t('Marketplace web', 'Web marketplace') },
      { k: t('Estado', 'Status'), v: t('Funcional', 'Working') },
      { k: t('API', 'API'), v: t('Express 5', 'Express 5') },
      { k: t('Documentación', 'Docs'), v: t('Swagger', 'Swagger') },
    ],
    funciones: [
      t('Publicaciones con fotos, categorías y subcategorías', 'Listings with photos, categories and subcategories'),
      t('Chat entre comprador y vendedor en tiempo real', 'Real-time chat between buyer and seller'),
      t('Notificaciones en tiempo real', 'Real-time notifications'),
      t('Favoritos y calificaciones', 'Favorites and ratings'),
      t('Cuentas verificadas por correo', 'Email-verified accounts'),
      t('Gestión de roles', 'Role management'),
    ],
    arquitectura: [
      { titulo: t('Web', 'Web'), texto: t('React y Tailwind', 'React and Tailwind') },
      { titulo: t('API', 'API'), texto: t('Express 5 con JWT', 'Express 5 with JWT') },
      { titulo: t('Tiempo real', 'Real time'), texto: t('WebSocket para chat y notificaciones', 'WebSocket for chat and notifications') },
      { titulo: t('Datos', 'Data'), texto: t('PostgreSQL con Sequelize', 'PostgreSQL with Sequelize') },
    ],
    notaArquitectura: t(
      'Los correos salen con Nodemailer y las fotos se guardan con Multer. Todo corre en Docker Compose.',
      'Emails go out through Nodemailer and photos are stored with Multer. Everything runs in Docker Compose.',
    ),
    decisiones: [
      { titulo: t('Todo dentro de Docker Compose', 'Everything inside Docker Compose'), texto: t('La API llega a la base por el nombre del contenedor, sin configuración extra.', 'The API reaches the database by container name, with no extra configuration.') },
      { titulo: t('Credenciales fuera del repositorio', 'Credentials outside the repository'), texto: t('Las variables viven en un .env y un .env.example documenta cada una.', 'Variables live in a .env file and a .env.example documents each one.') },
      { titulo: t('Camino a una tienda real', 'Toward a real store'), texto: t('Lo estoy adaptando para reemplazar la tienda en línea de un negocio.', 'I am adapting it to replace a business’s online store.') },
    ],
    stack: ['React', 'Tailwind', 'Node.js', 'Express 5', 'Sequelize', 'PostgreSQL', 'JWT', 'WebSocket', 'Nodemailer', 'Swagger', 'Docker'],
  },
  {
    slug: 'techstore-360',
    nombre: 'TechStore 360',
    repo: 'TechStore360',
    codigo: 'https://github.com/Jostero32/TechStore360',
    estado: t('Desplegado', 'Deployed'),
    contexto: t('Proyecto académico, 2026', 'Academic project, 2026'),
    resumen: t('API REST en dos instancias con balanceo nginx y Keepalived.', 'REST API on two instances with nginx load balancing and Keepalived.'),
    descripcion: t('API REST de alta disponibilidad con dos instancias, balanceo nginx y Keepalived.', 'High-availability REST API with two instances, nginx load balancing and Keepalived.'),
    tarjeta: ['Python', 'Flask', 'nginx', 'SOAP'],
    imagen: gh('TechStore360', 'docs/img/portada.png'),
    encuadre: 'left center',
    capturas: [],
    problema: t(
      'Mantener la tienda en línea disponible aunque caiga una instancia de la API, el balanceador o la base de datos principal.',
      'Keeping the online store available even if an API instance, the load balancer or the primary database goes down.',
    ),
    enCorto: [
      { k: t('Tipo', 'Type'), v: t('API REST', 'REST API') },
      { k: t('Estado', 'Status'), v: t('Desplegado', 'Deployed') },
      { k: t('Instancias', 'Instances'), v: t('Dos', 'Two') },
      { k: t('Facturación', 'Invoicing'), v: t('SOAP', 'SOAP') },
    ],
    funciones: [
      t('Dos instancias de la API detrás de un balanceador nginx', 'Two API instances behind an nginx load balancer'),
      t('Alta disponibilidad con Keepalived', 'High availability with Keepalived'),
      t('Autenticación con Firebase', 'Authentication with Firebase'),
      t('Facturación mediante un servicio SOAP', 'Invoicing through a SOAP service'),
      t('Conmutación automática a la base de respaldo', 'Automatic failover to the backup database'),
      t('Avisos por SMS y correo en cada compra', 'SMS and email notices on every purchase'),
    ],
    arquitectura: [
      { titulo: t('Clientes', 'Clients'), texto: t('Aplicaciones que consumen la API', 'Applications that consume the API') },
      { titulo: t('Balanceador', 'Load balancer'), texto: t('nginx con Keepalived', 'nginx with Keepalived') },
      { titulo: t('API', 'API'), texto: t('Flask en dos instancias', 'Flask on two instances') },
      { titulo: t('Datos', 'Data'), texto: t('PostgreSQL', 'PostgreSQL') },
    ],
    notaArquitectura: t(
      'La autenticación usa Firebase y la facturación se hace con un servicio SOAP.',
      'Authentication uses Firebase and invoicing goes through a SOAP service.',
    ),
    decisiones: [
      { titulo: t('Dos instancias balanceadas', 'Two balanced instances'), texto: t('Si una instancia deja de responder, nginx envía el tráfico a la otra; si cae el balanceador, Keepalived mueve la IP virtual al nodo de respaldo.', 'If an instance stops responding, nginx sends traffic to the other one; if the load balancer fails, Keepalived moves the virtual IP to the backup node.') },
      { titulo: t('Puentes por cabecera Host', 'Host header bridges'), texto: t('Render enruta por la cabecera Host, así que el balanceador levanta un puente local por instancia que fija el Host correcto.', 'Render routes by the Host header, so the load balancer runs a local bridge per instance that sets the right Host.') },
      { titulo: t('Base de datos de respaldo', 'Backup database'), texto: t('Si la base principal no responde en 3 segundos, la API se conecta a la de respaldo.', 'If the primary database does not respond within 3 seconds, the API connects to the backup.') },
    ],
    stack: ['Python', 'Flask', 'nginx', 'Keepalived', 'PostgreSQL', 'Firebase', 'SOAP', 'Render', 'Docker'],
  },
];
