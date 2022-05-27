const http = require('http');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.get('/error', () => {
//   a.b.c;
// });

http
  .createServer((req, res) => {
    if (req.url === '/error') {
      throw new Error('omgggggggg');
    }

    res.writeHead(200);
    res.end('hello world\n');
  })
  .listen(PORT);

console.log(`Running on http://${HOST}:${PORT}`);
