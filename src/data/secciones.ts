import { gh, type Txt } from '../lib/i18n';
import certificacionesJson from './certificaciones.json';

const t = (es: string, en: string): Txt => ({ es, en });

export const equipo = [
  {
    nombre: 'Control de Combustible',
    pr: { tuyos: 8, total: 14 },
    descripcion: t('Gestión de flota con microservicios .NET 8 detrás de un API Gateway.', 'Fleet management with .NET 8 microservices behind an API Gateway.'),
    aporte: t('El API Gateway, la autenticación JWT y los servicios de conductores y consumo de combustible.', 'The API Gateway, JWT authentication and the driver and fuel consumption services.'),
    etiquetas: ['.NET 8', t('Microservicios', 'Microservices'), 'JWT'],
    enlaces: [
      { texto: 'Backend', url: 'https://github.com/W1llAn/ControlCombustibleBackend/tree/develop' },
      { texto: 'Frontend', url: 'https://github.com/W1llAn/ControlCombustibleFrontend' },
    ],
  },
  {
    nombre: 'Walk Seguros',
    pr: { tuyos: 13 },
    descripcion: t('Gestión de seguros médicos con roles de administrador, agente y cliente.', 'Health insurance management with admin, agent and client roles.'),
    aporte: t('Login y usuarios, contratos, beneficios y reportes en el backend, pruebas unitarias del frontend y correcciones de SonarQube.', 'Login and users, contracts, benefits and reports in the backend, frontend unit tests and SonarQube fixes.'),
    etiquetas: ['Spring Boot', 'SonarQube', t('Pruebas', 'Testing')],
    enlaces: [
      { texto: 'Backend', url: 'https://github.com/IsmaelSailema20/GestionSegurosBackend' },
      { texto: 'Frontend', url: 'https://github.com/IsmaelSailema20/GestionSegurosFrontend' },
      { texto: 'Demo', url: 'https://gestion-seguros-frontend.vercel.app' },
    ],
  },
  {
    nombre: t('Gestión de Hospitales', 'Hospital Management'),
    pr: { tuyos: 4, total: 7 },
    descripcion: t('Administración hospitalaria con un API Gateway que traduce REST a gRPC.', 'Hospital administration with an API Gateway that translates REST into gRPC.'),
    aporte: t('Microservicios de autenticación y administración, y la comunicación gRPC con JWT.', 'Authentication and administration microservices, and gRPC communication with JWT.'),
    etiquetas: ['ASP.NET Core', 'gRPC', 'SQL Server'],
    enlaces: [{ texto: 'Backend', url: 'https://github.com/W1llAn/GestionHospitalesBackend' }],
  },
];

export const experiencia = {
  cargo: t('Pasante de desarrollo de software', 'Software development intern'),
  lugar: t('Departamento TIC, EEASA', 'IT Department, EEASA'),
  sigla: 'EEASA',
  periodo: t('Ene 2026 – Jul 2026', 'Jan 2026 – Jul 2026') as Txt | null,
  logros: [
    t('Desarrollé módulos de SISGERH para horas extra, atrasos y cumplimiento documental.', 'Built SISGERH modules for overtime, lateness and document compliance.'),
    t('Integré relojes biométricos ZKTeco y Hikvision con el sistema de talento humano.', 'Integrated ZKTeco and Hikvision biometric clocks with the HR system.'),
    t('Di soporte a servicios WebSocket sobre WebLogic.', 'Supported WebSocket services running on WebLogic.'),
  ],
  tecnologias: ['Java EE', 'Spring Boot', 'ExtJS', 'Oracle', 'WebLogic'],
};

export const formacion = {
  carrera: t('Ingeniería en Software', 'Software Engineering'),
  universidad: t('Universidad Técnica de Ambato', 'Technical University of Ambato'),
  tesis: t('Tutor de inglés con inteligencia artificial y evaluación automática de la pronunciación.', 'AI English tutor with automatic pronunciation assessment.'),
};

// Cada tecnología: [sigla de respaldo, nombre, logo en src/assets/logos/<logo>.svg].
type Grupo = { nombre: Txt; fondo: string; texto: string; items: [string, string, string?][] };
export const tecnologias: Grupo[] = [
  { nombre: t('Lenguajes', 'Languages'), fondo: '#EEE6F1', texto: '#4A2559', items: [['Ts', 'TypeScript', 'typescript'], ['Js', 'JavaScript', 'javascript'], ['Ja', 'Java', 'java'], ['C#', 'C#', 'csharp'], ['Py', 'Python', 'python'], ['C++', 'C++', 'cplusplus']] },
  { nombre: t('Frontend', 'Frontend'), fondo: '#E6ECDD', texto: '#3C4A2A', items: [['Re', 'React', 'react'], ['An', 'Angular', 'angular'], ['Nx', 'Next.js', 'nextjs'], ['Vi', 'Vite', 'vitejs'], ['Tw', 'Tailwind', 'tailwindcss']] },
  { nombre: t('Backend', 'Backend'), fondo: '#E3E8EE', texto: '#233446', items: [['Sb', 'Spring Boot', 'spring'], ['Ex', 'Express', 'express'], ['Fa', 'Fastify', 'fastify'], ['Nt', 'ASP.NET Core', 'dotnetcore'], ['Fl', 'Flask', 'flask']] },
  { nombre: t('Bases de datos', 'Databases'), fondo: '#F2EAD9', texto: '#5A4319', items: [['Pg', 'PostgreSQL', 'postgresql'], ['Mg', 'MongoDB', 'mongodb'], ['Ss', 'SQL Server', 'microsoftsqlserver'], ['Rd', 'Redis', 'redis'], ['Sl', 'SQLite', 'sqlite']] },
  { nombre: t('DevOps', 'DevOps'), fondo: '#E9EAE5', texto: '#33373A', items: [['Dk', 'Docker', 'docker'], ['Ng', 'nginx', 'nginx'], ['Dp', 'Dokploy'], ['Lx', 'Linux', 'linux'], ['Gt', 'Git', 'git']] },
  { nombre: t('Tiempo real y seguridad', 'Real time and security'), fondo: '#F0E3E6', texto: '#5B2533', items: [['Ws', 'WebSocket'], ['St', 'STOMP'], ['Gr', 'gRPC', 'grpc'], ['Jw', 'JWT', 'jwt'], ['Mn', 'MinIO', 'minio']] },
];

export interface Certificado { nombre: string; fecha: string; url: string | null; imagen?: string | null; nota?: Txt }
export const certificaciones = certificacionesJson.grupos.map((g, i) => ({
  emisor: g.emisor,
  tema: i === 0 ? t('Ciberseguridad, 2026', 'Cybersecurity, 2026') : t('Programación y ciberseguridad', 'Programming and cybersecurity'),
  colorIcono: i === 0 ? '#E3E8EE' : '#E6ECDD',
  certificados: g.certificados.map((c) => ({
    ...c,
    nota: c.nombre === 'Introduction to Cybersecurity' ? t('Certificado e insignia', 'Certificate and badge') : undefined,
  })) as Certificado[],
}));
export const perfilCredly = certificacionesJson.perfilCredly;
export const totalCertificaciones = certificaciones.reduce((n, g) => n + g.certificados.length, 0);

export const hardware = [
  { nombre: t('Sistema de riego IoT', 'IoT irrigation system'), texto: t('Monitoreo de riego con ESP32, Arduino y MQTT.', 'Irrigation monitoring with ESP32, Arduino and MQTT.'), url: 'https://github.com/Jostero32/Sistema-Riego-IoT', imagen: gh('Sistema-Riego-IoT', 'docs/img/dashboard.png') },
  { nombre: t('ESP32-Control', 'ESP32-Control'), texto: t('Cuatro botones que llaman a una API configurable.', 'Four buttons that call a configurable API.'), url: 'https://github.com/Jostero32/ESP32-Control', imagen: gh('ESP32-Control', 'docs/img/portal-wifi.png') },
  { nombre: t('Piloto', 'Piloto'), texto: t('Librería, protocolo y app Android para controlar robots por Bluetooth.', 'Library, protocol and Android app to control robots over Bluetooth.'), url: 'https://github.com/Jostero32/Piloto', imagen: gh('Piloto', 'docs/img/portada.png') },
  { nombre: t('Carro FPV con ESP32', 'FPV car with ESP32'), texto: t('Carro en primera persona controlado desde la PC.', 'First-person car driven from the PC.'), url: 'https://github.com/Jostero32/Carro-Fpv-Wifi-Esp32', imagen: gh('Carro-Fpv-Wifi-Esp32', 'docs/img/app-manejo.png') },
  { nombre: t('Restaurante domótico', 'Smart restaurant model'), texto: t('Maqueta automatizada con Arduino Mega y ESP32.', 'Automated model with Arduino Mega and ESP32.'), url: 'https://github.com/Jostero32/RestauranteDomotico', imagen: gh('RestauranteDomotico', 'docs/img/web-inicio.png') },
  { nombre: t('Guitarra para Clone Hero', 'Clone Hero guitar'), texto: t('Control inalámbrico por Bluetooth LE con ESP32.', 'Wireless Bluetooth LE controller with ESP32.'), url: 'https://github.com/Jostero32/Guitarra_CloneHero_Inalambrico_esp32', imagen: gh('Guitarra_CloneHero_Inalambrico_esp32', 'docs/img/portada.png') },
];
