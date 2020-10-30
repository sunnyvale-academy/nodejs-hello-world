const http = require('http');
const os = require("os");

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const hostname = os.hostname();
  const env = process.env.ENVIRONMENT;
  const version = process.env.VERSION;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`Hello World v.${version} from host ${hostname}!<br/>I'm running in ${env}<br/>`);
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('SIGINT', function() {
    process.exit();
});