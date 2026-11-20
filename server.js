const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4'
};

function sendFile(req, res, filePath, stats) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const baseHeaders = {
    'Content-Type': contentType,
    'Accept-Ranges': 'bytes',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  };

  const range = req.headers.range;
  if (range && stats.size > 0) {
    const match = /bytes=(\d*)-(\d*)/.exec(range);
    if (match) {
      const start = match[1] ? parseInt(match[1], 10) : 0;
      const end = match[2] ? Math.min(parseInt(match[2], 10), stats.size - 1) : stats.size - 1;
      if (start >= stats.size || start > end) {
        res.writeHead(416, { 'Content-Range': `bytes */${stats.size}` });
        return res.end();
      }
      res.writeHead(206, {
        ...baseHeaders,
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Content-Length': end - start + 1
      });
      return fs.createReadStream(filePath, { start, end }).pipe(res);
    }
  }

  res.writeHead(200, {
    ...baseHeaders,
    'Content-Length': stats.size
  });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const safeUrl = decodeURIComponent((req.url || '/').split('?')[0]);
  const relativeUrl = safeUrl.replace(/^\/+/, '');
  let candidatePath = path.join(PUBLIC_DIR, relativeUrl || 'index.html');

  // Prevent directory traversal
  if (candidatePath !== PUBLIC_DIR && !candidatePath.startsWith(PUBLIC_DIR + path.sep)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(candidatePath, (err, stats) => {
    if (!err && stats.isFile()) {
      return sendFile(req, res, candidatePath, stats);
    }

    if (!err && stats.isDirectory()) {
      const dirIndex = path.join(candidatePath, 'index.html');
      return fs.stat(dirIndex, (dirErr, dirStats) => {
        if (!dirErr && dirStats.isFile()) {
          return sendFile(req, res, dirIndex, dirStats);
        }
        const rootIndex = path.join(PUBLIC_DIR, 'index.html');
        fs.stat(rootIndex, (rootErr, rootStats) => {
          if (rootErr) {
            res.writeHead(500);
            return res.end('Server Error');
          }
          sendFile(req, res, rootIndex, rootStats);
        });
      });
    }

    // Fallback to sub-app index.html for /activo-inmobiliario/* or root index.html
    const isActivoRoute =
      safeUrl === '/activo-inmobiliario' || safeUrl.startsWith('/activo-inmobiliario/');
    const fallbackPath = isActivoRoute
      ? path.join(PUBLIC_DIR, 'activo-inmobiliario', 'index.html')
      : path.join(PUBLIC_DIR, 'index.html');

    fs.stat(fallbackPath, (fbErr, fbStats) => {
      if (fbErr || !fbStats.isFile()) {
        res.writeHead(404);
        return res.end('Not Found');
      }
      sendFile(req, res, fallbackPath, fbStats);
    });
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`NegocioUp Web Service activo en puerto ${PORT}`);
});
