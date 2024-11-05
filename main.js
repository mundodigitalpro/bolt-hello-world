import { createServer } from 'http';
    import { fileURLToPath } from 'url';
    import { readFileSync } from 'fs';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const indexHtml = readFileSync(`${__dirname}/index.html`, 'utf8');

    createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexHtml);
    }).listen(3000, () => {
      console.log('Server listening on port 3000');
    });
