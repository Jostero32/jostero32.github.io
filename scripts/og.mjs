// Genera public/og.png (1200×630), la vista previa al compartir el sitio, con el estilo Ceniza nocturna.
// Uso: node scripts/og.mjs
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const fuente = (peso) =>
  readFileSync(fileURLToPath(new URL(`../node_modules/@fontsource/familjen-grotesk/files/familjen-grotesk-latin-${peso}-normal.woff2`, import.meta.url))).toString('base64');

const html = `<!doctype html><html><head><style>
@font-face{font-family:F;font-weight:500;src:url(data:font/woff2;base64,${fuente(500)})}
@font-face{font-family:F;font-weight:400;src:url(data:font/woff2;base64,${fuente(400)})}
body{margin:0}
.c{width:1200px;height:630px;box-sizing:border-box;padding:72px 80px;background:#2E3336;color:#E4E5E0;font-family:F;position:relative;overflow:hidden;
background-image:radial-gradient(#3F4649 1.2px,transparent 1.3px);background-size:28px 28px}
.n{font-size:30px;font-weight:500}
h1{margin:70px 0 0;font-size:84px;line-height:1;font-weight:500;letter-spacing:-.035em;max-width:13ch}
p{margin:30px 0 0;font-size:28px;color:#B4B8B1}
.b{position:absolute;right:80px;top:72px;background:#C9A3D6;color:#2A1733;font-size:24px;padding:10px 22px;border-radius:12px}
.u{position:absolute;left:80px;bottom:60px;font-size:24px;color:#C9A3D6}
</style></head><body><div class="c">
<div class="n">Kevin Carrasco</div><div class="b">Full stack</div>
<h1>Desarrollo aplicaciones web de principio a fin.</h1>
<p>API · base de datos · interfaz · despliegue con Docker</p>
<div class="u">jostero32.github.io</div></div></body></html>`;

const b = await chromium.launch({ channel: 'chrome' });
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(html);
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: fileURLToPath(new URL('../public/og.png', import.meta.url)) });
await b.close();
console.log('public/og.png generado');
