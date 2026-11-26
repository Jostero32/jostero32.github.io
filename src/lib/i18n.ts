export type Lang = 'es' | 'en';
export type Txt = { es: string; en: string };

/** Devuelve el texto en el idioma pedido (los textos sin traducción se escriben como string). */
export const tr = (t: Txt | string, lang: Lang): string => (typeof t === 'string' ? t : t[lang]);

export const rutaInicio = (lang: Lang) => (lang === 'es' ? '/' : '/en/');
export const rutaProyecto = (slug: string, lang: Lang) => (lang === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`);
export const rutaCv = (lang: Lang) => (lang === 'es' ? '/cv/kevin-carrasco-cv.pdf' : '/en/cv/kevin-carrasco-cv-en.pdf');

/** Archivo de un repositorio público de Jostero32 (las capturas viven en cada repo). */
export const gh = (repo: string, ruta: string, rama = 'main') =>
  `https://raw.githubusercontent.com/Jostero32/${repo}/${rama}/${ruta}`;

export const fecha = (iso: string, lang: Lang) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString(lang === 'es' ? 'es-EC' : 'en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
