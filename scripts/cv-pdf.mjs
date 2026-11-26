// Convierte las páginas /cv/ y /en/cv/ del sitio ya construido (dist/) en PDF de una hoja A4.
// Uso: npm run build && npm run cv   (necesita Google Chrome instalado)
import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const tipos = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.woff': 'font/woff', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png' };

const servidor = createServer(async (req, res) => {
  let ruta = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (ruta.endsWith('/')) ruta += 'index.html';
  try {
    const cuerpo = await readFile(join(dist, ruta));
    res.writeHead(200, { 'Content-Type': tipos[extname(ruta)] ?? 'application/octet-stream' });
    res.end(cuerpo);
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);
const puerto = servidor.address().port;

const navegador = await chromium.launch({ channel: 'chrome' });
const pagina = await navegador.newPage();
for (const [ruta, archivo] of [['/cv/', 'cv/kevin-carrasco-cv.pdf'], ['/en/cv/', 'en/cv/kevin-carrasco-cv-en.pdf']]) {
  await pagina.goto(`http://localhost:${puerto}${ruta}`, { waitUntil: 'networkidle' });
  await pagina.evaluate(() => document.fonts.ready);
  const alto = await pagina.evaluate(() => document.querySelector('.hoja')?.scrollHeight ?? 0);
  await pagina.pdf({ path: join(dist, archivo), format: 'A4', printBackground: true, preferCSSPageSize: true });
  console.log(`${archivo} (alto del contenido: ${alto}px; una hoja A4 = 1123px)`);
}
await navegador.close();
servidor.close();
