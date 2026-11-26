# Portafolio de Kevin Carrasco

Sitio personal publicado en **<https://jostero32.github.io>** (español) y **<https://jostero32.github.io/en/>** (inglés).

Diseño **Ceniza nocturna**: secciones grafito que alternan con blanco y gris ceniza, un solo acento color
mortiño y la tipografía Familjen Grotesk.

**Stack:** Astro 5 · Tailwind CSS 4 · TypeScript · GitHub Pages

## Cómo funciona

- **Contenido** en `src/data/`: textos de la interfaz (`perfil.ts`), los 6 proyectos destacados con sus páginas
  de detalle (`proyectos.ts`), y equipo, experiencia, tecnologías, certificaciones y hardware (`secciones.ts`).
  Todo está en español e inglés.
- **Capturas**: se leen de cada repositorio (`docs/img/…`) al construir y Astro las convierte a WebP en varios
  tamaños. Si cambia una captura en un repo, el sitio la toma en la siguiente publicación.
- **CV en PDF**: `/cv/` y `/en/cv/` son hojas A4; `npm run cv` las convierte en
  `kevin-carrasco-cv.pdf` y `kevin-carrasco-cv-en.pdf` a partir del mismo contenido.
- **Publicación**: la GitHub Action construye, genera los PDF y publica en Pages con cada push a `main`,
  todos los días y a pedido.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # sitio en dist/
npm run cv         # PDF del CV dentro de dist/ (necesita Google Chrome)
node scripts/og.mjs  # regenera la imagen para compartir (public/og.png)
```

## Pendientes

- [ ] **Foto**: agregar `src/assets/foto.jpg` (o `.png`/`.webp`). Mientras no exista se muestran las iniciales.
- [ ] **Fechas de la práctica en EEASA**: `experiencia.periodo` en `src/data/secciones.ts`.
- [ ] **Nivel de inglés**: `persona.idiomas` en `src/data/perfil.ts`.
- [ ] **Credenciales de Cisco**: URL de cada insignia en `src/data/certificaciones.json`.
- [ ] **Formulario**: crear un formulario en un servicio (Formspree, Web3Forms…) y guardar su URL en la variable
      del repositorio `PUBLIC_FORM_ENDPOINT`. Sin ella, el formulario abre el correo con el mensaje listo.
- [ ] **Demos**: agregar `demo` en `src/data/proyectos.ts` cuando un proyecto esté en línea.
