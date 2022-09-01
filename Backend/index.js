const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-type': 'application/json'});
 
}).listen(4001, () => console.log('Servidor rodando na porta 4001'));