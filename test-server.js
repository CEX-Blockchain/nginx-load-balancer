const http = require('http');

const hostname = '0.0.0.0';

function startServer(
    hostname = '0.0.0.0',
    port = 3101
) {

    const server = http.createServer((req, res) => {
        if (req.method === 'GET' && req.url === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Hello world from ${port}\n`);
        } else {
            res.statusCode = 404;
            res.end('Not Found\n');
        }
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

const ports = [3101, 3102, 3103, 3104, 3105];

ports.forEach(port => {
    startServer(hostname, port);
});