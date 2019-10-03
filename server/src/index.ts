import * as dotenv from 'dotenv';
import * as http from 'http';
dotenv.config();

const host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT, 10);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello World (${new Date().toISOString()})\n`);
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
