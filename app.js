//Este é um servidor HTTP simples que responde com "Olá, Mundo!" para qualquer solicitação.

const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Olá, Mundo!');

});


const PORT = 3000;

server.listen(PORT, () => {

    console.log(`Servidor rodando em http://localhost:${PORT}/`);

});