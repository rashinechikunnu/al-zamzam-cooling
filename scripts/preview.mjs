// Serves the built "out" folder at http://localhost:4173/alzamam/
// exactly like GitHub Pages will. Run "npm run build" first, then "npm run preview".
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const BASE_PATH = "/alzamam"; // must match basePath in next.config.ts
const PORT = 4173;
const OUT_DIR = join(process.cwd(), "out");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

async function findFile(urlPath) {
  const filePath = normalize(join(OUT_DIR, decodeURIComponent(urlPath)));
  if (!filePath.startsWith(OUT_DIR)) return null; // block "../" tricks
  try {
    const info = await stat(filePath);
    return info.isDirectory() ? join(filePath, "index.html") : filePath;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === "/" || url.pathname === BASE_PATH) {
    res.writeHead(302, { Location: `${BASE_PATH}/` }).end();
    return;
  }

  const file = url.pathname.startsWith(`${BASE_PATH}/`)
    ? await findFile(url.pathname.slice(BASE_PATH.length))
    : null;

  try {
    const body = await readFile(file ?? join(OUT_DIR, "404.html"));
    res.writeHead(file ? 200 : 404, { "Content-Type": TYPES[extname(file ?? ".html")] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end("Not found. Did you run npm run build?");
  }
}).listen(PORT, () => {
  console.log(`Preview: http://localhost:${PORT}${BASE_PATH}/`);
});
